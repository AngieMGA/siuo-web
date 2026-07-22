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

export const LLANTAS = [

    // REMOLQUE 1
    { id:"R1_1", grupo:"REM1", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:260, y:145 },
    { id:"R1_2", grupo:"REM1", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:300, y:145 },
    { id:"R1_3", grupo:"REM1", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:260, y:245 },
    { id:"R1_4", grupo:"REM1", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:300, y:245 },

    { id:"R1_5", grupo:"REM1", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:690, y:145 },
    { id:"R1_6", grupo:"REM1", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:730, y:145 },
    { id:"R1_7", grupo:"REM1", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:690, y:245 },
    { id:"R1_8", grupo:"REM1", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:730, y:245 },

    // REMOLQUE 2
    { id:"R2_1", grupo:"REM2", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:260, y:145 },
    { id:"R2_2", grupo:"REM2", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:300, y:145 },
    { id:"R2_3", grupo:"REM2", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:260, y:245 },
    { id:"R2_4", grupo:"REM2", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:300, y:245 },

    { id:"R2_5", grupo:"REM2", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:690, y:145 },
    { id:"R2_6", grupo:"REM2", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:730, y:145 },
    { id:"R2_7", grupo:"REM2", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:690, y:245 },
    { id:"R2_8", grupo:"REM2", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:730, y:245 }

];