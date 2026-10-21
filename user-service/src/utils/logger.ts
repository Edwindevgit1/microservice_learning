import * as winston from "winston";
interface ILogger {
  info(message: string, data?: unknown): void;
  warn(message: string, data?: unknown): void;
  error(message: string, data?: unknown): void;
}
export class WingstonLogger implements ILogger {
  private logger: winston.Logger;
  constructor() {
    const fileFormat = winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.json()
    )
    const consoleFormat = winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf(({ timestamp, level, message, ...metadata }) => {
        const additionalData = Object.keys(metadata).length > 0 ? ` ${JSON.stringify(metadata)}` : "";
        return `${timestamp} [${level}]: ${message}${additionalData}`;
      })
    );
    const transports:winston.transport[]=[
      new winston.transports.Console({
        format:consoleFormat
      })
    ] 
    this.logger = winston.createLogger({
      level: "info",
      format:fileFormat,
      transports,
      exitOnError: false
    })
  }
  public info(message: string, data?: unknown): void {
    this.logger.info(message, { data })
  }
  public warn(message: string, data?: unknown): void {
    this.logger.warn(message, { data })
  }
  public error(message: string, data?: unknown): void {
    if (data instanceof Error) {
      this.logger.error(message, {
        error: data.message,
        stack: data.stack
      })
    } else {
      this.logger.error(message, { data })
    }
  }
}
export const Logger: ILogger = new WingstonLogger()