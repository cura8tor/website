// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import {AuthService} from './auth.service';

@NgModule({
    imports: [
        AuthRoutingModule
    ],
    declarations: [
        AuthComponent,
    ],
    providers:[
        AuthService
    ],
    exports: [
        AuthComponent,
    ]
})
export class AuthModule {

}
