import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import {UsuarioRequestDto, UsuarioResponseDto, ResponseDto } from "src/domain/DTOs";
import {ObtenerUsuarioInterface, CrearUsuarioInterface} from "src/domain/ports/application";

@Controller('usuario')
export class UsuarioController{
    constructor(
        private readonly crearUsuarioService: CrearUsuarioInterface,
        private readonly obtenerUsuarioService: ObtenerUsuarioInterface
     ) { }

     @Post('/crear')
     async crearUsuario(@Body() usuarioRequestDto: UsuarioRequestDto): Promise<ResponseDto<UsuarioResponseDto>> {
        const result = await this.crearUsuarioService.execute(usuarioRequestDto);
        let response: ResponseDto<UsuarioResponseDto> = {
           statusCode: 200,
           message: 'Usuario creado exitosamente',
           data: result
        }
        return response;
     }
    
     @Get('/:id')
     async obtenerUsuario(@Param('id') id: string): Promise<ResponseDto<UsuarioResponseDto>> {
        const result = await this.obtenerUsuarioService.execute(id);
        let response: ResponseDto<UsuarioResponseDto> = {
           statusCode: 200,
           message: 'Usuario obtenido exitosamente',
           data: result
        }
        return response;
     }
    
}
