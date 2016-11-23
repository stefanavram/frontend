import { ConsoleLoggerService } from './consoleLogger.service';
export var logLevelConsoleFactory = function () { return new ConsoleLoggerService(console.log.bind(console)); };
export var infoLevelConsoleFactory = function () { return new ConsoleLoggerService(console.info.bind(console)); };
export var warnLevelConsoleFactory = function () { return new ConsoleLoggerService(console.warn.bind(console)); };
export var errorLevelConsoleFactory = function () { return new ConsoleLoggerService(console.error.bind(console)); };
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/common/consoleLogger.factory.js.map