// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { MainComponent } from './main.component';
import {MainComponentRoutingModule} from './main-routing.module'
@NgModule({
    imports: [
        MainComponentRoutingModule
    ],
    declarations: [
        MainComponent,
    ],
    exports: [
        MainComponent,
    ]
})
export class MainModule {

}
