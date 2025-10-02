import { Mortero, Concreto, Dosificacion } from "../models";
import { ElementoMortero, ElementoConcreto, Material } from "../models";
import { MaterialesService } from "./MaterialesService";
import { tablaMortero, tablaConcreto } from "../utils";

function getDosificacion(dosifi: string, material: string): Dosificacion {
  if (material.toLowerCase() == "mortero") {
    const dosi = tablaMortero[dosifi];
    dosi.setTipo(material);

    return dosi;
  } else if (material.toLowerCase() == "concreto") {
    const dosi = tablaConcreto[dosifi];
    dosi.setTipo(material);

    return dosi;
  } else {
    throw new Error("Dosificacion no encontrada " + dosifi);
  }
}

// las cosass no pueden ser igual a antes

function calcularDosificacion(dosi: Dosificacion, area: number): Material {
  if (dosi instanceof Concreto) {
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
  } else if (dosi instanceof Mortero) {
    const cemento = area * dosi.getCemento();
    const arena = area * dosi.getArena();
    const agua = area * dosi.getAgua();

    return new ElementoMortero(
      dosi.getTipo(),
      dosi.getTipo(),
      new Mortero(dosi.getTipo(), cemento, arena, agua),
      new Mortero(dosi.getTipo(), cemento, arena, agua)
    );
  } else {
    throw new Error("Elemento no se puede calcular");
  }
}

export class MaterialesImplement implements MaterialesService {
  ladrillo(muro: number, altura: number, ladrillos: number): number {
    throw new Error("Method not implemented.");
  }
  mortero(area: number, dosificacion: string): ElementoMortero {
    const dosi = getDosificacion(dosificacion, "mortero");

    return calcularDosificacion(dosi, area) as ElementoMortero;
  }
  concreto(area: number, dosificacion: string): ElementoConcreto {
    const dosi = getDosificacion(dosificacion, "concreto");

    return calcularDosificacion(dosi, area) as ElementoConcreto;
  }
}
