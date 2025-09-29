import Concreto from "../models/Concreto";
import MaterialConcreto from "../models/MaterialConcreto";
import MaterialMortero from "../models/MaterialMortero";
import Mortero from "../models/Mortero";
import DosificacionService from "./DosificacionService";

class DosificacionImplem implements DosificacionService {
  calcularMortero(area: number, dosificacion: string): MaterialMortero {
    return new MaterialMortero(
      area.toString(),
      dosificacion,
      new Mortero("sa", 33, 33, 33),
      new Mortero("w4", 44, 44, 44)
    );
  }
  calcularConcreto(area: number, dosificacion: string): MaterialConcreto {
    return new MaterialConcreto(
      area.toString(),
      dosificacion,
      new Concreto("sa", 33, 33, 33, 33),
      new Concreto("w4", 44, 44, 44, 44)
    );
  }
}

export default DosificacionImplem;
