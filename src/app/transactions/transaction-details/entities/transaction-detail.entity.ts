import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("transactions_details")
export class TransactionDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    transanction_id: number;

    @Column()
    products_cards_id: number;

    @Column()
    type: string;

    @Column()
    amount: number;

    @Column()
    active: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated: Date;

}

