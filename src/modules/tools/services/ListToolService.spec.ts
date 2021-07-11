import AppError from '../../../shared/errors/AppError';
import FakeToolRepository from '../repositories/fakes/FakeToolRepository';
import ListToolService from './ListToolService';

describe('List Tools', () => {
  let fakeToolRepository: FakeToolRepository;
  let listToolService: ListToolService;

  beforeEach(async () => {
    fakeToolRepository = new FakeToolRepository();
    listToolService = new ListToolService(fakeToolRepository);
  });

  it('should be able list a tools by tags', async () => {
    await fakeToolRepository.create({
      description: 'descrisção',
      link: 'http://localhost:3000',
      tags: ['Backend', 'Cloud'],
      title: 'Node',
    });

    const tag = 'Backend';

    const [tools] = await listToolService.execute(tag);

    expect(tools.tags).toEqual(['Backend', 'Cloud']);
  });

  it.only('should be able list a tools without tags', async () => {
    const primaryTool = await fakeToolRepository.create({
      description: 'descrisção',
      link: 'http://localhost:3000',
      tags: ['Backend', 'Cloud'],
      title: 'Node',
    });

    const secondaryTool = await fakeToolRepository.create({
      description: 'descrisção',
      link: 'http://localhost:3000',
      tags: ['Cloud', 'Infra'],
      title: 'AWS',
    });

    const tools = await listToolService.execute();

    expect(tools).toEqual([primaryTool, secondaryTool]);
  });
});
