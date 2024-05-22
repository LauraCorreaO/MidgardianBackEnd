import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataServicesAdapter } from './data-service.service';
import { DataServiceInterface } from 'src/domain/ports/infrastructure/';
import { Usuario } from 'src/domain/entities';
const DataServices = {
  provide: DataServiceInterface,
  useClass: DataServicesAdapter
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities:true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Usuario]),
  ],
  providers: [
    DataServices
  ],
  exports: [
    DataServices
  ]
})
export class DataServiceModule {

 }


