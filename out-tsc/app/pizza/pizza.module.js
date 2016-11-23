var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PIZZA_SERVICE } from './services/pizza.service';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { ROUTES } from './pizza.routes';
import { PizzaRestService } from './services/pizzaRest.service';
import { PizzaResolver } from './services/pizza.resolver';
import { ReviewsComponent } from './components/reviews/reviews.component';
export var PizzaModule = (function () {
    function PizzaModule() {
    }
    PizzaModule = __decorate([
        NgModule({
            declarations: [
                PizzasComponent,
                PizzaComponent,
                ReviewsComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                BrowserModule,
                RouterModule.forChild(ROUTES)
            ],
            exports: [],
            providers: [
                { provide: PIZZA_SERVICE, useClass: PizzaRestService },
                PizzaResolver
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PizzaModule);
    return PizzaModule;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/pizza/pizza.module.js.map