import { Mortero, Concreto } from "../utils";
import { Medidas2D, Medidas3D } from "../utils";

export interface Material {}

export class ElementoMortero implements Material {
  material: string;
  dosificacion: string;
  oneMortero: Mortero;
  allMortero: Mortero;

  constructor(
    material: string,
    dosificacion: string,
    oneMortero: Mortero,
    allMortero: Mortero
  ) {
    this.material = material;
    this.dosificacion = dosificacion;
    this.oneMortero = oneMortero;
    this.allMortero = allMortero;
  }

  getMaterial(): string {
    return this.material;
  }

  setMaterial(material: string): void {
    this.material = material;
  }

  getDosificacion(): string {
    return this.dosificacion;
  }

  setDosificacion(dosificacion: string): void {
    this.dosificacion = dosificacion;
  }

  getOneMortero(): Mortero {
    return this.oneMortero;
  }

  setOneMortero(oneMortero: Mortero): void {
    this.oneMortero = oneMortero;
  }

  getAllMortero(): Mortero {
    return this.allMortero;
  }

  setAllMortero(allMortero: Mortero): void {
    this.allMortero = allMortero;
  }
}

export class ElementoConcreto implements Material {
  private material: string;
  private dosificacion: string;
  private oneConcreto: Concreto;
  private allConcreto: Concreto;

  constructor(material: string, dosificacion: string, oneConcreto: Concreto, allConcreto: Concreto
  ) {
    this.material = material;
    this.dosificacion = dosificacion;
    this.oneConcreto = oneConcreto;
    this.allConcreto = allConcreto;
  }

  getMaterial(): string {
    return this.material;
  }

  setMaterial(material: string): void {
    this.material = material;
  }

  getDosificacion(): string {
    return this.dosificacion;
  }

  setDosificacion(dosificacion: string): void {
    this.dosificacion = dosificacion;
  }

  getOneConcreto(): Concreto {
    return this.oneConcreto;
  }

  setOneConcreto(oneConcreto: Concreto): void {
    this.oneConcreto = oneConcreto;
  }

  getAllConcreto(): Concreto {
    return this.allConcreto;
  }

  setAllConcreto(allConcreto: Concreto): void {
    this.allConcreto = allConcreto;
  }
}

export class Ladrillo extends Medidas3D {
  private nombre: string;
  private cantidad: number;

  constructor(largo: number, ancho: number, alto: number, nombre: string, cantidad: number) {
    super(largo, ancho, alto);
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getCantidad(): number {
    return this.cantidad;
  }

  setCantidad(cantidad: number): void {
    this.cantidad = cantidad;
  }
}
