// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
// This Module's Components
import { ViewPostComponent } from './view-post.component';
import {ViewPostRoutingModule} from './view-post-routing.module';
import { MomentModule } from 'angular2-moment';
import {platform} from './pipes/post.pipes';
import {UserAvatarModule} from '../../modules';

@NgModule({
    imports: [
        ViewPostRoutingModule,
        MomentModule,
        CommonModule,
        UserAvatarModule
    ],
    declarations: [
        ViewPostComponent,
        platform
    ],
    exports: [
        ViewPostComponent,
    ]
})
export class ViewPostModule {

}
