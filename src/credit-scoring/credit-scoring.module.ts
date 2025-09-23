import { Module } from '@nestjs/common';
import { CreditScoringService } from './credit-scoring.service';
import { CreditScoringController } from './credit-scoring.controller';

@Module({
  providers: [CreditScoringService],
  controllers: [CreditScoringController]
})
export class CreditScoringModule {}
