import { Injectable } from '@nestjs/common';
import { ValidarDuplicadoInterface } from 'src/domain/ports/application';
import { DataServiceInterface } from 'src/domain/ports/infrastructure';

@Injectable()
export class ValidarDuplicadosService implements ValidarDuplicadoInterface {
  
    constructor(private readonly dataServices: DataServiceInterface) {}

    async existeUsuarioPorEmail(email: string): Promise<boolean> {
        const existingUser = await this.dataServices.usuarios.usuarioPorEmail(email);
        return !!existingUser;
      }

  async existeUsuarioPorNombre(username: string): Promise<boolean> {
    const existingUser = await this.dataServices.usuarios.usuarioPorNombre(username);
    return !!existingUser;
  }
}