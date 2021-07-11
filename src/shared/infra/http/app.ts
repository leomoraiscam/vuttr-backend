import express, { Request, Response, NextFunction } from 'express';

import '../../container/index';
import AppError from '../../errors/AppError';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(`Error: ${error}`);

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
);

export default app;
