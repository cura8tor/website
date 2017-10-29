import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase'
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {
    user:firebase.User;
    dbName:string = 'items';
    size$: BehaviorSubject<string|null>;

    constructor(private db: AngularFireDatabase, private http:HttpClient) {}

    fetchAllPosts () {
        return this.db.list(`${this.dbName}`, ref=>ref.orderByChild('createdAt')).snapshotChanges()
    }

    fetchPost (objId:string) {
        return this.db.object(`${this.dbName}/${objId}`).valueChanges()
    }

    fetchUser (userId:string) {
        const funcUrl = 'https://us-central1-cura8tor.cloudfunctions.net/post' 
        return this.http.post(funcUrl, {userId})
    }

    /*fetchPostTest (postId) {
        //const funcUrl = 'http://localhost:5000/cura8tor/us-central1/post'
        const funcUrl = 'https://us-central1-cura8tor.cloudfunctions.net/post' 
        this.http.post(funcUrl, {postId}, {headers: new HttpHeaders('Content-Type:application/json')}).subscribe(
            s=>console.log(s),
            e=>console.log(e)
        )
    }
    //return {headers: new HttpHeaders(headers || this.defaultHeaders)};*/

}
