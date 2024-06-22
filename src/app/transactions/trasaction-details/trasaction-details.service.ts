import { Injectable } from '@nestjs/common';
import { CreateTrasactionDetailDto } from './dto/create-trasaction-detail.dto';
import { UpdateTrasactionDetailDto } from './dto/update-trasaction-detail.dto';

@Injectable()
export class TrasactionDetailsService {
  create(createTrasactionDetailDto: CreateTrasactionDetailDto) {
    return 'This action adds a new trasactionDetail';
  }

  findAll() {
    return `This action returns all trasactionDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trasactionDetail`;
  }

  update(id: number, updateTrasactionDetailDto: UpdateTrasactionDetailDto) {
    return `This action updates a #${id} trasactionDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} trasactionDetail`;
  }
}
