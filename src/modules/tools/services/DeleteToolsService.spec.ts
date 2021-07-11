import AppError from '../../../shared/errors/AppError';
import FakeToolRepository from '../repositories/fakes/FakeToolRepository';
import DeleteToolsService from './DeleteToolsService.';

describe('Create Tools', () => {
  let fakeToolRepository: FakeToolRepository;
  let deleteToolsService: DeleteToolsService;

  beforeEach(async () => {
    fakeToolRepository = new FakeToolRepository();
    deleteToolsService = new DeleteToolsService(fakeToolRepository);
  });

  it('should be able delete a existent tool', async () => {
    const tool = await fakeToolRepository.create({
      description: 'descrisção',
      link: 'http://localhost:3000',
      tags: ['Backend', 'Cloud'],
      title: 'Node',
    });

    const removeTool = jest.spyOn(fakeToolRepository, 'remove');

    const { id } = tool;

    await deleteToolsService.execute(id);

    expect(removeTool).toHaveBeenCalled();
  });

  it('should not be able delete a non-existent tool', async () => {
    const id = 'non-existent-id';

    await expect(deleteToolsService.execute(id)).rejects.toBeInstanceOf(
      AppError
    );
  });
});
