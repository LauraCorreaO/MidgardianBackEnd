import { Injectable, Logger, HttpException } from '@nestjs/common';
import { Usuario } from 'src/domain/entities';
import { ObtenerUsuarioInterface } from 'src/domain/ports/application';

@Injectable()
export class ObtenerUsuarioAdapter implements ObtenerUsuarioInterface {
    constructor() {}

    async execute(id: string): Promise<Usuario> {
      return 
    }
}
