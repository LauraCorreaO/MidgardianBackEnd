//Inyeccion de dependencias de todo lo que se va a usar luego en los servicios que hay en la application
import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infraestructure/infrastructure.module';
import { ObtenerUsuarioAdapter, CrearUsuarioAdapter, ObtenerTodosUsuariosAdapter, LoginUsuarioAdapter } from './adapters/usuarios';
import { ObtenerUsuarioInterface, CrearUsuarioInterface, ObtenerTodosUsuariosInterface, LoginUsuarioInterface } from 'src/domain/ports/application';

const ObtenerUsuarioService = {
  provide:  ObtenerUsuarioInterface,
  useClass:  ObtenerUsuarioAdapter
}

const CrearUsuariosService = {
  provide: CrearUsuarioInterface,
  useClass: CrearUsuarioAdapter
}

const ObtenerTodosUsuariosService = {
  provide: ObtenerTodosUsuariosInterface,
  useClass: ObtenerTodosUsuariosAdapter
}

const LoginUsuarioService = {
  provide: LoginUsuarioInterface,
  useClass: LoginUsuarioAdapter
}


@Module({
    imports: [
        InfrastructureModule
      ],
      providers:[
        ObtenerUsuarioService,
        CrearUsuariosService,
        ObtenerTodosUsuariosService,
        LoginUsuarioService
      ],
      exports:[
        ObtenerUsuarioService,
        CrearUsuariosService,
        ObtenerTodosUsuariosService,
        LoginUsuarioService
      ]
})
export class ApplicationModule {}
