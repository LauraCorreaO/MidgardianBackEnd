import { Injectable, Logger, HttpException } from '@nestjs/common';
import { UsuarioResponseDto } from 'src/domain/DTOs';
import { Usuario } from 'src/domain/entities';
import { ObtenerUsuarioInterface } from 'src/domain/ports/application';

@Injectable()
export class ObtenerUsuarioAdapter implements ObtenerUsuarioInterface {
  constructor() {}

  async execute(id: string): Promise<UsuarioResponseDto> {
    const usuario: Usuario = await this.fetchUsuario(id);
    const usuarioResponseDto: UsuarioResponseDto = {
      id: usuario.id,
      correo: usuario.correo,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      nombreUsuario: usuario.nombreUsuario
    };

    return usuarioResponseDto;
  }

  private async fetchUsuario(id: string): Promise<Usuario> {
    // Fetch the Usuario object from your data source
    return new Usuario(); // Replace with your implementation
  }
}