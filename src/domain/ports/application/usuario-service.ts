import {UsuarioRequestDto, UsuarioResponseDto} from "src/domain/DTOs/usuario-service.dto"
import {Usuario} from "src/domain/entities/"

export abstract class ObtenerUsuarioInterface {
    abstract execute(id: string):Promise<UsuarioResponseDto>;
}

export abstract class CrearUsuarioInterface {
    abstract execute(usuarioRequestDTO: UsuarioRequestDto):Promise<UsuarioResponseDto>;
}