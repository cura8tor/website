import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children:[
      {path:'', redirectTo:'login'},
      {path:'login', loadChildren:'./login/login.module#LoginModule'},
      {path:'register', loadChildren:'./register/register.module#RegisterModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
