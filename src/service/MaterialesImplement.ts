import { Mortero, Concreto, Dosificacion } from "../models";
import { ElementoMortero, ElementoConcreto, Material } from "../models";
import { MaterialesService } from "./MaterialesService";
import { tablaMortero, tablaConcreto, Recurso, Area, Transform, Ladrillo, Block } from "../utils";

function getDosificacion(dosificacion: string, material: string): Dosificacion {
  if (material.toLowerCase() == Recurso.MORTERO) {
    const dosi = tablaMortero[dosificacion];
    dosi.setTipo(material);

    return dosi;
  } else if (material.toLowerCase() == Recurso.CONCRETO) {
    const dosi = tablaConcreto[dosificacion];
    dosi.setTipo(material);

    return dosi;
  } else {
    throw new Error("Dosificacion no encontrada " + dosificacion);
  }
}

function calcularDosificacion(material: Dosificacion, dosificacion: string, area: number, cantidad: number): Material {
  if (material instanceof Concreto) {
    const cemento = Math.round(((area * Transform.METROS_TO_MILIMETROS) *
      (material.getCemento() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;

    const arena = Math.round(((area * Transform.METROS_TO_MILIMETROS) *
      (material.getArena() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;

    const grava = Math.round(((area * Transform.METROS_TO_MILIMETROS) *
      (material.getGrava() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;

    const agua = Math.round(((area * Transform.METROS_TO_MILIMETROS) *
      (material.getAgua() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;

    return new ElementoConcreto(
      material.getTipo(),
      dosificacion,
      new Concreto(Area.UNIDAD, cemento, arena, grava, agua),
      new Concreto(
        Area.TOTAL,
        cemento * cantidad,
        arena * cantidad,
        grava * cantidad,
        agua * cantidad)
    );
  } else if (material instanceof Mortero) {
    const cemento = Math.round(((area * Transform.METROS_TO_MILIMETROS) *
      (material.getCemento() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;

    const arena = Math.round(((area * Transform.METROS_TO_MILIMETROS) *
      (material.getArena() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;

    const agua = Math.round(((area * Transform.METROS_TO_MILIMETROS) *
      (material.getAgua() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;

    return new ElementoMortero(
      material.getTipo(),
      dosificacion,
      new Mortero(Area.UNIDAD, cemento, arena, agua),
      new Mortero(
        Area.TOTAL,
        cemento * cantidad,
        arena * cantidad,
        agua * cantidad)
    );
  } else {
    throw new Error("Elemento no se puede calcular");
  }
}

function calcularMuro(medida: number, altura: number): number {
  const area = Math.round(((medida * Transform.METROS_TO_MILIMETROS) * (altura * Transform.METROS_TO_MILIMETROS) 
    / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;
  return area;
}

function calcularLadrillos(area: number, ladrillo: string): number {
  const name = ladrillo.toLowerCase();
  switch(name) {
    case Ladrillo.STANDAR : {
      return Math.round(((area * Transform.METROS2_TO_MILIMETROS2) / (Block.STANDAR * Transform.METROS2_TO_MILIMETROS2)) 
        * 100) / 100;
    }
    default : {
      throw new Error("Ladrillo no encontrado " + ladrillo);
    }
  }
}

export class MaterialesImplement implements MaterialesService {
  ladrillo(medida: number, altura: number, ladrillo: string): number {
    const area = calcularMuro(medida, altura);

    return calcularLadrillos(area, ladrillo);
  }
  mortero(area: number, dosificacion: string, cantidad: number): ElementoMortero {
    const dosi = getDosificacion(dosificacion, Recurso.MORTERO);

    return calcularDosificacion(dosi, dosificacion, area, cantidad) as ElementoMortero;
  }
  concreto(area: number, dosificacion: string, cantidad: number): ElementoConcreto {
    const dosi = getDosificacion(dosificacion, Recurso.CONCRETO);

    return calcularDosificacion(dosi, dosificacion, area, cantidad) as ElementoConcreto;
  }
}
