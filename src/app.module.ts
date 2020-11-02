import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { CalcularController } from './calcular/calcular.controller';
import { CalcularService } from './calcular/calcular.service';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, ProductoController, CalcularController, LoginController],
  providers: [AppService, ProductoService, CalcularService, LoginService],
})
export class AppModule {}
