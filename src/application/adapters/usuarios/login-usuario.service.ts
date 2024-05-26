import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginUsuarioInterface } from 'src/domain/ports/application';
import { LoginRequestDto, LoginResponseDto } from 'src/domain/DTOs';
import { DataServiceInterface } from "src/domain/ports/infrastructure";
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginUsuarioAdapter implements LoginUsuarioInterface {
    constructor(
        private readonly dataServices: DataServiceInterface
    ) {}

    async execute(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
        const { nombreUsuario, contraseña } = loginRequestDto;

        const usuario = await this.dataServices.usuarios.usuarioPorNombre(nombreUsuario);
        if (!usuario) {
            throw new HttpException('Nombre de usuario o contraseña incorrectos', HttpStatus.UNAUTHORIZED);
        }

        const isPasswordMatching = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!isPasswordMatching) {
            throw new HttpException('Nombre de usuario o contraseña incorrectos', HttpStatus.UNAUTHORIZED);
        }

        const response = new LoginResponseDto();
        response.id = usuario.id;
        response.nombre = usuario.nombre;
        response.apellido = usuario.apellido;
        response.correo = usuario.correo;
        response.nombreUsuario = usuario.nombreUsuario;

        return response;
    }
}
