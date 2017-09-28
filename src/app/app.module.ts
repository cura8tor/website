import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponentModule,HeaderComponentModule} from './shared';
import {GlobalEmitterService} from './services';

import { Ng2PageTransitionModule } from "ng2-page-transition";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgxAniModule } from 'ngxani';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule,
    Ng2PageTransitionModule,
    BrowserAnimationsModule,
    HeaderComponentModule,
    FooterComponentModule,
    NgxAniModule
  ],
  providers: [GlobalEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
