import { Account } from "src/app/accounts/entities/account.entity";
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    active: string;

    @OneToMany(type => Account, account => account.clients)
    accounts: Account[];

    @Column()
    created: Date;

    @Column()
    updated: Date;


    @AfterInsert()
    logInsert() {
        console.log(`User has been inserted with id ${this.id}`);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('User has been updated with id : ', this.id)
    }


    @AfterRemove()
    logRemove() {
        console.log('Removed User with id', this.id);
    }


}



