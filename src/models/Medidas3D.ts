import { Medidas2D } from "../models/Medidas2D";


export class Medidas3D extends Medidas2D {
  private alto: number;

  constructor(largo: number, ancho: number, alto: number) {
    super(largo, ancho);
    this.alto = alto;
  }

  getAlto(): number {
    return this.alto;
  }

  setAlto(alto: number): void {
    this.alto = alto;
  }
}
