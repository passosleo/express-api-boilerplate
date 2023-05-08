import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { routes } from './routes';

export const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

routes(app);

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
);

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  console.log(`Server initilized in http://localhost:${port}`);
  console.log(`Swagger initilized in http://localhost:${port}/docs`);
});
