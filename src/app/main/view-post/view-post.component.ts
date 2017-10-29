import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import {PostService} from '../../services'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
    moduleId: module.id,
    selector: 'view-post',
    templateUrl: 'view-post.component.html',
    styleUrls: ['view-post.component.scss'],
    providers:[PostService]
})
export class ViewPostComponent implements OnInit,OnDestroy {
    
    image:string = 'http://bulma.io/images/placeholders/128x128.png';
    sampleImg:string = 'assets/images/bungalowscop.jpg';
    sub:Subscription;
    post:any;
    constructor (private location:Location, private postService:PostService, private route: ActivatedRoute){}
    user:any;
    loading:boolean = true

    ngOnInit(): void {

        const handlePost = ({slug})=>{
            const post$ = this.postService.fetchPost(slug)
            const fetchUser$ = post$.switchMap((p:any) => {
                console.log(p)
                this.post = p
                return this.postService.fetchUser(p.userId)
            })
            fetchUser$.subscribe(
                u=>{
                    console.log(u)
                    this.user = u
                    this.loading = false
                },
                e=>console.log(e)
            )
        }
        this.sub = this.route.params.subscribe(handlePost)  
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    goBack(){
        this.location.back()
    }
}
