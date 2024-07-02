


import { Account } from "src/app/accounts/entities/account.entity";
import { Transaction } from "src/app/transactions/entities/transaction.entity";
import { TransactionDetail } from "src/app/transactions/transaction-details/entities/transaction-detail.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("products_card")
export class ProductsCard {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_id: number;

    @Column()
    type: string;

    @Column()
    number: string;

    @Column()
    expire_month: string;

    @Column()
    expire_year: string;

    @Column()
    cvv: string;

    @Column()
    amount: number;

    @Column()
    limit: number;

    @ManyToOne(type => Account, accounts => accounts.products)
    @JoinColumn({ name: 'account_id' })
    accounts: Account[];



    @OneToMany(type => Transaction, transaction => transaction.products)
    transactions: Transaction[];


    @OneToMany(type => TransactionDetail, transactionDetails => transactionDetails.productsCard)
    transactionDetails: TransactionDetail[];

    @Column()
    active: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated: Date;

}

