// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { NotificationComponent } from './notification.component';
import {NotificationService} from './notification.service';

@NgModule({
    imports: [

    ],
    declarations: [
        NotificationComponent,
    ],
    exports: [
        NotificationComponent
    ]
})
export class NotificationModule {}
