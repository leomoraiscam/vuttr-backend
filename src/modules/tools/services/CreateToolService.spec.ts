import FakeToolRepository from '../repositories/fakes/FakeToolRepository';
import CreateToolService from './CreateToolService';

describe('Create Tools', () => {
  let fakeToolRepository: FakeToolRepository;
  let createToolService: CreateToolService;

  beforeEach(async () => {
    fakeToolRepository = new FakeToolRepository();
    createToolService = new CreateToolService(fakeToolRepository);
  });

  it('should be able create a tool', async () => {
    const tool = await createToolService.execute({
      description: 'descrisção',
      link: 'http://localhost:3000',
      tags: ['Backend', 'Cloud'],
      title: 'Node',
    });

    expect(tool).toHaveProperty('id');
  });

  it('should not be able create a tool with same title and link', async () => {
    await fakeToolRepository.create({
      description: 'descrisção',
      link: 'http://localhost:3000',
      tags: ['Backend', 'Cloud'],
      title: 'Node',
    });

    await expect(
      createToolService.execute({
        description: 'descrisção',
        link: 'http://localhost:3000',
        tags: ['Backend', 'Cloud'],
        title: 'Node',
      })
    ).rejects.toThrow();
  });
});
