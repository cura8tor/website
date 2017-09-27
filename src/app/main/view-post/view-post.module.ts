// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ViewPostComponent } from './view-post.component';
import {ViewPostRoutingModule} from './view-post-routing.module'
@NgModule({
    imports: [
        ViewPostRoutingModule
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
