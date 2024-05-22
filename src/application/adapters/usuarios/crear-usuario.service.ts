import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { CrearUsuarioInterface, ValidarDuplicadoInterface } from 'src/domain/ports/application';
import { UsuarioRequestDto, UsuarioResponseDto } from 'src/domain/DTOs';
import { Usuario } from 'src/domain/entities';
import { DataServiceInterface, } from "src/domain/ports/infrastructure";

import * as bcrypt from 'bcrypt'

@Injectable()
export class CrearUsuarioAdapter implements CrearUsuarioInterface {
  constructor(
    private readonly dataServices: DataServiceInterface,
    private readonly validarDuplicadosService: ValidarDuplicadoInterface) { }

  async execute(usuarioRequestDto: UsuarioRequestDto): Promise<UsuarioResponseDto> {
    const { correo, nombreUsuario, contraseña, nombre, apellido } = usuarioRequestDto;

    const emailExists = await this.validarDuplicadosService.existeUsuarioPorEmail(correo);
    if (emailExists) {
      throw new HttpException('El correo electrónico ya está en uso', HttpStatus.CONFLICT);
    }

    const usernameExists = await this.validarDuplicadosService.existeUsuarioPorNombre(nombreUsuario);
    if (usernameExists) {
      throw new HttpException('El nombre de usuario ya está en uso', HttpStatus.CONFLICT);
    }
    
    const saltOrRounds = 10; 
    const hashedPassword = await bcrypt.hash(contraseña, saltOrRounds);

    const usuario = new Usuario();
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.nombreUsuario = nombreUsuario;
    usuario.contraseña = hashedPassword;

    const creado = await this.dataServices.usuarios.agregar(usuario);

    const response = new UsuarioResponseDto();
    response.id = creado.id;
    response.nombre = creado.nombre;
    response.apellido = creado.apellido;
    response.correo = creado.correo
    response.nombreUsuario = creado.nombreUsuario;

    return response;
  }
}
