import { Ignore, MapProp } from "ts-simple-automapper";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @Ignore()
    @PrimaryGeneratedColumn()
    public id: number;

    @MapProp()
    @Column({ length: 50, nullable: false })
    public name: string;
}
