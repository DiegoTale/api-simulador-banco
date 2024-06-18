import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    created: Date;

    @Column()
    updated: Date;


}



