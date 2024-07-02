import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {

  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) { }

  async create(createAccountDto: CreateAccountDto) {
    const account = this.accountsRepository.create(createAccountDto);//'This action adds a new user';
    return await this.accountsRepository.insert(account);
  }

  findAll() {
    return this.accountsRepository.find({ relations: ["clients"]});
  }

  findOne(id: number) {
    return this.accountsRepository.findOneBy({ id });
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.accountsRepository.update(id, updateAccountDto);
  }

  remove(id: number) {
    return this.accountsRepository.delete({ id })
  }
}
