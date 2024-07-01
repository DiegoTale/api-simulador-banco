import { Injectable } from '@nestjs/common';
import { CreateTransactionDetailDto } from './dto/create-transaction-detail.dto';
import { UpdateTransactionDetailDto } from './dto/update-transaction-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDetail } from './entities/transaction-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionDetailsService {
  constructor(
    @InjectRepository(TransactionDetail)
    private transactionDetailRepository: Repository<TransactionDetail>,
  ) { }

  async create(createTrasactionDetailDto: CreateTransactionDetailDto) {
    const transactionDetails = this.transactionDetailRepository.create(createTrasactionDetailDto);//'This action adds a new user';
    return await this.transactionDetailRepository.insert(transactionDetails);
  }

  findAll() {
    return this.transactionDetailRepository.find();// `This action returns all users`;
  }

  findOne(id: number) {
    return this.transactionDetailRepository.findOneBy({ id });
  }

  update(id: number, updateTrasactionDetailDto: UpdateTransactionDetailDto) {
    return this.transactionDetailRepository.update(id, updateTrasactionDetailDto);
  }

  remove(id: number) {
    return this.transactionDetailRepository.delete({ id })
  }
}
