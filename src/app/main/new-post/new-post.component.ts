import { Component } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
@Component({
    moduleId: module.id,
    selector: 'new-post',
    templateUrl: 'new-post.component.html',
    styleUrls: ['new-post.component.scss']
})
export class NewPostComponent {

    private DROPZONE_CONFIG: DropzoneConfigInterface = {
        url:null,
        maxFilesize: 50,
        acceptedFiles: 'image/*',
        autoProcessQueue: false,
    };

    socialShare:boolean = false;

    projectType:Array<string> = [
        'Animation',
        'Augumented Reality (AR)',
        'App',
        'Article',
        'Experiment',
        'Framework',
        'Library',
        'Illustration',
        'Guide',
        'Landing Page',
        'User Interface',
        'Extension',
        'Open-source app',
        'Snippet',
        'Software',
        'Style Guide',
        'Tutorial',
        'Freebie',
        'Website'
    ]

    platforms:Array<string> = [
        'Android',
        'iOs',
        'Web',
        'Mac',
        'Any Platform'
    ]

    image:string = 'assets/images/assetsdrag.png'

    toggleSocialShare () {
        this.socialShare = !this.socialShare
    }

    onUploadError(evt) {
        
    }

    onUploadSuccess (evt){

    }
}