export var ConsoleLoggerService = (function () {
    function ConsoleLoggerService(logLevel) {
        this.logLevel = logLevel;
        this.logs = [];
    }
    ConsoleLoggerService.prototype.log = function (msg) {
        this.logLevel(msg);
        this.logs.push(msg);
    };
    return ConsoleLoggerService;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/common/consoleLogger.service.js.map