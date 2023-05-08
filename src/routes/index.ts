import { Application } from 'express';
import pingRoutes from './ping';

export const routes = (app: Application) => {
  app.use('/api', pingRoutes);
};
