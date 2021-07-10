import { EntityRepository, Repository, getRepository } from 'typeorm';

import ICreateToolDTO from '../../../dtos/ICreateToolsDTO';
import IToolRepository from '../../../repositories/IToolsRepository';
import Tool from '../entities/Tool';

@EntityRepository(Tool)
class ToolRepository implements IToolRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async create({
    description,
    title,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create({
      description,
      title,
      link,
      tags,
    });

    await this.ormRepository.save(tool);

    return tool;
  }

  public async findByTitle(title: string): Promise<Tool | undefined> {
    return this.ormRepository.findOne({
      where: {
        title,
      },
    });
  }
}

export default ToolRepository;
