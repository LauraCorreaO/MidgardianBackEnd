
import { IsNotEmpty, IsString, } from "class-validator";

export class UsuarioRequestDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    correo: string;

    @IsString()
    @IsNotEmpty()
    contraseña: string;
}

export class UsuarioResponseDto {

    id: string;
    nombre: string;
    correo: string;

}