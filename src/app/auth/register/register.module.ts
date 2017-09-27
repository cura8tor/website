// Angular Imports
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
// This Module's Components
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module'
@NgModule({
    imports: [
        RegisterRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        RegisterComponent,
    ],
    exports: [
        RegisterComponent,
    ]
})
export class RegisterModule {

}
