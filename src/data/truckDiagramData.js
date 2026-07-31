export const ESTADOS = {
    BIEN: "BIEN",
    OBSERVACION: "OBSERVACION",
    DANADA: "DANADA"
};

export const INCIDENCIAS = [
    { id: "BAJA_PRESION", nombre: "Baja presión" },
    { id: "PONCHADA", nombre: "Ponchada" },
    { id: "PARCHE_VISIBLE", nombre: "Parche visible" },
    { id: "DESGASTE_IRREGULAR", nombre: "Desgaste irregular" },
    { id: "DESGASTE_EXCESIVO", nombre: "Desgaste excesivo" },
    { id: "GRIETAS", nombre: "Grietas" },
    { id: "CORTE_LATERAL", nombre: "Corte lateral" },
    { id: "VALVULA_DANADA", nombre: "Válvula dañada" },
    { id: "RIN_DANADO", nombre: "Rin dañado" },
    { id: "LLANTA_RECAPADA", nombre: "Llanta recapada" },
    { id: "OTRO", nombre: "Otro" }
];

export const LLANTAS_SENCILLO = [

    // Cabina
    { id:"R1", numero:2, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:78, y:63 },
    { id:"R2", numero:1, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:74, y:171 },

    // Tracto - columna izquierda
    { id:"R3", numero:6, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:217, y:63 },
    { id:"R5", numero:5, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:217, y:84 },
    { id:"R7", numero:4, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:217, y:145 },
    { id:"R9", numero:3, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:217, y:166 },

    // Tracto - columna derecha
    { id:"R4", numero:10, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:271, y:63 },
    { id:"R6", numero:9, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:271, y:84 },
    { id:"R8", numero:8, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:271, y:145 },
    { id:"R10", numero:7, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:271, y:166 },

    // Remolque - columna izquierda
    { id:"R11", numero:14, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:538, y:63 },
    { id:"R13", numero:13, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:538, y:84 },
    { id:"R15", numero:12, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:538, y:145 },
    { id:"R17", numero:11, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:538, y:166 },

    // Remolque - columna derecha
    { id:"R12", numero:18, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:592, y:63 },
    { id:"R14", numero:17, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:592, y:84 },
    { id:"R16", numero:16, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:592, y:145 },
    { id:"R18", numero:15, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:592, y:166 }

];

export const LLANTAS_FULL = [

    { id:"R1", numero:1, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:605, y:78 },
    { id:"R2", numero:2, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:645, y:78 },

    { id:"R3", numero:3, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:605, y:196 },
    { id:"R4", numero:4, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:645, y:196 },

    { id:"R5", numero:5, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:685, y:78 },
    { id:"R6", numero:6, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:725, y:78 },

    { id:"R7", numero:7, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:685, y:196 },
    { id:"R8", numero:8, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:725, y:196 },

    { id:"R9", numero:9, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:765, y:78 },
    { id:"R10", numero:10, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:805, y:78 },

    { id:"R11", numero:11, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:765, y:196 },
    { id:"R12", numero:12, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:805, y:196 },

    { id:"R13", numero:13, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:845, y:78 },
    { id:"R14", numero:14, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:885, y:78 },

    { id:"R15", numero:15, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:845, y:196 },
    { id:"R16", numero:16, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:885, y:196 }

];