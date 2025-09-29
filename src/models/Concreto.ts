import Mortero from "./Mortero.ts";

class Concreto extends Mortero {
  grava: number;

  constructor(
    tipo: string,
    cemento: number,
    arena: number,
    grava: number,
    agua: number
  ) {
    super(tipo, cemento, arena, agua);
    this.grava = grava;
  }

  getGrava(): number {
    return this.grava;
  }
}

export default Concreto;
