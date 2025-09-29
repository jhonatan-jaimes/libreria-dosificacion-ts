import Mortero from "./Mortero";

class Concreto extends Mortero {
  private grava: number;

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

  setGrava(grava: number): void {
    this.grava = grava;
  }
}

export default Concreto;
