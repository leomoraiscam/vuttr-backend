import { v4 as uuidv4 } from 'uuid';

import ICreateToolDTO from '../../dtos/ICreateToolsDTO';
import Tool from '../../infra/typeorm/entities/Tool';
import IToolRepository from '../IToolsRepository';

class FakeCreateToolRepository implements IToolRepository {
  private tools: Tool[] = [];

  public async findByTitle(title: string): Promise<Tool | undefined> {
    return this.tools.find((tool) => tool.title === title);
  }

  public async create({
    title,
    description,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, {
      id: uuidv4(),
      title,
      description,
      link,
      tags,
    });

    this.tools.push(tool);

    return tool;
  }
}

export default FakeCreateToolRepository;
