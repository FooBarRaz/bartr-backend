import { Test, TestingModule } from '@nestjs/testing';
import { UserReadRepository } from './user-read-repository';

describe('UserReadRepository', () => {
  let provider: UserReadRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserReadRepository],
    }).compile();

    provider = module.get<UserReadRepository>(UserReadRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
