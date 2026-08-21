// Configuración central del flujo de trabajo de los checklists
// ------------------------------------------------------------
// Aquí definimos qué áreas participan y en qué orden.
// NO contiene lógica de SQL ni de PDF.
// Esto permitirá reutilizar el mismo motor para otros checklists.

export const checklistWorkflow = {

  "SG-F-24-06": {

    codigo: "SG-F-24-06",

    nombre: "Revisión de Transporte",

    etapas: [

      {
        orden: 1,

        area: "VIGILANCIA",

        nombreArea: "Vigilancia / Patrimonial",

        // Secciones que Vigilancia puede capturar/modificar
        seccionesEditables: [
          "DATOS_GENERALES",
          "DOC",
          "OPE",
          "REM",
          "ENRAMPADO",
          "LLANTAS",
          "STATUS",
          "DELIVERY"

        ],

        puedeEditar: true,

        puedeEnviar: true,

        puedeFinalizar: false,

        puedeSolicitarCorreccion: false,

        siguienteArea: "APT"
      },

      {
        orden: 2,

        area: "APT",

        nombreArea: "APT",

        // APT solamente captura esta sección.
        // Las secciones de Vigilancia serán visibles
        // pero no editables.
        seccionesEditables: [
          "EST",
          "DELIVERY"
        ],

        puedeEditar: true,

        puedeEnviar: false,

        puedeFinalizar: true,

        puedeSolicitarCorreccion: true,

        siguienteArea: null
      }

    ],

    estados: {

      inicial: "PENDIENTE",

      enviadoAPT: "ENVIADO_A_APT",

      enProcesoAPT: "EN_PROCESO_APT",

      correccion: "CORRECCION_SOLICITADA",

      finalizado: "FINALIZADO"

    }

  }

};