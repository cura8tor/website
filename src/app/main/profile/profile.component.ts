import { Component, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {User,UserModel} from '../../models';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent {
    skillArr:Array<string> = ['Css','Html','Javascript','Laravel','Php'];
    posts:any = [{},{},{},{},{},{},{},{},{},{},{},{},{}];
    user:UserModel;
    loading:boolean = true;
    
    constructor (private afAuth:AngularFireAuth){
        this.afAuth.auth.onAuthStateChanged(user=>{
            if(user){
                this.user = new User(user.uid, user.emailVerified, user.displayName, user.email, user.photoURL);
                this.loading = false
            }else{
                this.loading = false
            }
            
        })
    }
}

@Component({
    selector: 'skills',
    template: `<div class="control">
        <div class="tags has-addons">
        <span class="tag is-info">{{skillName}}</span>
        </div>
    </div>
  `,
    styleUrls: ['profile.component.scss']
})

export class SkillsComponent {
    @Input()
    skillName:string;
}
