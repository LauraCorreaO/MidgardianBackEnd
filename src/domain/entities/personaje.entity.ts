import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Personaje {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nombre: string;
}