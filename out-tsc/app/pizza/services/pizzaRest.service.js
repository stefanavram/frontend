var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
import { Injectable, Inject, Optional } from '@angular/core';
import { Http } from '@angular/http';
import { LOGGER_SERVICE } from '../../common/logger.service';
import { RestService } from '../../common/rest.service';
import 'rxjs/add/operator/toPromise';
export var PizzaRestService = (function (_super) {
    __extends(PizzaRestService, _super);
    function PizzaRestService(_http, _logger) {
        var _this = this;
        _super.call(this);
        this._http = _http;
        this._logger = _logger;
        this._baseUrl = 'https://server-restauranto.herokuapp.com/rest/pizzas';
        // no logger? make one
        if (!this._logger) {
            this._logger = {
                logs: [],
                log: function (msg) { return _this._logger.logs.push(msg); }
            };
        }
    }
    Object.defineProperty(PizzaRestService.prototype, "http", {
        get: function () {
            return this._http;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PizzaRestService.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PizzaRestService.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        enumerable: true,
        configurable: true
    });
    PizzaRestService.prototype.getPizzas = function () {
        this._url = this._baseUrl;
        return this.getData();
    };
    PizzaRestService.prototype.getPizza = function (id) {
        this._url = this._baseUrl + '/' + id;
        return this.getData();
    };
    PizzaRestService.prototype.addReview = function (pizza, review) {
        this._url = this._baseUrl + '/addReview/' + pizza.id;
        return this.putData(JSON.stringify(review));
    };
    PizzaRestService = __decorate([
        Injectable(),
        __param(1, Optional()),
        __param(1, Inject(LOGGER_SERVICE)), 
        __metadata('design:paramtypes', [Http, Object])
    ], PizzaRestService);
    return PizzaRestService;
}(RestService));
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/pizza/services/pizzaRest.service.js.map