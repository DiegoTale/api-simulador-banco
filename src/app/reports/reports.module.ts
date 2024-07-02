import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionDetail } from '../transactions/transaction-details/entities/transaction-detail.entity';
import { TransactionDetailsService } from '../transactions/transaction-details/transaction-details.service';
import { ProductsCardsService } from '../products_cards/products_cards.service';
import { ProductsCard } from '../products_cards/entities/products_card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsCard])],
  controllers: [ReportsController],
  providers: [ProductsCardsService],
})
export class ReportsModule {}
