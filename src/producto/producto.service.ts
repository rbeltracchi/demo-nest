import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Producto } from './Producto';



@Injectable()
export class ProductoService {
    private listaProductos: Producto[];

    private loadProductos(): void {
        let archivo = fs.readFileSync('resources/productos.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto(elementos[i][0],
                parseInt(elementos[i][1]));
            this.listaProductos.push(producto);
        }
    }

    public getProductos(): Producto[] {
        this.loadProductos();
        return this.listaProductos;
    }

    public getProducto(index: number): Producto {
        this.loadProductos(); 
        console.log(this.listaProductos); 
        // Más adelante agregar manejo de status code
        if (index < 0 || index >= this.listaProductos.length)
            return null;
        return this.listaProductos[index];
    }

    public create(prod: any): string {
        console.log(prod);
        const producto = new Producto(prod.nombreProducto, prod.precio);

        if (producto.getNombreProducto() && producto.getPrecio()) {
            fs.appendFileSync('resources/productos.csv',
            `\n${producto.getNombreProducto()},${producto.getPrecio()}`);

            return "ok";
        } else {
            return "parametros incorrectos";
        }
    }

    public deleteProducto(index: number): boolean {
        let borrado = this.listaProductos.splice(index,1); []
        return borrado.length == 1;
    }

    //TAREA
    private actualizarArchivo(){
        //writeFile de this.listaProductos
    }
}
