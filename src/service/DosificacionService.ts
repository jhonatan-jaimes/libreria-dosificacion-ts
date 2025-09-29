import { MaterialConcreto } from "../models";
import { MaterialMortero } from "../models";

export interface DosificacionService {
  calcularMortero(area: number, dosificacion: string): MaterialMortero;
  calcularConcreto(area: number, dosificacion: string): MaterialConcreto;
}
