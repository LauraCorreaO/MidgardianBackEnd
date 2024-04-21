import { Module } from '@nestjs/common';

import { ApplicationModule } from "src/application/application.module";
import { UsuarioController } from './controllers';

@Module({
    controllers: [
        UsuarioController
      ],
    imports: [
        ApplicationModule
    ]
})
export class PresenterModule {}
