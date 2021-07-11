import { Router } from 'express';

import ToolsController from '../controller/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post('/', toolsController.create);

export default toolsRouter;
