import ICreateToolsDTO from '../dtos/ICreateToolsDTO';
import Tool from '../infra/typeorm/entities/Tool';

interface IToolsRepository {
  create(data: ICreateToolsDTO): Promise<Tool>;
  list(): Promise<Tool[]>;
  findByTags(tag: string): Promise<Tool[]>;
  findByTitle(title: string): Promise<Tool>;
}

export default IToolsRepository;
