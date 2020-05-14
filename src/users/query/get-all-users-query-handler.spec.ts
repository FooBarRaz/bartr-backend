import { Test, TestingModule } from '@nestjs/testing';
import { GetAllUsersQueryHandler } from './get-all-users-query-handler';

describe('GetAllUsersQueryHandler', () => {
  let provider: GetAllUsersQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllUsersQueryHandler],
    }).compile();

    provider = module.get<GetAllUsersQueryHandler>(GetAllUsersQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
