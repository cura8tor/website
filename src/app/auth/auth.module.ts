// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        AuthRoutingModule
    ],
    declarations: [
        AuthComponent,
    ],
    exports: [
        AuthComponent,
    ]
})
export class AuthModule {

}
