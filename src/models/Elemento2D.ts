import { Medidas2D } from "../utils";
import { Elemento } from "./Elemento";
import { Areas } from "./Areas";


export class Elemento2D extends Elemento {
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
