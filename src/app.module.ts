import { Module } from '@nestjs/common';

import { UsersModule } from './app/users/users.module';
import { ClientsModule } from './app/clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './app/users/entities/user.entity';
import { Client } from './app/clients/entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'simulador-banco.cluster-c7c2km4au4qf.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'kzW3nVchgozgTdav',
      database: 'simulador-banco',
      entities: [User, Client],
      synchronize: true,
    }),
    UsersModule,
    ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
