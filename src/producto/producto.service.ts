import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

let texto: string = fs.readFileSync('/home/juan.lastra/CFL/demo-nest/abc.txt', 'utf8');

let palabras: string [] = texto.split('\n');
let textoFinal = [];
for(let i = 0; i < palabras.length; i++){
    textoFinal[i] = palabras[i].split(','); 
} 

console.log(textoFinal);

@Injectable()
export class ProductoService {
    public getProducto(): any {
        let productos = [];
        for (let i = 0; i < textoFinal.length; i++) {
            let producto = {
                'producto': textoFinal[i][0],
                'precio': textoFinal[i][1],
                'descripcion': textoFinal[i][2]
            };
            productos.push(producto);
        }
        return productos;
    }    
}
