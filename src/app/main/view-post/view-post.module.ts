// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
// This Module's Components
import { ViewPostComponent } from './view-post.component';
import {ViewPostRoutingModule} from './view-post-routing.module';
import { MomentModule } from 'angular2-moment';

@NgModule({
    imports: [
        ViewPostRoutingModule,
        MomentModule,
        CommonModule
    ],
    declarations: [
        ViewPostComponent,
    ],
    exports: [
        ViewPostComponent,
    ]
})
export class ViewPostModule {

}
