// Angular Imports
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// This Module's Components
import { HeaderComponentComponent } from './header-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponentComponent,
    ],
    exports: [
        HeaderComponentComponent,
    ]
})
export class HeaderComponentModule {

}
