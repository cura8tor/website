import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl: 'header-component.component.html',
    styleUrls: ['header-component.component.scss']
})
export class HeaderComponentComponent {

    test (){
        console.log('eeee')
    }
}
