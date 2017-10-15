import { Component, ViewChild, AfterViewInit,OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import * as Dropzone from 'dropzone';
import {NotificationService,CONSTANTS,StorageService,CollectionService} from '../../services';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods
import { NewPostService } from './new-post.service';
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'new-post',
    templateUrl: 'new-post.component.html',
    styleUrls: ['new-post.component.scss'],
    providers:[StorageService]
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
    newCollection:boolean;
    collections:Array<string> = [];
    newCollectionString:string = 'Add New Collection';
    showNewCollectionInput:boolean = false;

    projectType:Array<string> = CONSTANTS.PROJECT_TYPE.sort();

    platforms:Array<string> = CONSTANTS.PLATFORMS.sort();

    image:string = 'assets/images/assetsdrag.png'

    constructor(private _notifService:NotificationService, 
                private fbuilder:FormBuilder,
                private fb: FirebaseApp,
                private storage:StorageService,
                private newPostService:NewPostService,
                private colService:CollectionService,
                private afAuth:AngularFireAuth){

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
            platform:[this.platforms[0]],
            collectionName:[null],//collections in the select box
            collectionNew:[null]//collection in the textbox
        })

        this.afAuth.authState.subscribe(s=>{
            this.colService.fetchCollection(s.uid).subscribe(
                s=>{
                    if(s.val()){//if its more than one, set the reactive form value as well
                        
                        s.forEach(c => {
                            this.userData.controls['collectionName'].setValue(s.val()[Object.keys(s.val())[0]].collectionName)
        
                            this.collections.push(c.val().collectionName)
                        });
                    } else {// if none, set reactive form value to add new...
                        this.userData.controls['collectionName'].setValue(this.newCollectionString)
                    }
                }
            )
        })
    }

    onSubmit ({value}) {
        let storageRef = this.fb.storage().ref();
        const imagesRef = storageRef.child('items');
        const files:Array<any> = this.dpzObject.files

        this.afAuth.authState.subscribe(user=>{
            let tempData = {    
                                userId:user.uid,
                                collectionName:'', 
                                collectionNew:'', 
                                image:[], 
                                likes:0, 
                                views:0,
                                createdAt:firebase.database.ServerValue.TIMESTAMP
                            };
                            
            Object.assign(tempData, value)

            let observables = []            

            if(this.showNewCollectionInput){//if the new collection box is shown
                tempData.collectionName = value.collectionNew

                observables.push(this.colService.createCollection(tempData.collectionName,user.uid ))
            }
            delete tempData.collectionNew

            observables.push(this.storage.storeItems(files, user.uid)
            .map((s:Array<any>)=>{
                const imagesArr = []
                s.forEach(({downloadURL, ref})=>{
                    imagesArr.push({downloadURL, name: ref.name})
                })
                
                tempData.image = imagesArr

                this.newPostService.createItem(tempData, user.uid).subscribe(
                    s=>console.log(s),
                    e=>console.log(e)
                )
            }))

            Observable.forkJoin(observables).subscribe(
                s=>console.log(s),
                e=>console.log(e)
            )
        })  
    }

    changeCollection (evt) {
        if(evt === this.newCollectionString){
            this.showNewCollectionInput = true
        }else {
            this.showNewCollectionInput = false
        }
    }
}