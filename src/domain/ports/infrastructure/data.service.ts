//Esta clase abstracta define las propiedades usuarios que son de los tipos de las interfaces de repositorio correspondientes.
import { UsuarioRepositoryInterface } from "./";

export abstract class DataServiceInterface{
    abstract usuarios: UsuarioRepositoryInterface;
}