import { Mortero, Concreto, Dosificacion } from "../models";
import { ElementoMortero, ElementoConcreto, Material } from "../models";
import { MaterialesService } from "./MaterialesService";
import { tablaMortero, tablaConcreto } from "../utils";
import { Constantes } from "../utils";

function getDosificacion(dosificacion: string, material: string): Dosificacion {
  if (material.toLowerCase() == "mortero") {
    const dosi = tablaMortero[dosificacion];
    dosi.setTipo(material);

    return dosi;
  } else if (material.toLowerCase() == "concreto") {
    const dosi = tablaConcreto[dosificacion];
    dosi.setTipo(material);

    return dosi;
  } else {
    throw new Error("Dosificacion no encontrada " + dosificacion);
  }
}

// las cosass no pueden ser igual a antes

function calcularDosificacion(material: Dosificacion, dosificacion: string, area: number, cantidad: number): Material {
  if (material instanceof Concreto) {
    const cemento = area * material.getCemento();
    const arena = area * material.getArena();
    const grava = area * material.getGrava();
    const agua = area * material.getAgua();

    return new ElementoConcreto(
      material.getTipo(),
      dosificacion,
      new Concreto("unidad", cemento, arena, grava, agua),
      new Concreto(
        "total",
        cemento * cantidad,
        arena * cantidad,
        grava * cantidad,
        agua * cantidad)
    );
  } else if (material instanceof Mortero) {
    const cemento = area * material.getCemento();
    const arena = area * material.getArena();
    const agua = area * material.getAgua();

    return new ElementoMortero(
      material.getTipo(),
      dosificacion,
      new Mortero("unidad", cemento, arena, agua),
      new Mortero(
        "total",
        cemento * cantidad,
        arena * cantidad,
        agua * cantidad)
    );
  } else {
    throw new Error("Elemento no se puede calcular");
  }
}

export class MaterialesImplement implements MaterialesService {
  ladrillo(medida: number, altura: number, ladrillos: number): number {
    throw new Error("Method not implemented.");
  }
  mortero(area: number, dosificacion: string, cantidad: number): ElementoMortero {
    const dosi = getDosificacion(dosificacion, Constantes.MORTERO);

    return calcularDosificacion(dosi, dosificacion, area, cantidad) as ElementoMortero;
  }
  concreto(area: number, dosificacion: string, cantidad: number): ElementoConcreto {
    const dosi = getDosificacion(dosificacion, Constantes.CONCRETO);

    return calcularDosificacion(dosi, dosificacion, area, cantidad) as ElementoConcreto;
  }
}
