import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { LINKS,NotificationService } from '../services';

@Injectable()
export class AuthService {

    public user:Observable<firebase.User>;
    
    constructor (private afAuth:AngularFireAuth, 
                 private db:AngularFireDatabase,
                 private router:Router,
                 private notifService:NotificationService) {
        this.user = afAuth.authState
    }

    signUp ({displayName, email, password}) {
        this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then((user:firebase.User)=>{
                if(user){
                    user.updateProfile({
                        displayName,
                        photoURL:''
                    }).then(
                        s=>{
                            user.sendEmailVerification()
                            this.showProfile(displayName)
                        }
                    )
                }
            })  
            .catch(error=>this.handleError(error))
    }

    login ({email, password}){
        this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(user=>{
                
                this.showProfile(user.displayName)
            })
            .catch(error=>{
                this.handleError(error)
            })

    }

    twitterAuth () {
        const provider = new firebase.auth.TwitterAuthProvider()
        firebase.auth()
                .signInWithPopup(provider)
                .then(s=>{
                    this.showProfile(s.user.displayName)
                })
                .catch(e=>{
                    console.log(e)
                    this.handleError(e)
                })
    }

    checkEmailExists (email):Observable<any> {
        return Observable.fromPromise(this.afAuth.auth.fetchProvidersForEmail(email));
    }

    private showProfile (displayName) {
        this.router.navigate([LINKS.GENERAL.PROFILE + displayName])
    }

    private handleError (e){
        this.notifService.sendMessage(this.notifService.types.danger, e.message)
    }
}