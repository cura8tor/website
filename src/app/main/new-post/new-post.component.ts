import { Component, ViewChild, AfterViewInit,OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import * as Dropzone from 'dropzone';
import {NotificationService,CONSTANTS} from '../../services';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods
@Component({
    moduleId: module.id,
    selector: 'new-post',
    templateUrl: 'new-post.component.html',
    styleUrls: ['new-post.component.scss']
})
export class NewPostComponent implements AfterViewInit, OnInit{

    DROPZONE_CONFIG: DropzoneConfigInterface = {
        url:'no-url',
        maxFilesize: 10,
        acceptedFiles: 'image/*',
        autoProcessQueue: false,
        addRemoveLinks:true,
        maxFiles: 4
    };

    socialShare:boolean = false;
    files:Array<File> = [];
    dpzObject;
    @ViewChild('dropzoneObject') dropzoneObject;
    filesExceeded:boolean = false;
    userData:FormGroup;

    projectType:Array<string> = CONSTANTS.PROJECT_TYPE.sort();

    platforms:Array<string> = CONSTANTS.PLATFORMS.sort();

    image:string = 'assets/images/assetsdrag.png'

    constructor(private _notifService:NotificationService, 
                private fbuilder:FormBuilder,
                private fb: FirebaseApp){
        Dropzone.autoDiscover = false
    }

    ngAfterViewInit(): void {
        this.dpzObject = this.dropzoneObject.directiveRef.dropzone
    }

    toggleSocialShare () {
        this.socialShare = !this.socialShare
    }

    onFilesExceeded(evt) {
        this.filesExceeded = true
        this.dpzObject.removeFile(evt)
    }

    ngOnInit(): void {
        this.userData = this.fbuilder.group({
            title:[null, Validators.required],
            description:[null, Validators.required],
            tags:[null],
            demo:[null],
            postType:[this.projectType[0]],
            platform:[this.platforms[0]]
        })
    }

    onSubmit ({value}) {
        let storageRef = this.fb.storage().ref();
        const imagesRef = storageRef.child('posts');
        const files:Array<any> = this.dpzObject.files
        files.forEach(f=>{
            const {dataURL} = f
            imagesRef.putString(dataURL, 'data_url').then(s=>console.log(s));
        })

        /*if(this.dpzObject.files.length < 1){
            this._notifService.sendMessage(this._notifService.types.danger, '<div class="text-center"><i class="mdi mdi-image"></i>You must upload images.</div>')
        }else{
            const dataStore = {images:this.dpzObject.files, twitterShare:this.socialShare, value}    
        }*/
        
    }
}