import { Module } from '@nestjs/common';
import { ProductsCardsService } from './products_cards.service';
import { ProductsCardsController } from './products_cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCard } from './entities/products_card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsCard])],
  controllers: [ProductsCardsController],
  providers: [ProductsCardsService],
})
export class ProductsCardsModule {}

