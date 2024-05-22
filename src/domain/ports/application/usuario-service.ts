import {LoginRequestDto, UsuarioRequestDto, UsuarioResponseDto} from "src/domain/DTOs/usuario-service.dto"
import {Usuario} from "src/domain/entities/"

export abstract class ObtenerUsuarioInterface {
    abstract execute(id: string):Promise<UsuarioResponseDto>;
}

export abstract class ObtenerTodosUsuariosInterface {
    abstract execute():Promise<UsuarioResponseDto[]>;
}

export abstract class CrearUsuarioInterface {
    abstract execute(usuarioRequestDTO: UsuarioRequestDto):Promise<UsuarioResponseDto>;
}

export abstract class ValidarDuplicadoInterface {
    abstract existeUsuarioPorEmail(email: string): Promise<Usuario | null>;
    abstract existeUsuarioPorNombre(username: string): Promise<Usuario | null>;
}

export abstract class LoginInterface {
    abstract execute(loginRequestDto:LoginRequestDto):Promise<LoginRequestDto>
}