import { Test, TestingModule } from '@nestjs/testing';
import { CreditScoringService } from './credit-scoring.service';

describe('CreditScoringService', () => {
  let service: CreditScoringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditScoringService],
    }).compile();

    service = module.get<CreditScoringService>(CreditScoringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
