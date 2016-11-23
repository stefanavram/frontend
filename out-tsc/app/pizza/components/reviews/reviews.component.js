var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export var ReviewsComponent = (function () {
    function ReviewsComponent() {
        this.addReview = new EventEmitter();
        this.newReview = {};
    }
    ReviewsComponent.prototype.onSubmit = function () {
        this.newReview.createdOn = new Date().getMilliseconds();
        this.addReview.emit(this.newReview);
        this.newReview = {};
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ReviewsComponent.prototype, "reviews", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ReviewsComponent.prototype, "addReview", void 0);
    ReviewsComponent = __decorate([
        Component({
            selector: 'app-reviews',
            templateUrl: 'reviews.component.html',
            styleUrls: ['reviews.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/pizza/components/reviews/reviews.component.js.map