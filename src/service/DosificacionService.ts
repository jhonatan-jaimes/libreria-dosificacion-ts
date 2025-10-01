import { ElementoConcreto, ElementoMortero } from "../models";

export interface DosificacionService {
  mortero(area: number, dosificacion: string): ElementoMortero;
  concreto(area: number, dosificacion: string): ElementoConcreto;
}
