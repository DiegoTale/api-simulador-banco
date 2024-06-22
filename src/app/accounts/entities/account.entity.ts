import { Client } from "src/app/clients/entities/client.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("accounts")
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: number;

    @Column()
    number: string;

    @Column()
    status: string;


    @ManyToOne(type => Client, client => client.accounts)
    @JoinColumn({ name: 'client_id' })
    clients: Client[];

    @Column()
    active: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated: Date;



}

