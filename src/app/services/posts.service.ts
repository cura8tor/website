import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase'
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PostService {
    user:firebase.User;
    dbName:string = 'items';
    size$: BehaviorSubject<string|null>;

    constructor(private db: AngularFireDatabase) {}

    fetchAllPosts () {
        return this.db.list(`${this.dbName}`, ref=>ref.orderByChild('createdAt')).snapshotChanges()
    }

}
