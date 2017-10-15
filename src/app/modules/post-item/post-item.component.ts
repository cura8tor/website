import { Component, trigger, state, animate, transition, style, keyframes, ViewChild, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxAni } from 'ngxani';

@Component({
    moduleId: module.id,
    selector: 'post-item',
    templateUrl: 'post-item.component.html',
    styleUrls: ['post-item.component.scss'],
})
export class PostItemComponent {
    
//p.payload.val().image[0].downloadURL
    likesCount:number = 10;
    @ViewChild('likes') likes: ElementRef;
    @Input() post:any;
    
    constructor(private router:Router, private ngxAni:NgxAni){}
    
    openImage(){
        this.router.navigate(['view/t'])
    }
}
