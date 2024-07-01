import { LogLevel } from './LogLevel';
import { LoggerConfig } from './LoggerConfig';
import * as fs from 'fs';
import * as path from 'path';

export class Logger {
    private level: LogLevel;

    constructor(config: LoggerConfig) {
        this.level = config.level;
    }

    private shouldLog(level: LogLevel): boolean {
        const levels = Object.values(LogLevel);
        return levels.indexOf(level) >= levels.indexOf(this.level);
    }

    public verbose(message: string): void {
        if (this.shouldLog(LogLevel.VERBOSE)) {
            console.log(`[VERBOSE] ${message}`);
        }
    }

    public info(message: string): void {
        if (this.shouldLog(LogLevel.INFO)) {
            console.log(`[INFO] ${message}`);
        }
    }

    public warning(message: string): void {
        if (this.shouldLog(LogLevel.WARNING)) {
            console.log(`[WARNING] ${message}`);
        }
    }

    public error(message: string): void {
        if (this.shouldLog(LogLevel.ERROR)) {
            console.log(`[ERROR] ${message}`);
        }
    }
    private static writeFileSync(filePath: string, buffer: string): void {
        try {
            console.log(`Attempting to write to file: ${filePath}`);
            fs.appendFileSync(filePath, buffer + '\n', 'utf8');
            console.log(`Successfully wrote to file: ${filePath}`);
        } catch (err) {
            console.error(`Failed to write to file: ${filePath}`, err);
        }
    }
    
    public static logToFile(filePath: string, message: string): void {
        const logPath = path.resolve(__dirname, '..', filePath);
        Logger.writeFileSync(logPath, message);
    }
    
}
