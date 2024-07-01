import { Logger } from './Logger';
import { LogLevel } from './LogLevel';
import { LoggerConfig } from './LoggerConfig';

const config: LoggerConfig = { level: LogLevel.INFO };
const logger = new Logger(config);

logger.verbose('This is a verbose message');
logger.info('This is an info message');
logger.warning('This is a warning message');
logger.error('This is an error message');

Logger.logToFile('../app.log', 'This message should be written to a file');
Logger.logToFile('../app.log', 'Another message for the log file');
