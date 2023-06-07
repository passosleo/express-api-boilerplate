import { Express } from 'express';
import { healthRoutes } from './health-routes';

export function useRoutes(app: Express) {
  app.use('/health', healthRoutes);
}
