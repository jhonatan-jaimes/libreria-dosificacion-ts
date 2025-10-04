import { ElementoConcreto, ElementoMortero } from "../models";

export interface MaterialesService {
  mortero(area: number, dosificacion: string, cantidad: number): ElementoMortero;
  concreto(area: number, dosificacion: string, cantidad: number): ElementoConcreto;
  ladrillo(muro: number, altura: number, ladrillos: number): number;
}
