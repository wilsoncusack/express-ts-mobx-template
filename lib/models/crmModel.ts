//   /lib/models/crmModel.ts

import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ContactSchema {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: number;

    @Column()
    company: number;

    @Column()
    phone: number;

    @Column()
    created_date: Date;

}