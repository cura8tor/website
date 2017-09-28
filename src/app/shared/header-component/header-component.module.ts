// Angular Imports
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// This Module's Components
import { HeaderComponentComponent } from './header-component.component';
import { RouterModule } from '@angular/router';
import {NotificationModule} from '../../services/notification/notification.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        NotificationModule
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
