import { Mortero, Concreto } from "../models";
import { ElementoMortero, ElementoConcreto } from "../models";
import { DosificacionService } from "./DosificacionService";

export class DosificacionImplem implements DosificacionService {
  calcularMortero(area: number, dosificacion: string): ElementoMortero {
    return new ElementoMortero(
      area.toString(),
      dosificacion,
      new Mortero("sa", 33, 33, 33),
      new Mortero("w4", 44, 44, 44)
    );
  }
  calcularConcreto(area: number, dosificacion: string): ElementoConcreto {
    return new ElementoConcreto(
      area.toString(),
      dosificacion,
      new Concreto("sa", 33, 33, 33, 33),
      new Concreto("w4", 44, 44, 44, 44)
    );
  }
}
