import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'; // for typings

@Injectable()
export class NewPostService {

    user:firebase.User;
    dbItemName:string = 'items';

    constructor(private db: AngularFireDatabase, 
                private afAuth:AngularFireAuth
                ) {}

    createItem (value, userId){
        const itemRef = this.db.list(`${this.dbItemName}`);
        return Observable.fromPromise(itemRef.push(value))
    }
}