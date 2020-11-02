import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("productos")
export class Prod{
    @PrimaryGeneratedColumn()
    private idproductos: number;

    @Column('nombre_producto')
    private nombreProducto: string;

    @Column()
    private precio: number;

    constructor(id, nombre,precio){
        this.idproductos = id;
        this.nombreProducto = nombre;
        this.precio= precio;
    }
}