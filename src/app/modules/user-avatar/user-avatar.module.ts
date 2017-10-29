// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UserAvatarComponent } from './user-avatar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UserAvatarComponent,
    ],
    exports: [
        UserAvatarComponent,
    ]
})
export class UserAvatarModule {

}
