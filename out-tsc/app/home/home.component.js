var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from 'ng2-translate';
export var HomeComponent = (function () {
    function HomeComponent(translate) {
        this.translate = translate;
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        translate.addLangs(['en', 'ro']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({
            source: 'assets/images/pepperoni.png',
            alt: 'Description for Image 1',
            title: 'Title 1'
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            providers: [NgbCarouselConfig]
        }), 
        __metadata('design:paramtypes', [TranslateService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/home/home.component.js.map