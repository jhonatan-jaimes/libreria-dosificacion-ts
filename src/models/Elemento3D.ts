import { Medidas3D } from "../utils";
import { Elemento } from "./Elemento";
import { Areas } from "./Areas";


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
