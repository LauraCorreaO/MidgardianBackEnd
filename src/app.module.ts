import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infraestructure/infrastructure.module';
import { PresenterModule } from './presenter/presenter.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ApplicationModule,
    InfrastructureModule,
    PresenterModule
  ],
})
export class AppModule {}
