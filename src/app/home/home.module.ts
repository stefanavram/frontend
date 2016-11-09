import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {MaterialModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ROUTES} from './home.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule.forRoot(),
    NgbModule,
    RouterModule.forChild(ROUTES),
    TranslateModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
