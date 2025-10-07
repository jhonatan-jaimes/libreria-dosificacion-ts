import { Medidas3D } from "../utils";

export class Elemento {
    private tipo: string;
    private cantidad: number;

    constructor(tipo: string, cantidad: number) {
        this.tipo = tipo;
        this.cantidad = cantidad;
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
}

export class Columna extends Elemento {
    private medidas: Medidas3D;

    constructor(tipo: string, cantidad: number, medidas: Medidas3D) {
        super(tipo, cantidad);
        this.medidas = medidas;
    }

    public getMedidas(): Medidas3D {
        return this.medidas;
    }

    public setMedidas(medidas: Medidas3D): void {
        this.medidas = medidas;
    }

}

export class Viga extends Elemento {
    private medidas: Medidas3D;

    constructor(tipo: string, cantidad: number, medidas: Medidas3D) {
        super(tipo, cantidad);
        this.medidas = medidas;
    }

    public getMedidas(): Medidas3D {
        return this.medidas;
    }

    public setMedidas(medidas: Medidas3D): void {
        this.medidas = medidas;
    }
}