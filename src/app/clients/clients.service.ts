import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) { }

  async create(createClientDto: CreateClientDto) {
    const client = this.clientsRepository.create(createClientDto);//'This action adds a new user';
    return await this.clientsRepository.insert(client);
  }

  findAll() {
    return this.clientsRepository.find();// `This action returns all users`;
  }

  findOne(id: number) {
    return this.clientsRepository.findOneBy({ id });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientsRepository.update(id, updateClientDto);
  }

  remove(id: number) {
    return this.clientsRepository.delete({ id })
  }
}
