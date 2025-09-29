class Mortero {
  tipo: string;
  cemento: number;
  arena: number;
  agua: number;

  constructor(tipo: string, cemento: number, arena: number, agua: number) {
    this.tipo = tipo;
    this.cemento = cemento;
    this.arena = arena;
    this.agua = agua;
  }

  getTipo(): string {
    return this.tipo;
  }

  getCemento(): number {
    return this.cemento;
  }

  getArena(): number {
    return this.arena;
  }

  getAgua(): number {
    return this.agua;
  }
}

export default Mortero;
