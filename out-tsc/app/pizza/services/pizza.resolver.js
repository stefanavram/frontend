var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PIZZA_SERVICE } from './pizza.service';
export var PizzaResolver = (function () {
    function PizzaResolver(pizzaService, router) {
        this.pizzaService = pizzaService;
        this.router = router;
    }
    PizzaResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.pizzaService.getPizza(route.params['id']).then(function (pizza) {
            console.log(pizza);
            if (pizza) {
                return pizza;
            }
            else {
                _this.router.navigate(['/home']);
                return false;
            }
        });
    };
    PizzaResolver = __decorate([
        Injectable(),
        __param(0, Inject(PIZZA_SERVICE)), 
        __metadata('design:paramtypes', [Object, Router])
    ], PizzaResolver);
    return PizzaResolver;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/pizza/services/pizza.resolver.js.map