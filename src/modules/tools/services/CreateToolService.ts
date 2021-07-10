import { injectable, inject } from 'tsyringe';

import ICreateToolDTO from '../dtos/ICreateToolsDTO';
import Tool from '../infra/typeorm/entities/Tool';
import IToolRepository from '../repositories/IToolsRepository';

@injectable()
class CreateTollService {
  constructor(
    @inject('ToolRepository')
    private toolsRepository: IToolRepository
  ) {}

  async execute({
    tags,
    link,
    description,
    title,
  }: ICreateToolDTO): Promise<Tool> {
    const toolExist = await this.toolsRepository.findByTitle(title);

    if (toolExist) {
      throw new Error('tool already exist');
    }

    const tool = await this.toolsRepository.create({
      tags,
      link,
      description,
      title,
    });

    return tool;
  }
}

export default CreateTollService;
