import Concreto from "./Concreto.ts";

class MaterialConcreto {
  material: string;
  dosificacion: string;
  oneConcreto: Concreto;
  allConcreto: Concreto;

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

  getDosificacion(): string {
    return this.dosificacion;
  }

  getOneConcreto(): Concreto {
    return this.oneConcreto;
  }

  getAllConcreto(): Concreto {
    return this.allConcreto;
  }
}

export default MaterialConcreto;
