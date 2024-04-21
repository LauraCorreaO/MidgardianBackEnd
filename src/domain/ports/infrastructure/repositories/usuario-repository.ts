import {Usuario} from "src/domain/entities/usuario.entity";

export interface UsuarioRepositoryInterface{
    crear(usuario: Usuario): Promise<Usuario[]>;
    obtener(id: string): Promise<Usuario[]>;
}