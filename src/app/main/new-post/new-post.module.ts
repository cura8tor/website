// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { NewPostComponent } from './new-post.component';
import { NewPostRoutingModule } from './new-post-routing.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
    imports: [
        NewPostRoutingModule,
        DropzoneModule.forRoot()
    ],
    declarations: [
        NewPostComponent,
    ],
    exports: [
        NewPostComponent,
    ]
})
export class NewPostModule {}
