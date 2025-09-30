import { Mortero, Concreto, Dosificacion } from "../models";
import { ElementoMortero, ElementoConcreto, Material } from "../models";
import { DosificacionService } from "./DosificacionService";
import { tablaMortero, tablaConcreto } from "../utils";

const getDosificacion = (dosifi: string, material: string): Dosificacion => {
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
};

const calcularDosificacion = (dosi: Dosificacion, area: number): Material => {
  if (dosi instanceof Mortero) {
    const cemento = area * dosi.getCemento();
    const arena = area * dosi.getArena();
    const agua = area * dosi.getAgua();
    return new ElementoMortero(
      dosi.getTipo(),
      dosi.getTipo(),
      new Mortero(dosi.getTipo(), cemento, arena, agua),
      new Mortero(dosi.getTipo(), cemento, arena, agua)
    );
  } else if (dosi instanceof Concreto) {
    const cemento = area * dosi.getCemento();
    const arena = area * dosi.getArena();
    const grava = area * dosi.getGrava();
    const agua = area * dosi.getAgua();
    return new ElementoConcreto(
      dosi.getTipo(),
      dosi.getTipo(),
      new Concreto(dosi.getTipo(), cemento, arena, grava, agua),
      new Concreto(dosi.getTipo(), cemento, arena, grava, agua)
    );
  } else {
    throw new Error("Elemento no se puede calcular");
  }
};

export class DosificacionImplem implements DosificacionService {
  calcularMaterial(
    area: number,
    dosificacion: string,
    material: string
  ): Material {
    const dosi = getDosificacion(dosificacion, material);
    return calcularDosificacion(dosi, area);
  }
}
