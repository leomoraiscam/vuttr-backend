import ICreateToolsDTO from '../dtos/ICreateToolsDTO';
import Tool from '../infra/typeorm/entities/Tool';

interface IToolsRepository {
  create(data: ICreateToolsDTO): Promise<Tool>;
  findByTitle(title: string): Promise<Tool | undefined>;
}

export default IToolsRepository;
