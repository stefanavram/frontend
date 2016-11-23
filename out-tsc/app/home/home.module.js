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
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ROUTES } from './home.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from 'ng2-translate';
import { GalleriaModule } from 'primeng/components/galleria/galleria';
export var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        NgModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                CommonModule,
                BrowserModule,
                MaterialModule.forRoot(),
                NgbModule,
                RouterModule.forChild(ROUTES),
                TranslateModule,
                GalleriaModule
            ],
            exports: [
                HomeComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/home/home.module.js.map