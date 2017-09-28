import { Component, trigger, state, animate, transition, style, keyframes, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxAni } from 'ngxani';

@Component({
    moduleId: module.id,
    selector: 'post-item',
    templateUrl: 'post-item.component.html',
    styleUrls: ['post-item.component.scss'],
})
export class PostItemComponent {

    likesCount:number = 10;
    @ViewChild('likes') likes: ElementRef;

    constructor(private router:Router, private ngxAni:NgxAni){}
    
    openImage(){
        this.router.navigate(['view/t'])
    }
}
