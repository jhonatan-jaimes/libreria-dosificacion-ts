export class Medidas2D {
  private largo: number;
  private ancho: number;

  constructor(largo: number, ancho: number) {
    this.largo = largo;
    this.ancho = ancho;
  }

  getLargo(): number {
    return this.largo;
  }

  setLargo(largo: number): void {
    this.largo = largo;
  }

  getAncho(): number {
    return this.ancho;
  }

  setAncho(ancho: number): void {
    this.ancho = ancho;
  }
}

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
