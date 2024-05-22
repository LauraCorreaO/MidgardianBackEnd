//Inyeccion de dependencias de todo lo que se va a usar luego en los servicios que hay en la application
import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infraestructure/infrastructure.module';
import { ObtenerUsuarioAdapter, CrearUsuarioAdapter, ObtenerTodosUsuariosAdapter } from './adapters/usuarios';
import { ObtenerUsuarioInterface, CrearUsuarioInterface, ObtenerTodosUsuariosInterface, ValidarDuplicadoInterface } from 'src/domain/ports/application';
import { ValidarDuplicadosService } from './adapters/usuarios/verificar-duplicados.service';

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

const ValidarDuplicadoService = {
  provide: ValidarDuplicadoInterface,
  useClass: ValidarDuplicadosService
}

@Module({
    imports: [
        InfrastructureModule
      ],
      providers:[
        ObtenerUsuarioService,
        CrearUsuariosService,
        ObtenerTodosUsuariosService,
        ValidarDuplicadoService
      ],
      exports:[
        ObtenerUsuarioService,
        CrearUsuariosService,
        ObtenerTodosUsuariosService,
        ValidarDuplicadoService
      ]
})
export class ApplicationModule {}
