import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {MaterialModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ROUTES} from './home.routes';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
