import { Component } from '@angular/core';
import {GlobalEmitterService} from '../../services';

@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl: 'header-component.component.html',
    styleUrls: ['header-component.component.scss']
})
export class HeaderComponentComponent {
    
    notificationData:{type:string, message:string} = { type:'', message:''};
    notificationVisible:boolean = false;

    constructor(private _notifService:GlobalEmitterService){
        const eventHandler = (t)=>{
            Object.assign(this.notificationData, t)
            this._showNotification()
        }
        
        this._notifService.getMessage().subscribe(eventHandler)
    }

    private _showNotification (type?){
        this.notificationVisible = true
    }

    private _hideNotification () {
        this.notificationVisible = false
    }

    test (){
        this._showNotification()
    }
}
