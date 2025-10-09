import { Elemento3D, Elemento2D, Areas } from "../models";
import { Medidas2D, Medidas3D } from "../utils";
import { ElementoService } from "./ElementoService";
import { Transform } from "../utils";

function areaOne(medidas: any): number {
    if(medidas !instanceof Medidas2D || medidas !instanceof Medidas3D){
        throw new Error("Clase medidas no autorizado");
    }

    if(medidas instanceof Medidas3D){

        return Math.round(((medidas.getLargo() * Transform.METROS_TO_MILIMETROS) *
            (medidas.getAncho() * Transform.METROS_TO_MILIMETROS) * (medidas.getAlto() * Transform.METROS_TO_MILIMETROS) / 
            Transform.MILIMETROS3_TO_METROS3) * 100) / 100;

    } else if (medidas instanceof Medidas2D) {

        return Math.round(((medidas.getLargo() * Transform.METROS_TO_MILIMETROS) *
            (medidas.getAncho() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 100) / 100;

    }
  throw new Error("No se puede calcular el area unidad");
}

function areaAll(medidas: any, cantidad: number): number {
    if(medidas !instanceof Medidas2D || medidas !instanceof Medidas3D){
        throw new Error("Clase medidas no autorizado");
    }

    if(cantidad === null){
        throw new Error("Cantidad requerida");
    }

    if(medidas instanceof Medidas3D){

        return Math.round((((medidas.getLargo() * Transform.METROS_TO_MILIMETROS) *
        (medidas.getAncho() * Transform.METROS_TO_MILIMETROS) * (medidas.getAlto() * Transform.METROS_TO_MILIMETROS) /
        Transform.MILIMETROS3_TO_METROS3) * cantidad) * 100) / 100;

    } else if (medidas instanceof Medidas2D) {

        return Math.round((((medidas.getLargo() * Transform.METROS_TO_MILIMETROS) *
        (medidas.getAncho() * Transform.METROS_TO_MILIMETROS) / Transform.MILIMETROS2_TO_METROS2) * 
        cantidad) * 100) / 100;

    }

    throw new Error("No se puede calcular el area unidad");
}

function areas(medidas: any, cantidad: number): Areas {
    if (medidas instanceof Medidas3D) {
        return new Areas(
            areaOne(medidas),
            areaAll(medidas, cantidad)
        );
    } else if (medidas instanceof Medidas2D) {
        return new Areas(
            areaOne(medidas),
            areaAll(medidas, cantidad)
        );
    } else {
        throw new Error("Tipo de medidas no soportado");
    }
}

export class ElementoImplement implements ElementoService {
    elemento2D(nombre: string, cantidad: number, largo?: number, ancho?: number, medidas?: Medidas2D): Elemento2D {
        if (medidas === null || medidas === undefined) {
            if (largo === null || largo === undefined || ancho === null || ancho === undefined) {
                throw new Error("Faltan medidas para crear el elemento 2D");
            } else {
                medidas = new Medidas2D(largo, ancho);
            }
        }
        return new Elemento2D(nombre, cantidad, medidas, areas(medidas, cantidad));
    }
    elemento3D(nombre: string, cantidad: number, largo?: number, ancho?: number, alto?: number, medidas?: Medidas3D): Elemento3D {
        if (medidas === null || medidas === undefined) {
            if (largo === null || largo === undefined || ancho === null || ancho === undefined || 
                alto === null || alto === undefined) {
                throw new Error("Faltan medidas para crear el elemento 3D");
            } else {
                medidas = new Medidas3D(largo, ancho, alto);
            }
        }
        return new Elemento3D(nombre, cantidad, medidas, areas(medidas, cantidad));
    }
}