import { Module } from '@nestjs/common';

import { UsersModule } from './app/users/users.module';
import { ClientsModule } from './app/clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'simulador-banco.cluster-c7c2km4au4qf.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'kzW3nVchgozgTdav',
      database: 'simulador-banco',
      entities: [__dirname+'/app/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
