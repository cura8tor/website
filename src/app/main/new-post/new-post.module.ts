// Angular Imports
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
// This Module's Components
import { NewPostComponent } from './new-post.component';
import { NewPostRoutingModule } from './new-post-routing.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import 'firebase/storage';

@NgModule({
    imports: [
        NewPostRoutingModule,
        DropzoneModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [
        NewPostComponent,
    ],
    exports: [
        NewPostComponent,
    ]
})
export class NewPostModule {}
