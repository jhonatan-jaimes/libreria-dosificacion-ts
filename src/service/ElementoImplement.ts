import { Elemento3D, Elemento2D, Areas } from "../models";
import { Medidas2D, Medidas3D } from "../models";
import { ElementoService } from "./ElementoService";
import { Transform } from "../utils";

function areaOne(medidas: any): number {
    if (medidas instanceof Medidas3D) {
        return Math.round(
            ((medidas.getLargo() * Transform.METROS_TO_MILIMETROS) *
            (medidas.getAncho() * Transform.METROS_TO_MILIMETROS) *
            (medidas.getAlto() * Transform.METROS_TO_MILIMETROS) /
            Transform.MILIMETROS3_TO_METROS3) * 100) / 100;
    } else if (medidas instanceof Medidas2D) {
        return Math.round(
            ((medidas.getLargo() * Transform.METROS_TO_MILIMETROS) *
            (medidas.getAncho() * Transform.METROS_TO_MILIMETROS) /
            Transform.MILIMETROS2_TO_METROS2) * 100) / 100;
    }
    throw new Error("No se puede calcular el área de las medidas proporcionadas");
}

function areaAll(medidas: any, cantidad: number): number {
    if (cantidad === null || cantidad === undefined) {
        throw new Error("Cantidad requerida");
    }

    if (medidas instanceof Medidas3D) {
        return Math.round(
            (((medidas.getLargo() * Transform.METROS_TO_MILIMETROS) *
            (medidas.getAncho() * Transform.METROS_TO_MILIMETROS) *
            (medidas.getAlto() * Transform.METROS_TO_MILIMETROS) /
            Transform.MILIMETROS3_TO_METROS3) * cantidad) * 100) / 100;
    } else if (medidas instanceof Medidas2D) {
        return Math.round(
            (((medidas.getLargo() * Transform.METROS_TO_MILIMETROS) *
            (medidas.getAncho() * Transform.METROS_TO_MILIMETROS) /
            Transform.MILIMETROS2_TO_METROS2) * cantidad) * 100) / 100;
    }

    throw new Error("No se puede calcular el área de las medidas proporcionadas");
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
    // Sobrecarga para elemento3D
    elemento3D(nombre: string, cantidad: number, largo: number, ancho: number, alto: number): Elemento3D;
    elemento3D(nombre: string, cantidad: number, medidas: Medidas3D): Elemento3D;
    elemento3D(nombre: string, cantidad: number, largoOrMedidas?: number | Medidas3D, ancho?: number, alto?: number): Elemento3D {
        
        let medidas: Medidas3D;

        if (largoOrMedidas instanceof Medidas3D) {
            // Caso: Se pasa un objeto Medidas3D
            medidas = largoOrMedidas;
        } else if (largoOrMedidas !== undefined && ancho !== undefined && alto !== undefined) {
            // Caso: Se pasan largo, ancho y alto
            medidas = new Medidas3D(largoOrMedidas, ancho, alto);
        } else {
            throw new Error("Faltan medidas para crear el elemento 3D");
        }

        return new Elemento3D(nombre, cantidad, medidas, areas(medidas, cantidad));
    }

    // Sobrecarga para elemento2D
    elemento2D(nombre: string, cantidad: number, largo: number, ancho: number): Elemento2D;
    elemento2D(nombre: string, cantidad: number, medidas: Medidas2D): Elemento2D;

    /**
     * 
     * @param nombre            Debe colocarce el nombre que tipo de elemento es
     * @param cantidad          cantidad de elementos
     * @param largoOrMedidas    Si no tieme las medidas creadas tiene que enviar el largo
     * @param ancho             y el ancho
     * @returns                 y se devolvera el elemento con el area calculada
     */
    elemento2D(nombre: string, cantidad: number, largoOrMedidas?: number | Medidas2D, ancho?: number): Elemento2D {

        let medidas: Medidas2D;

        if (largoOrMedidas instanceof Medidas2D) {
            // Caso: Se pasa un objeto Medidas2D
            medidas = largoOrMedidas;
        } else if (largoOrMedidas !== undefined && ancho !== undefined) {
            // Caso: Se pasan largo y ancho
            medidas = new Medidas2D(largoOrMedidas, ancho);
        } else {
            throw new Error("Faltan medidas para crear el elemento 2D");
        }

        return new Elemento2D(nombre, cantidad, medidas, areas(medidas, cantidad));
    }
}
