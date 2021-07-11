import { Router } from 'express';

import toolsRoutes from '../../../../modules/tools/infra/http/routes/toolsRoutes';

const routes = Router();

routes.use('/tools', toolsRoutes);

export default routes;
