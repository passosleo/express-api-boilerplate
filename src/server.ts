import 'dotenv/config';
import express from 'express';
import { routes } from './routes';

export const app = express();

app.use(express.json());

routes(app);

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  console.log(`Server initilized in http://localhost:${port}`);
});
