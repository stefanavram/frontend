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
export var RestoreService = (function () {
    function RestoreService() {
    }
    RestoreService.prototype.setItem = function (item) {
        this.originalItem = item;
        this.currentItem = this.clone(item);
    };
    RestoreService.prototype.getItem = function () {
        return this.currentItem;
    };
    RestoreService.prototype.restoreItem = function () {
        this.currentItem = this.originalItem;
        return this.getItem();
    };
    RestoreService.prototype.clone = function (item) {
        // super poor clone implementation
        return JSON.parse(JSON.stringify(item));
    };
    RestoreService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], RestoreService);
    return RestoreService;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/common/restore.service.js.map