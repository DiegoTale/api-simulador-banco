


import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    active: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated: Date;

}

