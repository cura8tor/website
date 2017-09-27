// Angular Imports
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// This Module's Components
import { LandingComponent } from './landing.component';
import {LandingRoutingModule} from './landing-routing.module';

import {PostItemModule} from '../../modules';

@NgModule({
    imports: [
        LandingRoutingModule,
        CommonModule,
        PostItemModule
    ],
    declarations: [
        LandingComponent
    ],
    exports: [
        LandingComponent,
    ]
})
export class LandingModule {

}
