import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PIZZA_SERVICE} from './services/pizza.service';
import {PizzasComponent} from './components/pizzas/pizzas.component';
import {PizzaComponent} from './components/pizza/pizza.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTES} from './pizza.routes';
import {PizzaRestService} from './services/pizzaRest.service';
import {PizzaResolver} from './services/pizza.resolver';

@NgModule({
  declarations: [
    PizzasComponent,
    PizzaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [],
  providers: [
    {provide: PIZZA_SERVICE, useClass: PizzaRestService},
    PizzaResolver
  ]
})
export class PizzaModule {
}
