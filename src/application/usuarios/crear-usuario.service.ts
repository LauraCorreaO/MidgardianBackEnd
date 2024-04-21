import { Injectable, Logger, HttpException } from '@nestjs/common';
import { UsuarioRequestDto } from 'src/domain/DTOs';
import { Usuario } from 'src/domain/entities';
import { CrearUsuarioInterface } from 'src/domain/ports/application';

@Injectable()
export class CrearUsuarioAdapter implements CrearUsuarioInterface {
    constructor() {}

    async execute(usuarioRequestDTO: UsuarioRequestDto): Promise<Usuario> {
      return 
    }
}
