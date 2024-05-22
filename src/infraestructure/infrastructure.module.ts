//Inyeccion de dependencias de todo lo que se va a usar luego en los servicios que hay en la application
import { DataServiceModule } from 'src/infraestructure/mysql-adapter/data-service.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        DataServiceModule
      ],
      exports: [
        DataServiceModule
      ]
})
export class InfrastructureModule {}
