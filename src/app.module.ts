import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoansModule } from './loans/loans.module';
import { CreditScoringModule } from './credit-scoring/credit-scoring.module';

@Module({
  imports: [AuthModule, UsersModule, LoansModule, CreditScoringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
