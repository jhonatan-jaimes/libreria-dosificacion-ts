import Mortero from "./Mortero.ts";

class MaterialMortero {
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

  getDosificacion(): string {
    return this.dosificacion;
  }

  getOneMortero(): Mortero {
    return this.oneMortero;
  }

  getAllMortero(): Mortero {
    return this.allMortero;
  }
}

export default MaterialMortero;
