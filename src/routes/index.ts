import { Application } from 'express';
import fooRoutes from './foo';
import barRoutes from './bar';

export const routes = (app: Application) => {
  app.use('/api', fooRoutes);
  app.use('/api', barRoutes);
};
