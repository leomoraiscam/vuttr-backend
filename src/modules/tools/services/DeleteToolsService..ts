import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import IToolRepository from '../repositories/IToolsRepository';

@injectable()
class DeleteToolService {
  constructor(
    @inject('ToolRepository')
    private toolsRepository: IToolRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const tool = await this.toolsRepository.findById(id);

    if (!tool) {
      throw new AppError('tool not found', 404);
    }

    await this.toolsRepository.remove(id);
  }
}

export default DeleteToolService;
