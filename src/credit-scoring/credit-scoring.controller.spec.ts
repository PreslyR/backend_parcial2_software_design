import { Test, TestingModule } from '@nestjs/testing';
import { CreditScoringController } from './credit-scoring.controller';

describe('CreditScoringController', () => {
  let controller: CreditScoringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditScoringController],
    }).compile();

    controller = module.get<CreditScoringController>(CreditScoringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
