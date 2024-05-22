import { Injectable, Logger, HttpException } from '@nestjs/common';
import { Usuario } from 'src/domain/entities';
import { ObtenerTodosUsuariosInterface } from 'src/domain/ports/application';
import {UsuarioRequestDto, UsuarioResponseDto } from  'src/domain/DTOs'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataServiceInterface } from 'src/domain/ports/infrastructure';

@Injectable()
export class ObtenerTodosUsuariosAdapter implements ObtenerTodosUsuariosInterface {
    constructor(private readonly dataServices: DataServiceInterface) {}

    async execute(): Promise<UsuarioResponseDto[]> {
      const usuarios = await this.dataServices.usuarios.obtenerTodos();

      const usuariosResponseDto: UsuarioResponseDto[] = usuarios.map(usuario => {
        const response = new UsuarioResponseDto();
        response.id = usuario.id;
        response.nombre = usuario.nombre;
        response.correo = usuario.correo;
        // Añadir aquí otros campos si es necesario
        return response;
    });

    return usuariosResponseDto;
      return 
    }
}
