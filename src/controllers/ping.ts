import { Route, Get } from 'tsoa';
import { DefaultResponse } from '../@types';
import { Log4jsLoggerPlugin } from '../plugins/log4js/log4js-logger-plugin';
import { handleStatus } from '../helpers/response';

interface PingResponse {
  message: string;
}

@Route('/api/ping')
export class PingController {
  @Get('/')
  public ping(): DefaultResponse<PingResponse> {
    const logger = new Log4jsLoggerPlugin({ category: PingController.name });
    logger.info('ping-pong');
    return handleStatus(200, { message: 'pong' });
  }
}
