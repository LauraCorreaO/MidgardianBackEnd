import {Personaje} from "src/domain/entities";

export interface PersonajeRepositoryInterface{
    crear(personaje: Personaje): Promise<Personaje[]>;
    obtener(id: string): Promise<Personaje[]>;
}