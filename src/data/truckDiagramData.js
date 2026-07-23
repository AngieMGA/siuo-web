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

// ===== TRACTO =====

// Dirección
{ id:"T1", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:70,  y:95 },
{ id:"T2", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:70,  y:250 },

// Primer eje dual
{ id:"T3", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:180, y:95 },
{ id:"T4", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:220, y:95 },

{ id:"T5", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:180, y:250 },
{ id:"T6", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:220, y:250 },

// Segundo eje dual
{ id:"T7", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:280, y:95 },
{ id:"T8", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:320, y:95 },

{ id:"T9", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:280, y:250 },
{ id:"T10", grupo:"TRACTO", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:320, y:250 },

// ===== REMOLQUE =====

{ id:"R1", grupo:"REMOLQUE", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:760, y:95 },
{ id:"R2", grupo:"REMOLQUE", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:800, y:95 },

{ id:"R3", grupo:"REMOLQUE", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:760, y:250 },
{ id:"R4", grupo:"REMOLQUE", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:800, y:250 },

{ id:"R5", grupo:"REMOLQUE", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:900, y:95 },
{ id:"R6", grupo:"REMOLQUE", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:940, y:95 },

{ id:"R7", grupo:"REMOLQUE", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:900, y:250 },
{ id:"R8", grupo:"REMOLQUE", estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:940, y:250 },

];