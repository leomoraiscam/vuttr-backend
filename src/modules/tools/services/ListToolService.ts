import { injectable, inject } from 'tsyringe';

import Tool from '../infra/typeorm/entities/Tool';
import IToolRepository from '../repositories/IToolsRepository';

@injectable()
class ListToolService {
  constructor(
    @inject('ToolRepository')
    private toolsRepository: IToolRepository
  ) {}

  public async execute(tag?: string): Promise<Tool[] | undefined> {
    if (!tag) {
      const tools = await this.toolsRepository.list();

      return tools;
    }

    const filterTools = await this.toolsRepository.findByTags(tag);

    return filterTools;
  }
}

export default ListToolService;
