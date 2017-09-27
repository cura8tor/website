import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'view-post',
    templateUrl: 'view-post.component.html',
    styleUrls: ['view-post.component.scss']
})
export class ViewPostComponent {
    image:string = 'http://bulma.io/images/placeholders/128x128.png';
    sampleImg:string = 'assets/images/bungalowscop.jpg';

    constructor (private location:Location){}

    goBack(){
        this.location.back()
    }
}
