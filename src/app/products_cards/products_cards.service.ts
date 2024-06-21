import { Injectable } from '@nestjs/common';
import { CreateProductsCardDto } from './dto/create-products_card.dto';
import { UpdateProductsCardDto } from './dto/update-products_card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsCard } from './entities/products_card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsCardsService {

  constructor(
    @InjectRepository(ProductsCard)
    private productsCardRepository: Repository<ProductsCard>,
  ) { }

  async create(createProductsCardDto: CreateProductsCardDto) {
    const productsCard = this.productsCardRepository.create(createProductsCardDto);//'This action adds a new user';
    return await this.productsCardRepository.insert(productsCard);
  }
  findAll() {
    return this.productsCardRepository.find();// `This action returns all users`;
  }

  findOne(id: number) {
    return this.productsCardRepository.findOneBy({ id });
  }

  update(id: number, updateProductsCardDto: UpdateProductsCardDto) {
    return this.productsCardRepository.update(id, updateProductsCardDto);
  }

  remove(id: number) {
    return this.productsCardRepository.delete({ id })
  }
}
