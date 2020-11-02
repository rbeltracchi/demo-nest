import { ProductoController } from './producto.controller';
import { Prod } from './entities/productos.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoService } from './producto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Prod])],
    providers: [ProductoService],
    exports: [ProductoService],
    controllers: [ProductoController]
})
export class ProductoModule {}
