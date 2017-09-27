import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent {
    skillArr:Array<string> = ['Css','Html','Javascript','Laravel','Php'];
    posts:any = [{},{},{},{},{},{},{},{},{},{},{},{},{}];
}

@Component({
    selector: 'skills',
    template: `<div class="control">
        <div class="tags has-addons">
        <span class="tag is-info">{{skillName}}</span>
        </div>
    </div>
  `,
    styleUrls: ['profile.component.scss']
})

export class SkillsComponent {
    @Input()
    skillName:string;
}
