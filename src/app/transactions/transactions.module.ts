import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { TrasactionDetailsModule } from './trasaction-details/trasaction-details.module';
  
@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), TrasactionDetailsModule],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule { }
