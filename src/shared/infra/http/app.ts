import '@shared/container';
import { errors } from 'celebrate';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import { container } from 'tsyringe';
import ILogger from '../logger/interfaces/ILogger';
import addOrPersistRequestId from './middlewares/addOrPersistRequestId';
import handleErrors from './middlewares/handleErrors';
import routes from './routes';


const app = express();

const logger = container.resolve<ILogger>('logger');

app.use(addOrPersistRequestId);
if (logger.http) app.use(logger.http());

app.use(
  cors({
    allowedHeaders: [
      'Authorization',
      'RequestId',
      'Content-Type',
      'X-Spendfy-App-Key',
      'X-Spendfy-Api-Key',
      'X-Request-Id',
    ],
    exposedHeaders: [
      'Content-Type',
      'X-Total-Count',
      'X-Total-Page',
      'RequestId',
    ],
  })
);
app.use(compression());
app.use(helmet());
app.use(express.json({ limit: '50mb' }));

app.use(routes);
app.get('/status', (r, res) => res.status(200).json({ message: 'ok' }));

app.use(errors());
app.use(handleErrors);

export default app;
