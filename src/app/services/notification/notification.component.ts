import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.scss'],
    animations: [
        trigger('shrinkOut', [
            state('in', style({height: '*'})),
            transition('* => *', [
              style({height: 0}),
              animate(250, style({height: '*'}))
            ])
        ])
    ]
})
export class NotificationComponent {
    @Output()
    close:EventEmitter<boolean> = new EventEmitter();

    @Input()
    config:{type:string, message:string} = {type:'is-primary', message:`Why are you. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
    consectetur adipiscing elit`}
    
    closeMe(){
        this.close.emit(true)
    }
}
