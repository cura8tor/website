// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LandingComponent } from './landing.component';
import {LandingRoutingModule} from './landing-routing.module'
@NgModule({
    imports: [
        LandingRoutingModule
    ],
    declarations: [
        LandingComponent,
    ],
    exports: [
        LandingComponent,
    ]
})
export class LandingModule {

}
