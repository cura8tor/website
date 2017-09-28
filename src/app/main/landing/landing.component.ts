import { Component } from '@angular/core';
import { GlobalEmitterService,NotificationService } from '../../services';

@Component({
    moduleId: module.id,
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.scss'],
    providers:[NotificationService]
})
export class LandingComponent {
    posts:any = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

    /*constructor (private _eventEmitter:GlobalEmitterService, 
                 private _notifService:NotificationService){}

    test (){
        this._eventEmitter.sendMessage(this._notifService.types.info,'<h3>eeee</h3>')
    }*/
}
