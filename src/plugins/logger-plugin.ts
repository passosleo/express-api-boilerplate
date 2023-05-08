export interface LoggerPlugin {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  fatal(message: string): void;
  debug(message: string): void;
  trace(message: string): void;
}
