// Angular Imports
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// This Module's Components
import { ProfileComponent,SkillsComponent } from './profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {PostItemModule} from '../../modules';

@NgModule({
    imports: [
        ProfileRoutingModule,
        CommonModule,
        PostItemModule
    ],
    declarations: [
        ProfileComponent,
        SkillsComponent
    ],
    exports: [
        ProfileComponent,
    ]
})
export class ProfileModule {}
