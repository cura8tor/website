import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'; // for typings
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CollectionService {

    user:firebase.User;
    dbCollectionName:string = 'collection';
    size$: BehaviorSubject<string|null>;

    constructor(private db: AngularFireDatabase, 
                private afAuth:AngularFireAuth
                ) {}
    
    createCollection (collectionName, userId){
        const itemRef = this.db.list(`${this.dbCollectionName}/${userId}`);
        return Observable.fromPromise(itemRef.push({collectionName}))
    }

    fetchCollection (userId){
        return Observable.fromPromise(this.db.database
            .ref(`${this.dbCollectionName}/${userId}`)
            .once('value'))
    }
}