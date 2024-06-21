import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsCardsService } from './products_cards.service';
import { CreateProductsCardDto } from './dto/create-products_card.dto';
import { UpdateProductsCardDto } from './dto/update-products_card.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('products-cards')
@ApiTags("products-cards")

export class ProductsCardsController {
  constructor(private readonly productsCardsService: ProductsCardsService) {}

  @Post()
  @ApiOperation({ description: "Servicio para obtener lista de productos cards" })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createProductsCardDto: CreateProductsCardDto) {
    return this.productsCardsService.create(createProductsCardDto);
  }

  @Get()
  findAll() {
    return this.productsCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsCardDto: UpdateProductsCardDto) {
    return this.productsCardsService.update(+id, updateProductsCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsCardsService.remove(+id);
  }
}
