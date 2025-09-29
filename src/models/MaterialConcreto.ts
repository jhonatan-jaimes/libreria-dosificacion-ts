import { Concreto } from "./Concreto";

export class MaterialConcreto {
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
