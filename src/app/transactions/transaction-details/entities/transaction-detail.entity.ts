import { ProductsCard } from "src/app/products_cards/entities/products_card.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(type => ProductsCard, productsCard => productsCard.transactionDetails)
    @JoinColumn({ name: 'products_cards_id' })
    productsCard: ProductsCard[];

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated: Date;

}

