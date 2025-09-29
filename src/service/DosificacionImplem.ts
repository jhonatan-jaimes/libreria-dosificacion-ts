import { Concreto } from "../models";
import { MaterialConcreto } from "../models";
import { MaterialMortero } from "../models";
import { Mortero } from "../models";
import { DosificacionService } from "./DosificacionService";

export class DosificacionImplem implements DosificacionService {
  calcularMortero(area: number, dosificacion: string): MaterialMortero {
    return new MaterialMortero(
      area.toString(),
      dosificacion,
      new Mortero("sa", 33, 33, 33),
      new Mortero("w4", 44, 44, 44)
    );
  }
  calcularConcreto(area: number, dosificacion: string): MaterialConcreto {
    return new MaterialConcreto(
      area.toString(),
      dosificacion,
      new Concreto("sa", 33, 33, 33, 33),
      new Concreto("w4", 44, 44, 44, 44)
    );
  }
}
