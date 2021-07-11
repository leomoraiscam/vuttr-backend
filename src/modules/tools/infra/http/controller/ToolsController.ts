import { Response, Request } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '../../../services/CreateToolService';
import DeleteToolService from '../../../services/DeleteToolsService.';
import ListToolService from '../../../services/ListToolService';

class ToolsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query;

    const toolsRepository = container.resolve(ListToolService);

    const tagFilter = tag ? tag.toString() : undefined;

    const filterTools = await toolsRepository.execute(tagFilter);

    return response.json(filterTools);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const createTool = container.resolve(CreateToolService);

    const tool = await createTool.execute({
      title,
      link,
      description,
      tags,
    });

    return response.json(tool);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTool = container.resolve(DeleteToolService);

    await deleteTool.execute(id);

    return response.status(204).send();
  }
}

export default ToolsController;
