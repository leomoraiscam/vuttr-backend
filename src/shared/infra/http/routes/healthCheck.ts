import { Router } from 'express';

const healthCheckRoutes = Router();

healthCheckRoutes.get('/health-check', (request, response) => {
  return response.status(200).json({
    status: 'Ok',
  });
});

export default healthCheckRoutes;
