import { Headers, RequestOptions } from '@angular/http';
export var RestService = (function () {
    function RestService() {
    }
    RestService.prototype.getData = function () {
        var _this = this;
        return this.http.get(this.url)
            .toPromise()
            .then(this.extractData)
            .then(function (data) { return _this.logData('GET', data); })
            .catch(this.handleError);
    };
    RestService.prototype.putData = function (body) {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options)
            .toPromise()
            .then(this.extractData)
            .then(function (data) { return _this.logData('POST', data, body); })
            .catch(this.handleError);
    };
    Object.defineProperty(RestService.prototype, "http", {
        get: function () {
            return this.http;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RestService.prototype, "url", {
        get: function () {
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RestService.prototype, "logger", {
        get: function () {
            return this.logger;
        },
        enumerable: true,
        configurable: true
    });
    ;
    RestService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    RestService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    RestService.prototype.logData = function (operation, responseData, requestData) {
        var message = Date.now() + ': ' + operation + ' ' + this.url + '\n';
        message += (requestData ? ('---SENT---\n' + requestData + '\n') : '');
        message += (responseData ? ('---RECEIVED:---\n' + JSON.stringify(responseData) + '\n') : '');
        this.logger.log(message);
        return responseData;
    };
    return RestService;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/common/rest.service.js.map