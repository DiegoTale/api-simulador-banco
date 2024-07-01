import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { TransactionDetailsModule } from './transaction-details/transaction-details.module';
import { ProductsCardsService } from '../products_cards/products_cards.service';
import { ProductsCard } from '../products_cards/entities/products_card.entity';
import { TransactionDetail } from './transaction-details/entities/transaction-detail.entity';
import { TransactionDetailsService } from './transaction-details/transaction-details.service';
  
@Module({
  imports: [TypeOrmModule.forFeature([Transaction,ProductsCard, TransactionDetail]), TransactionDetailsModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, ProductsCardsService, TransactionDetailsService],
})
export class TransactionsModule { }
