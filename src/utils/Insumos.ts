export interface Dosificacion {}

export class Mortero implements Dosificacion {
  private tipo: string;
  private cemento: number;
  private arena: number;
  private agua: number;

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

  setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  setCemento(cemento: number): void {
    this.cemento = cemento;
  }

  setArena(arena: number): void {
    this.arena = arena;
  }

  setAgua(agua: number): void {
    this.agua = agua;
  }
}

export class Concreto extends Mortero {
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
