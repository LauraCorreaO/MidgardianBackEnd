
import { IsNotEmpty, IsString, } from "class-validator";

export class UsuarioRequestDto {

    @IsString()
    @IsNotEmpty()
    correo: string;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsString()
    @IsNotEmpty()
    nombreUsuario: string;

    @IsString()
    @IsNotEmpty()
    contraseña: string;
}

export class UsuarioResponseDto {

    id: string;
    correo: string;
    nombre: string;
    apellido: string
    nombreUsuario: string;

}

export class LoginRequestDto {
    @IsString()
    @IsNotEmpty()
    nombreUsuario: string;
  
    @IsString()
    @IsNotEmpty()
    contrasena: string;
  }


