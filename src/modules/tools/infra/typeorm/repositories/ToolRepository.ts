import { EntityRepository, Repository, getRepository, ILike } from 'typeorm';

import ICreateToolDTO from '../../../dtos/ICreateToolsDTO';
import IToolRepository from '../../../repositories/IToolsRepository';
import Tool from '../entities/Tool';

@EntityRepository(Tool)
class ToolRepository implements IToolRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne(id);

    return tool;
  }

  public async findByTags(tag: string): Promise<Tool[]> {
    return this.ormRepository.find({
      where: {
        tags: ILike(`%${tag}%`),
      },
    });
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

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async list(): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    return tools;
  }
}

export default ToolRepository;
