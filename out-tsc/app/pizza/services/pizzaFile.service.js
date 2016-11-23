var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { PIZZAS } from '../domain/data';
export var PizzaFileService = (function () {
    function PizzaFileService() {
    }
    PizzaFileService.prototype.getPizzas = function () {
        return Promise.resolve(PIZZAS);
    };
    PizzaFileService.prototype.getPizza = function (id) {
        PIZZAS.forEach(function (pizza) {
            if (pizza.id === id) {
                return Promise.resolve(pizza);
            }
        });
        return Promise.resolve(null);
    };
    PizzaFileService.prototype.addReview = function (pizza, review) {
        throw new Error('addReview not supported for PizzaFileService');
    };
    PizzaFileService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], PizzaFileService);
    return PizzaFileService;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/pizza/services/pizzaFile.service.js.map