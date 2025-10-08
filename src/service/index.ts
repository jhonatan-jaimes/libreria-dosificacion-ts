import { MaterialesService } from "./InsumoService";
import { MaterialesImplement } from "./InsumoImplement";
import { ElementoService } from "./ElementoService";
import { ElementoImplement } from "./ElementoImplement";

export const elemento: ElementoService = new ElementoImplement();

export const material: MaterialesService = new MaterialesImplement();
