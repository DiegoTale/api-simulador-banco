import { PartialType } from '@nestjs/swagger';
import { CreateProductsCardDto } from './create-products_card.dto';

export class UpdateProductsCardDto extends PartialType(CreateProductsCardDto) {}
