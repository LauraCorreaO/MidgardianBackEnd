// import { Injectable } from '@nestjs/common';
// import { Usuario } from 'src/domain/entities';
// import { ValidarDuplicadoInterface } from 'src/domain/ports/application';
// import { DataServiceInterface } from 'src/domain/ports/infrastructure';

// @Injectable()
// export class ValidarDuplicadosService implements ValidarDuplicadoInterface {

//   constructor(private readonly dataServices: DataServiceInterface) { }

//   async obtenerUsuarioPorEmail(email: string): Promise<Usuario | null> {
//     return await this.dataServices.usuarios.usuarioPorEmail(email);
// }

// async obtenerUsuarioPorNombre(username: string): Promise<Usuario | null> {
//     return await this.dataServices.usuarios.usuarioPorNombre(username);
// }
// }