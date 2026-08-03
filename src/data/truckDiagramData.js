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

    { id:"R1", numero:2, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:36, y:73 },
{ id:"R2", numero:1, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:36, y:157 },

    // Tracto - columna izquierda
    { id:"R3", numero:6, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:147, y:73 },
    { id:"R5", numero:5, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:147, y:94 },
    { id:"R7", numero:4, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:147, y:136 },
    { id:"R9", numero:3, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:147, y:157 },

    // Tracto - columna derecha
    { id:"R4", numero:10, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:182, y:73 },
    { id:"R6", numero:9, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:182, y:94 },
    { id:"R8", numero:8, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:182, y:136 },
    { id:"R10", numero:7, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:182, y:157 },

    // Primer remolque - columna izquierda
{ id:"R11", numero:14, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:390, y:77 },
{ id:"R13", numero:13, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:390, y:97 },
{ id:"R15", numero:12, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:390, y:134 },
{ id:"R17", numero:11, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:390, y:153 },

// Primer remolque - columna derecha
{ id:"R12", numero:18, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:425, y:77 },
{ id:"R14", numero:17, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:425, y:97 },
{ id:"R16", numero:16, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:425, y:134 },
{ id:"R18", numero:15, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:425, y:153 },

// Segundo remolque - columna izquierda
{ id:"R19", numero:22, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:493, y:77 },
{ id:"R20", numero:21, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:493, y:97 },
{ id:"R21", numero:20, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:493, y:134 },
{ id:"R22", numero:19, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:493, y:153 },

// Segundo remolque - columna derecha
{ id:"R23", numero:26, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:528, y:77 },
{ id:"R24", numero:25, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:528, y:97 },
{ id:"R25", numero:24, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:528, y:134 },
{ id:"R26", numero:23, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:528, y:153 },
    // Tercer eje
    { id:"R27", numero:30, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:710, y:77 },
    { id:"R28", numero:29, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:710, y:97 },
    { id:"R29", numero:28, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:710, y:136 },
    { id:"R30", numero:27, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:710, y:157 },

    // Cuarto eje
    { id:"R31", numero:34, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:746, y:79 },
    { id:"R32", numero:33, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:746, y:97 },
    { id:"R33", numero:32, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:746, y:136 },
    { id:"R34", numero:31, estado:ESTADOS.BIEN, incidencias:[], comentario:"", x:746, y:157 }
    ];