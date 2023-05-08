import { Log4jsLoggerPlugin } from './../plugins/log4js/log4js-logger-plugin';
import { Request, Response } from 'express';

export class BarController {
  static bar(req: Request, res: Response) {
    const logger = new Log4jsLoggerPlugin({ category: BarController.name });
    logger.info('bar');
    return res.json({ message: 'bar' });
  }
}
