import { Medidas2D, Medidas3D } from "../utils";

export class Areas {
    private areaOne: number;
    private areaAll: number;

    constructor(areaOne: number, areaAll: number) {
        this.areaOne = areaOne;
        this.areaAll = areaAll;
    }

    public getAreaOne(): number {
        return this.areaOne;
    }
    public setAreaOne(areaOne: number): void {
        this.areaOne = areaOne;
    }

    public getAreaAll(): number {
        return this.areaAll;
    }

    public setAreaAll(areaAll: number): void {
        this.areaAll = areaAll;
    }
}

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

export class Elemento3D extends Elemento {
    private medidas: Medidas3D;

    constructor(tipo: string, cantidad: number, medidas: Medidas3D, area: Areas) {
        super(tipo, cantidad, area);
        this.medidas = medidas;
    }

    public getMedidas(): Medidas3D {
        return this.medidas;
    }

    public setMedidas(medidas: Medidas3D): void {
        this.medidas = medidas;
    }
}

export class Elemento2D extends Elemento{
    private medidas: Medidas2D;

    constructor(tipo: string, cantidad: number, medidas: Medidas2D, area: Areas) {
        super(tipo, cantidad, area);
        this.medidas = medidas;
    }

    public getMedidas(): Medidas2D {
        return this.medidas;
    }

    public setMedidas(medidas: Medidas2D): void {
        this.medidas = medidas;
    }
}

export class Piso extends Elemento2D {}

export class Columna extends Elemento3D {}

export class Viga extends Elemento3D {}