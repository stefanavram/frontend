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
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PIZZA_SERVICE } from '../../services/pizza.service';
export var PizzaComponent = (function () {
    function PizzaComponent(route, pizzaService) {
        this.route = route;
        this.pizzaService = pizzaService;
    }
    PizzaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            console.log(data);
            _this.pizza = data.pizza;
        });
    };
    PizzaComponent.prototype.addReview = function (review) {
        var _this = this;
        this.pizzaService.addReview(this.pizza, review)
            .then(function () { return _this.pizza.reviews.push(review); });
    };
    PizzaComponent = __decorate([
        Component({
            selector: 'app-pizza',
            templateUrl: './pizza.component.html',
            styleUrls: ['./pizza.component.css'],
        }),
        __param(1, Inject(PIZZA_SERVICE)), 
        __metadata('design:paramtypes', [ActivatedRoute, Object])
    ], PizzaComponent);
    return PizzaComponent;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/pizza/components/pizza/pizza.component.js.map