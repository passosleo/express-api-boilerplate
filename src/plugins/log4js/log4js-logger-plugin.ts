import * as log4js from 'log4js';
import { LoggerPlugin } from '../logger-plugin';

log4js.configure({
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '[%d{dd-MM-yyyy - hh:mm:ss.SSS}] [%p] %c - %m',
      },
    },
    file: {
      type: 'file',
      filename: './logs/app.log',
      layout: {
        type: 'pattern',
        pattern: '[%d{dd-MM-yyyy - hh:mm:ss.SSS}] [%p] %c - %m',
      },
    },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'debug' },
  },
});

interface Log4jsLoggerOptions {
  level?: string;
  category?: string;
}

export class Log4jsLoggerPlugin implements LoggerPlugin {
  private readonly logger: log4js.Logger;

  constructor(options: Log4jsLoggerOptions = {}) {
    this.logger = log4js.getLogger(options.category || 'default');
    this.logger.level = options.level || 'debug';
  }

  info(message: string): void {
    this.logger.info(message);
  }
  warn(message: string): void {
    this.logger.warn(message);
  }
  error(message: string): void {
    this.logger.error(message);
  }
  fatal(message: string): void {
    this.logger.fatal(message);
  }
  debug(message: string): void {
    this.logger.debug(message);
  }
  trace(message: string): void {
    this.logger.trace(message);
  }
}
