import { Elemento3D, Elemento2D } from "../models";
import { Medidas3D, Medidas2D } from "../utils";

export interface ElementoService {
    elemento3D(nombre: string, cantidad: number, largo?: number, ancho?: number, alto?: number, medidas?: Medidas3D): Elemento3D;
    elemento2D(nombre: string, cantidad: number, largo?: number, ancho?: number, medidas?: Medidas2D): Elemento2D;
}