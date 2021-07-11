import { Router } from 'express';

import ToolsController from '../controller/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.get('/', toolsController.list);
toolsRouter.post('/', toolsController.create);
toolsRouter.post('/', toolsController.delete);

export default toolsRouter;
