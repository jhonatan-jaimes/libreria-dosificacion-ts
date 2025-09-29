import { ElementoMortero, ElementoConcreto } from "../models";

export interface DosificacionService {
  calcularMortero(area: number, dosificacion: string): ElementoMortero;
  calcularConcreto(area: number, dosificacion: string): ElementoConcreto;
}
