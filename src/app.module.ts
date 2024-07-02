import { Module } from '@nestjs/common';

import { UsersModule } from './app/users/users.module';
import { ClientsModule } from './app/clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './app/users/entities/user.entity';
import { Client } from './app/clients/entities/client.entity';
import { AccountsModule } from './app/accounts/accounts.module';
import { Account } from './app/accounts/entities/account.entity';
import { ProductsCardsModule } from './app/products_cards/products_cards.module';
import { ProductsCard } from './app/products_cards/entities/products_card.entity';
import { TransactionsModule } from './app/transactions/transactions.module';
import { Transaction } from './app/transactions/entities/transaction.entity';
import { TransactionDetail } from './app/transactions/transaction-details/entities/transaction-detail.entity';
import { ReportsModule } from './app/reports/reports.module';
 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'simulador-banco.cluster-c7c2km4au4qf.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'kzW3nVchgozgTdav',
      database: 'simulador-banco',
      entities: [User, Client, Account, ProductsCard, Transaction, TransactionDetail],
      synchronize: true,
    }),
    UsersModule,
    ClientsModule,
    AccountsModule,
    ProductsCardsModule,
    TransactionsModule,
    ReportsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
