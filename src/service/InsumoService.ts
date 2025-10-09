import { ElementoConcreto, ElementoMortero } from "../models";

export interface InsumoService {
  mortero(area: number, dosificacion: string, cantidad: number): ElementoMortero;
  concreto(area: number, dosificacion: string, cantidad: number): ElementoConcreto;
  ladrillo(medida: number, altura: number, ladrillo: string): number;
}
