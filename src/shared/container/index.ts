import { container } from 'tsyringe';

import ToolRepository from '../../modules/tools/infra/typeorm/repositories/ToolRepository';
import IToolRepository from '../../modules/tools/repositories/IToolsRepository';

container.registerSingleton<IToolRepository>('ToolRepository', ToolRepository);
