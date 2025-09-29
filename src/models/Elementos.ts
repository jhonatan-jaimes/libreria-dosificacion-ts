import { Mortero, Concreto } from "./Materiales";

export class ElementoMortero {
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

export class ElementoConcreto {
  private material: string;
  private dosificacion: string;
  private oneConcreto: Concreto;
  private allConcreto: Concreto;

  constructor(
    material: string,
    dosificacion: string,
    oneConcreto: Concreto,
    allConcreto: Concreto
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
