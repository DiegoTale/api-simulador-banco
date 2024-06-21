

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("transactions")
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_id_sender: number;

    @Column()
    account_id_reciver: number;

    @Column()
    description: string;

    @Column()
    deferred_frecuency: number;

    @Column()
    amount: number;

    @Column()
    active: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated: Date;

}

