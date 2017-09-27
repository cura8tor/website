import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'post-item',
    templateUrl: 'post-item.component.html',
    styleUrls: ['post-item.component.scss']
})
export class PostItemComponent {

    constructor(private router:Router){}
    
    openImage(){
        this.router.navigate(['view/t'])
    }
}
