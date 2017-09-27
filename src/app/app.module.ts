import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponentModule,HeaderComponentModule} from './shared';

import { Ng2PageTransitionModule } from "ng2-page-transition";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    FooterComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
