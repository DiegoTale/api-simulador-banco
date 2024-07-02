import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
 import { ApiTags } from '@nestjs/swagger';
import { ProductsCardsService } from '../products_cards/products_cards.service';

@Controller('reports')
@ApiTags("reports")
export class ReportsController {
  constructor(private readonly productsCardsService: ProductsCardsService) { }


  @Get("transaction-details/:idProductCard")
  findAll(@Param('idProductCard') idProductCard: string) {
    return this.productsCardsService.findOneReport(+idProductCard);
  }


}
