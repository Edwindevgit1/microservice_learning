import * as winston from "winston";
export class WingstonLogger {
    logger;
    constructor() {
        const fileFormat = winston.format.combine(winston.format.timestamp(), winston.format.errors({ stack: true }), winston.format.json());
        const consoleFormat = winston.format.combine(winston.format.colorize(), winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston.format.printf(({ timestamp, level, message, ...metadata }) => {
            const additionalData = Object.keys(metadata).length > 0 ? ` ${JSON.stringify(metadata)}` : "";
            return `${timestamp} [${level}]: ${message}${additionalData}`;
        }));
        const transports = [
            new winston.transports.Console({
                format: consoleFormat
            })
        ];
        this.logger = winston.createLogger({
            level: "info",
            format: fileFormat,
            transports,
            exitOnError: false
        });
    }
    info(message, data) {
        this.logger.info(message, { data });
    }
    warn(message, data) {
        this.logger.warn(message, { data });
    }
    error(message, data) {
        if (data instanceof Error) {
            this.logger.error(message, {
                error: data.message,
                stack: data.stack
            });
        }
        else {
            this.logger.error(message, { data });
        }
    }
}
export const Logger = new WingstonLogger();
//# sourceMappingURL=logger.js.map