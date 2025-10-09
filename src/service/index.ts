import { InsumoService } from "./InsumoService";
import { InsumoImplement } from "./InsumoImplement";
import { ElementoService } from "./ElementoService";
import { ElementoImplement } from "./ElementoImplement";

export const elemento: ElementoService = new ElementoImplement();

export const material: InsumoService = new InsumoImplement();

