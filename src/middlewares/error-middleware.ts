import { Request, Response, NextFunction } from 'express';
import { useLogger } from '../plugins/log4js-logger-plugin';

export async function useErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { logger } = useLogger({ context: 'error-handler' });

  logger.error({
    method: req.method,
    path: req.path,
    params: req.params,
    query: req.query,
    body: req.body,
    error: error,
  });

  res.status(500).json({
    message: 'Internal server error',
  });
}
