import { Mortero, Concreto, Dosificacion } from "../models";
import { ElementoMortero, ElementoConcreto } from "../models";
import { DosificacionService } from "./DosificacionService";
import { tablaMortero, tablaConcreto } from "../utils";

export class DosificacionImplem implements DosificacionService {
  static getDosificacion(dosifi: string, material: string): Dosificacion {
    if (material.toLowerCase() === "mortero") {
      const dosi = tablaMortero[dosifi];
      dosi.setTipo(material);
      return dosi;
    } else if (material.toLowerCase() === "concreto") {
      const dosi = tablaConcreto[dosifi];
      dosi.setTipo(material);
      return dosi;
    } else {
      throw new Error("Dosificacion no encontrada " + dosifi);
    }
  }

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
