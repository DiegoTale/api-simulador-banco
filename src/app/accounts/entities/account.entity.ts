import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    active: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated: Date;


}

