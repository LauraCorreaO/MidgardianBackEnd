import {Usuario} from "src/domain/entities/usuario.entity";
import { GenericRepositoryInterface } from "./generic-repository";

export interface UsuarioRepositoryInterface extends GenericRepositoryInterface<Usuario>{
    usuarioPorEmail(email: string): Promise<Usuario | null>;
    usuarioPorNombre(username: string): Promise<Usuario | null>;
}