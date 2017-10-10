// Angular Imports
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
// This Module's Components
import { NewPostComponent } from './new-post.component';
import { NewPostRoutingModule } from './new-post-routing.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import {NewPostService} from './new-post.service';
import {CollectionService} from '../../services'
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
    providers:[
        NewPostService,
        CollectionService
    ],
    exports: [
        NewPostComponent,
    ]
})
export class NewPostModule {}
