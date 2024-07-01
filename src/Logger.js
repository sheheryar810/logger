"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const LogLevel_1 = require("./LogLevel");
class Logger {
    constructor(config) {
        this.level = config.level;
    }
    shouldLog(level) {
        const levels = Object.values(LogLevel_1.LogLevel);
        return levels.indexOf(level) >= levels.indexOf(this.level);
    }
    verbose(message) {
        if (this.shouldLog(LogLevel_1.LogLevel.VERBOSE)) {
            console.log(`[VERBOSE] ${message}`);
        }
    }
    info(message) {
        if (this.shouldLog(LogLevel_1.LogLevel.INFO)) {
            console.log(`[INFO] ${message}`);
        }
    }
    warning(message) {
        if (this.shouldLog(LogLevel_1.LogLevel.WARNING)) {
            console.log(`[WARNING] ${message}`);
        }
    }
    error(message) {
        if (this.shouldLog(LogLevel_1.LogLevel.ERROR)) {
            console.log(`[ERROR] ${message}`);
        }
    }
    // Placeholder for future file logging implementation
    static NativeFileWriteSync(filePath, buffer) {
        console.log(`[File IO ${filePath}] ${buffer}`);
    }
    static logToFile(filePath, message) {
        Logger.NativeFileWriteSync(filePath, message);
    }
}
exports.Logger = Logger;
