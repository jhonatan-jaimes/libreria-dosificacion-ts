import { ElementoConcreto, ElementoMortero } from "../models";

export interface MaterialesService {
  mortero(area: number, dosificacion: string): ElementoMortero;
  concreto(area: number, dosificacion: string): ElementoConcreto;
  ladrillo(muro: number, altura: number, ladrillos: number): number;
}
