import { Material } from "../models";

export interface DosificacionService {
  calcularMaterial(
    area: number,
    dosificacion: string,
    material: string
  ): Material;
}
