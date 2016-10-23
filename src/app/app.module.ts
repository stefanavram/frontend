import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PizzaModule} from './pizza/pizza.module';
import {HomeModule} from './home/home.module';
import {ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule,
    PizzaModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
