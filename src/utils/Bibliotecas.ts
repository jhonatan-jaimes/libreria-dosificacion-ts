import { Mortero, Concreto } from "../models";

export const tablaConcreto: Record<string, Concreto> = {
  "1:2:2": new Concreto("", 420, 0.67, 0.67, 190),
  "1:2:2.5": new Concreto("", 380, 0.6, 0.76, 180),
  "1:2:3": new Concreto("", 350, 0.55, 0.84, 170),
  "1:2:3.5": new Concreto("", 320, 0.52, 0.9, 170),
  "1:2:4": new Concreto("", 300, 0.48, 0.95, 158),
  "1:2:4.5": new Concreto("", 280, 0.55, 0.89, 158),
  "1:3:3": new Concreto("", 300, 0.72, 0.72, 158),
  "1:3:4": new Concreto("", 260, 0.63, 0.83, 163),
  "1:3:5": new Concreto("", 230, 0.55, 0.92, 148),
  "1:3:6": new Concreto("", 210, 0.5, 1.0, 143),
  "1:4:7": new Concreto("", 175, 0.55, 0.98, 133),
  "1:4:8": new Concreto("", 160, 0.55, 1.03, 125),
};

export const tablaMortero: Record<string, Mortero> = {
  "1:2": new Mortero("", 525, 0.97, 230),
  "1:3": new Mortero("", 450, 1.1, 210),
  "1:4": new Mortero("", 375, 1.16, 200),
  "1:5": new Mortero("", 300, 1.18, 180),
  "1:6": new Mortero("", 275, 1.2, 180),
};
