import { Component, OnInit } from '@angular/core';
import { GlobalEmitterService,NotificationService,PostService } from '../../services';
import {AngularFireDatabase, AngularFireAction} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app'
@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.scss'],
    providers:[NotificationService]
})
export class LandingComponent implements OnInit{
    
    posts$:Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;

    constructor (private postService:PostService) {}

    ngOnInit(): void {
        this.posts$ = this.postService.fetchAllPosts()
        //.subscribe(s=>
          //  s.forEach(v=>console.log(v.payload.val()))
        //)
    }
}
