import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  active: string;

  @Column()
  created: Date;

  @Column()
  updated: Date;
}