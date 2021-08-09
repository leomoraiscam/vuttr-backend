import { Router } from 'express';

import toolsRoutes from '../../../../modules/tools/infra/http/routes/toolsRoutes';
import healthCheckRoutes from './healthCheck';

const routes = Router();

routes.use('/tools', toolsRoutes);
routes.use(healthCheckRoutes);

export default routes;
