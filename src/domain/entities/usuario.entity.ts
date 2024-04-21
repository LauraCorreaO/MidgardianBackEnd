import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    contraseña: string
}