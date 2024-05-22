import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    correo: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    nombreUsuario: string;

    @Column()
    contraseña: string
}