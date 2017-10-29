import { Component, Input } from '@angular/core';
import { IMAGE, USER_TYPE } from './user-avatar.service'
@Component({
    moduleId: module.id,
    selector: 'user-avatar',
    templateUrl: 'user-avatar.component.html',
    styleUrls: ['user-avatar.component.scss']
})
export class UserAvatarComponent {
    image:string = IMAGE.avatar;

    @Input()
    userType:number = USER_TYPE.user;
    @Input()
    size:number = 60;

    userTypes:{user:number, commenter:number} = USER_TYPE;
}
