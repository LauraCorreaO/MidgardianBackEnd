import { Injectable } from '@nestjs/common';
import { Usuario } from "src/domain/entities";
import { UsuarioRepositoryInterface } from "src/domain/ports/infrastructure";
import { TypeORMGenericRepository } from './typeorm-generic-repository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioRepository extends TypeORMGenericRepository<Usuario> implements UsuarioRepositoryInterface {
    
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>) {
        super(usuarioRepository);
    }
    async usuarioPorEmail(email: string): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({ where: { correo: email } });
    }
    
    async usuarioPorNombre(username: string): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({ where: { nombreUsuario: username } });
    }
}