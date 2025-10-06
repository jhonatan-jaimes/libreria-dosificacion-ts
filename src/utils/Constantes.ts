export enum Recurso {
    CONCRETO = "concreto",
    MORTERO = "mortero",
    LADRILLO = "ladrillo"
}

export enum Area {
    UNIDAD = "unidad",
    TOTAL = "total"
}

export enum Transform {
    MILIMETROS_TO_METROS = 1000,
    METROS_TO_MILIMETROS = MILIMETROS_TO_METROS,
    MILIMETROS2_TO_METROS2 = 1000000,
    METROS2_TO_MILIMETROS2 = MILIMETROS2_TO_METROS2,
    MILIMETROS3_TO_METROS3 = 1000000000,
    METROS3_TO_MILIMETROS3 = MILIMETROS3_TO_METROS3
}

export enum Ladrillo {
    STANDAR = "standar",
    GALLETA = "galleta",
    BLOCK_CONCRETO = "block concreto"
}

export enum Block {
    STANDAR = 0.01,
    GALLETA = 0.06,
    BLOCK_CONCRETO = 0.06
}
