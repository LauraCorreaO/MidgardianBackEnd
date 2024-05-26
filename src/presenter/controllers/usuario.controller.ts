import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import {UsuarioRequestDto, UsuarioResponseDto, ResponseDto, LoginRequestDto, LoginResponseDto } from "src/domain/DTOs";
import {ObtenerUsuarioInterface, CrearUsuarioInterface, ObtenerTodosUsuariosInterface, LoginUsuarioInterface} from "src/domain/ports/application";

@Controller('usuario')
export class UsuarioController{
    constructor(
        private readonly crearUsuarioService: CrearUsuarioInterface,
        private readonly obtenerUsuarioService: ObtenerUsuarioInterface,
        private readonly obtenerTodosUsuariosService: ObtenerTodosUsuariosInterface,
        private readonly loginUsuarioService: LoginUsuarioInterface
     ) { }

     @Post('/crear')
     async crearUsuario(@Body() usuarioRequestDto: UsuarioRequestDto): Promise<ResponseDto<UsuarioResponseDto>> {
        const result = await this.crearUsuarioService.execute(usuarioRequestDto);
        let response: ResponseDto<UsuarioResponseDto> = {
           statusCode: 200,
           message: 'Usuario creado con éxito',
           data: result
        }
        return response;
     }
    
     @Get('/:id')
     async obtenerUsuario(@Param('id') id: string): Promise<ResponseDto<UsuarioResponseDto>> {
        const result = await this.obtenerUsuarioService.execute(id);
        let response: ResponseDto<UsuarioResponseDto> = {
           statusCode: 200,
           message: 'Usuario obtenido con éxito',
           data: result
        }
        return response;
     }
     
     @Get()
     async obtenerTodos(): Promise<ResponseDto<UsuarioResponseDto[]>> {
        const result = await this.obtenerTodosUsuariosService.execute();
        let response: ResponseDto<UsuarioResponseDto[]> = {
           statusCode: 200,
           message: 'Todos los suarios obtenidos con éxito',
           data: result
        }
        return response;
     }

     @Post('/login')
     async loginUsuario(@Body() loginRequestDto: LoginRequestDto): Promise<ResponseDto<LoginResponseDto>> {
         const result = await this.loginUsuarioService.execute(loginRequestDto);
         let response: ResponseDto<LoginResponseDto> = {
             statusCode: 200,
             message: 'Inicio de sesión exitoso',
             data: result,
         };
         return response;
     }
    
}
