import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponentModule,HeaderComponentModule} from './shared';
import {GlobalEmitterService,NotificationService} from './services';

import { Ng2PageTransitionModule } from "ng2-page-transition";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgxAniModule } from 'ngxani';

import {NotificationModule} from './services/notification/notification.module';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {environment} from '../environments/environment';

const imports = [
  BrowserModule,
  AppRoutingModule,
  NgbModule.forRoot(),
  HttpClientModule,
  RouterModule,
  Ng2PageTransitionModule,
  BrowserAnimationsModule,
  HeaderComponentModule,
  FooterComponentModule,
  NgxAniModule,
  NotificationModule,
  AngularFireModule,
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebase)
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports,
  providers: [GlobalEmitterService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
