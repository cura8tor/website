import { Component } from '@angular/core';
import {NotificationService,LINKS} from '../../services';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl: 'header-component.component.html',
    styleUrls: ['header-component.component.scss']
})
export class HeaderComponentComponent {
    
    notificationData:{type:string, message:string} = { type:'', message:''};
    notificationVisible:boolean = false;
    isUserSignedIn:boolean = false;
    userImage:any;
    displayName:string; 

    constructor(private _notifService:NotificationService, 
                private afAuth:AngularFireAuth,
                private router:Router){
        const eventHandler = (t)=>{
            Object.assign(this.notificationData, t)
            this._showNotification()
        }
        
        this._notifService.getMessage().subscribe(eventHandler)

        this.afAuth.auth.onAuthStateChanged(user=>{
            if(user){
                this.userImage = user.photoURL
                this.displayName = user.displayName;
                this.isUserSignedIn = true
            }else{
                this.isUserSignedIn = false
            }
        })

        
    }

    private _showNotification (type?){
        this.notificationVisible = true
    }

    private _hideNotification () {
        this.notificationVisible = false
    }

    logout (){
        this.afAuth.auth
            .signOut()
            .then(s=>this.router.navigate(['/']))
            .catch(e=>console.log(e))
    }

    showProfile () {
        this.router.navigate([LINKS.GENERAL.PROFILE + this.displayName])
    }
}
