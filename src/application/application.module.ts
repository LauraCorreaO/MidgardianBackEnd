//Inyeccion de dependencias de todo lo que se va a usar luego en los servicios que hay en la application
import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infraestructure/infrastructure.module';
import { ObtenerUsuarioAdapter, CrearUsuarioAdapter } from './usuarios';
import { ObtenerUsuarioInterface, CrearUsuarioInterface } from 'src/domain/ports/application';

const ObtenerUsuarioService = {
  provide:  ObtenerUsuarioInterface,
  useClass:  ObtenerUsuarioAdapter
}

const CrearUsuariosService = {
  provide: CrearUsuarioInterface,
  useClass: CrearUsuarioAdapter
}

@Module({
    imports: [
        InfrastructureModule
      ],
      providers:[
        ObtenerUsuarioService,
        CrearUsuariosService
      ],
      exports:[
        ObtenerUsuarioService,
        CrearUsuariosService
      ]
})
export class ApplicationModule {}
