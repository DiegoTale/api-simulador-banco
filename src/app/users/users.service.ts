import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }


  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);//'This action adds a new user';
    return await this.usersRepository.insert(user);
  }

  findAll() {
    return this.usersRepository.find();// `This action returns all users`;
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });//`This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto); //`This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.usersRepository.delete({ id })//`This action removes a #${id} user`;
  }
}
