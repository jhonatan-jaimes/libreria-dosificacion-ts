import MaterialConcreto from "../models/MaterialConcreto";
import MaterialMortero from "../models/MaterialMortero";

interface DosificacionService {
  calcularMortero(area: number, dosificacion: string): MaterialMortero;
  calcularConcreto(area: number, dosificacion: string): MaterialConcreto;
}

export default DosificacionService;
