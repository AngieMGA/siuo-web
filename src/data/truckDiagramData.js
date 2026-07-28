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

export const LLANTAS_REM1 = [

    // Cabina
    { id:"R1", numero:2, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:76, y:76 },
    { id:"R2", numero:1, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:68, y:178 },

    // Tracto
    { id:"R3", numero:6, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:170, y:78 },
    { id:"R4", numero:10, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:210, y:78 },

    { id:"R5", numero:5, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:170, y:196 },
    { id:"R6", numero:9, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:210, y:196 },

    { id:"R7", numero:4, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:250, y:78 },
    { id:"R8", numero:8, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:290, y:78 },

    { id:"R9", numero:3, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:250, y:196 },
    { id:"R10", numero:7, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:290, y:196 },

    // Remolque
    { id:"R11", numero:14, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:605, y:78 },
    { id:"R12", numero:18, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:645, y:78 },

    { id:"R13", numero:13, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:605, y:196 },
    { id:"R14", numero:17, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:645, y:196 },

    { id:"R15", numero:12, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:685, y:78 },
    { id:"R16", numero:16, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:725, y:78 },

    { id:"R17", numero:11, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:685, y:196 },
    { id:"R18", numero:15, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:725, y:196 }

];

export const LLANTAS_REM2 = [

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