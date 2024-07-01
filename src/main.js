"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const Logger_1 = require("./Logger");
const LogLevel_1 = require("./LogLevel");
const config = { level: LogLevel_1.LogLevel.INFO };
const logger = new Logger_1.Logger(config);
logger.verbose('This is a verbose message');
logger.info('This is an info message');
logger.warning('This is a warning message');
logger.error('This is an error message');
Logger_1.Logger.logToFile('app.log', 'This message should be written to a file');
