import { Areas } from "./Areas";
import { Elemento3D } from "./Elemento3D";

export class Elemento {
    private tipo: string;
    private cantidad: number;
    private area: Areas;

    constructor(tipo: string, cantidad: number, area: Areas) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.area = area;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }

    public getArea(): Areas {
        return this.area;
    }

    public setArea(area: Areas): void {
        this.area = area;
    }
}
