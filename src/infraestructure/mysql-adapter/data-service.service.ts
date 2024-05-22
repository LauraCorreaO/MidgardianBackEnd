//Para que las entidades se conecten en con la base de datos, capa de abstraccion entre entidades y base de datos
import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { DataServiceInterface } from "src/domain/ports/infrastructure";
import { UsuarioRepository } from "./repositories";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "src/domain/entities";

@Injectable()
export class DataServicesAdapter implements DataServiceInterface,OnApplicationBootstrap {
    usuarios: UsuarioRepository;

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>){
    }
    onApplicationBootstrap() {
        this.usuarios = new UsuarioRepository(this.usuarioRepository)
     }
}