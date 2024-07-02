

import { ProductsCard } from "src/app/products_cards/entities/products_card.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("transactions")
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_cards_id_sender: number;

    @Column()
    product_cards_id_reciver: number;

    @Column()
    description: string;

    @Column()
    deferred_frecuency: number;

    @Column()
    amount: number;

    @ManyToOne(type => ProductsCard, productsCard => productsCard.transactions)
    @JoinColumn({ name: 'product_cards_id_sender' })
    products: ProductsCard[];

    /*

    @ManyToOne(type => ProductsCard, productsCard2 => productsCard2.productsReciver)
    @JoinColumn({ name: 'product_cards_id_reciver' })
    productsReciver: ProductsCard[];

    */


    @Column()
    active: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated: Date;

}

