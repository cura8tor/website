import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path: '', component: MainComponent, children:[
      {path:'', loadChildren:'./landing/landing.module#LandingModule'},
      {path:'view/:slug', loadChildren:'./view-post/view-post.module#ViewPostModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainComponentRoutingModule { }
