import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) { }

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = this.transactionRepository.create(createTransactionDto);//'This action adds a new user';
    return await this.transactionRepository.insert(transaction);
  }

  findAll() {
    return this.transactionRepository.find({ relations: ["products", "products.accounts", "products.accounts.clients"]});// `This action returns all users`;
  }

  findOne(id: number) {
    return this.transactionRepository.findOneBy({ id });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return this.transactionRepository.update(id, updateTransactionDto);
  }

  remove(id: number) {
    return this.transactionRepository.delete({ id })
  }
}
