import { Mortero } from "./Mortero";

export class MaterialMortero {
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
