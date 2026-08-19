//Importación de imagenes
import logo from "../assets/logoIeqsa.png";

import { useEffect, useState } from "react";
import { catalogoChecklists } from "../data/catalogoChecklists";
import { ToastContainer, toast } from "react-toastify";
import {checklistTransporte } from "../data/checklistTransporte";
import {checklistRHF0121} from "../data/checklistRHF0121";
import {checklistSGF2401 } from "../data/checklistSGF2401";
import DatosGeneralesTransporte from "../components/DatosGeneralesTransporte";
import DatosGeneralesSGF2401 from "../components/DatosGeneralesSGF2401";
import DocumentacionSection from "../components/DocumentacionSection";
import OperadorSection from "../components/OperadorSection";
import RemolqueSection from "../components/RemolqueSection";
import EstadoRemolqueSection from "../components/EstadoRemolqueSection";
import EnrampadoSection from "../components/EnrampadoSection";
import EvidenciasSection from "../components/EvidenciasSection";
import HistorialSection from "../components/HistorialSection";
import DashboardSection from "../components/DashboardSection";
import TruckInspection from "../components/TruckInspection";
import TruckDiagram from "../components/TruckDiagram";
import ModalDetalle from "../components/ModalDetalle";
import SupervisorSection from "../components/SupervisorSection";
import InputField from "../components/InputField";
import CardSection from "../components/CardSection";
import SGF2401Section from "../components/SGF2401Section";
import DatosPesajeSection from "../components/DatosPesajeSection";
import MermaAzucarSection from "../components/MermaAzucarSection";
import ObservacionesSGF2401 from "../components/ObservacionesSGF2401";
import SGF2401InformacionGeneral from "../components/SGF2401InformacionGeneral";
import RHF0121InformacionGeneral from "../components/RHF0121InformacionGeneral";
import EstadoSupersacoSection from "../components/EstadoSupersacoSection";
import SGF2433Section from "../components/SGF2433Section";
import { generarPDFSGF2433 } from "../pdf/generarPDFSGF2433";
import RHF0121DatosGenerales from "../components/RHF0121DatosGenerales";
import { generarPDFRHF0121 } from "../pdf/generarPDFRHF0121";
import RHF0121Section from "../components/RHF0121Section";
import RHF0121OperadorSection from "../components/RHF0121OperadorSection";
import RHF0121TransporteSection from "../components/RHF0121TransporteSection";
import RHF0121ResultadoSection from "../components/RHF0121ResultadoSection";
import RHF0121RefrigeradoSection from "../components/RHF0121RefrigeradoSection";
import RHF0121ComentariosSection from "../components/RHF0121ComentariosSection";
import RHF0121EntregaSection from "../components/RHF0121EntregaSection";
import HeaderChecklist from "../components/HeaderChecklist";
import GradoRiesgoSection from "../components/GradoRiesgoSection";
import RHF0121CargaDescargaSection from "../components/RHF0121CargaDescargaSection";
import "react-toastify/dist/ReactToastify.css";
import "../styles/RegistroInicial.css";
import jsPDF from "jspdf";
import { generarPDFSGF2401 } from "../pdf/generarPDFSGF2401";
import { generarPDFCHKTransporte } from "../pdf/generarPDFCHKTransporte";
import autoTable from "jspdf-autotable";
import {
    LLANTAS_SENCILLO,
    LLANTAS_FULL
} from "../data/truckDiagramData";

import {
  guardarChecklistDev
} from "../services/checklistDevStore";

import {
  obtenerWorkflow,
  obtenerEtapaPorArea,
  puedeEditarSeccion,
  puedeEnviar,
  puedeFinalizar
} from "../services/checklistWorkflowService";

import { checklistWorkflow } from "../config/checklistWorkflow";

import { ENTORNO_DESARROLLO } from "../config/entornoDesarrollo";

import NuevosChecklists from "../components/NuevosChecklists";

function RegistroInicial({ usuario, onLogout }) {

  const areaUsuario =
  usuario?.area ||
  (ENTORNO_DESARROLLO.usarAreaPrueba
    ? ENTORNO_DESARROLLO.areaPrueba
    : null);

    const nombreUsuarioActual =
    usuario?.nombre ||
    (ENTORNO_DESARROLLO.usarAreaPrueba
      ? "Usuario de prueba"
      : "");

    const puedeEditar = (seccion) => {
    return puedeEditarSeccion(
      "SG-F-24-06",
      areaUsuario,
      seccion
    );
  };

console.log("USUARIO:", usuario);
console.log("ÁREA ACTUAL:", areaUsuario);

  console.log("REGISTRO INICIAL CARGADO");

  console.log(
    "WORKFLOW SG-F-24-06:",
    checklistWorkflow["SG-F-24-06"]
  );

  const [loading, setLoading] = useState(false);

  const [evidencias, setEvidencias] = useState([]);

  const [resetEvidencias, setResetEvidencias] = useState(0);

  console.log("EVIDENCIAS ACTUALES:", evidencias);

  const [errors, setErrors] = useState({});

  const [checklistSeleccionado, setChecklistSeleccionado] = useState("");

  console.log("Checklist:", checklistSeleccionado);

  const [historial, setHistorial] = useState(() => {

  const historialGuardado =
      localStorage.getItem("historial");

    return historialGuardado
      ? JSON.parse(historialGuardado)
      : [];
  });

  const [busqueda, setBusqueda] = useState("");

  const [detalleChecklist, setDetalleChecklist] =
    useState(null); 

    const [
    checklistAPTSeleccionado,
    setChecklistAPTSeleccionado
  ] = useState(null);

  useEffect(() => {

    localStorage.setItem(
      "historial",
      JSON.stringify(historial)
    );

  }, [historial]);

  useEffect(() => {

  if (!checklistAPTSeleccionado) {
    return;
  }

  console.log(
    "CARGANDO CHECKLIST DE APT:",
    checklistAPTSeleccionado
  );

  setFormData(
    checklistAPTSeleccionado
  );

  setChecklistSeleccionado(
    checklistAPTSeleccionado.tipoChecklist
  );

}, [checklistAPTSeleccionado]);

  const respuestasIniciales = {};

  checklistTransporte.secciones.forEach((seccion) => {
    seccion.preguntas.forEach((pregunta) => {
    respuestasIniciales[pregunta.id] = false;
  });
});

  checklistSGF2401.secciones.forEach((seccion) => {
    seccion.preguntas.forEach((pregunta) => {
    respuestasIniciales[pregunta.id] = "";
  });
});

  checklistRHF0121.secciones.forEach((seccion) => {
    seccion.preguntas.forEach((pregunta) => {
    respuestasIniciales[pregunta.id] = "";
  });
});
function obtenerFolio(prefijo = "RMP") {

    const hoy = new Date();

    const anio = String(hoy.getFullYear()).slice(-2);
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");

    const llave = `folio-${prefijo}-${anio}${mes}${dia}`;

    const consecutivo =
        Number(localStorage.getItem(llave) || 0) + 1;

    return `${prefijo}-${anio}${mes}${dia}-${String(consecutivo).padStart(3, "0")}`;
}

function aumentarConsecutivo(prefijo = "RMP") {

    const hoy = new Date();

    const anio = String(hoy.getFullYear()).slice(-2);
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");

    const llave = `folio-${prefijo}-${anio}${mes}${dia}`;

    const consecutivo =
        Number(localStorage.getItem(llave) || 0);

    localStorage.setItem(
        llave,
        consecutivo + 1
    );
}

  function crearFormularioInicial(
    prefijo = "RMP",
    tipoChecklist = "CHK-TRANSPORTE"
) {

  const formulario = {

    tipoChecklist,

    ...respuestasIniciales,

    documentacionRem1: false,
    documentacionRem2: false,

    operadorRem1: false,
    operadorRem2: false,

    remolqueFisico1: false,
    remolqueFisico2: false,

    fecha:
      new Date().toLocaleDateString(),

    hora:
      new Date().toLocaleTimeString(),

    status: "Pendiente",

    areaActual:
  tipoChecklist === "CHK-TRANSPORTE"
    ? "VIGILANCIA"
    : "",

estadoFlujo:
  tipoChecklist === "CHK-TRANSPORTE"
    ? "PENDIENTE"
    : "",

nombreRegistroVigilancia: "",
nombreRegistroAPT: "",

    nombreOperador: "",
    telefonoOperador: "",
    lineaTransporte: "",
    placasytarjetacirculacion: "",
    inspector: "",
    engomadoVerificacion: "",
    engomadoFisico: "",
    rampa: "",
    lateral: "",
    observacionesEnrampado: "",
    folio: obtenerFolio(prefijo),
    remolque1: "",
    remolque2: "",

    placas: false,
    tarjetaCircuconst: false,
    coincidenDocumentacion: false,
    cartaPorte: false,

    imss: false,
    identificacion: false,
    uniforme: false,
    presentacion: false,

    llantas: false,
    profundidad: false,
    suspension: "",
    frenos: false,
    logoRem1: false,
    logoRem2: false,

    fugaAditivo: false,
    especificacionFuga: "",

    // SG-F-24-01

    areaMateriaPrima: "",
    proveedor: "",
    material: "",
    materialEspecificado: "",
    operador: "",
    turno: "",
    diseno: "",
    tripulacion: "",
    placasNumero: "",
    facturaRemision: "",

    pesoInicial: "",
    pesoFinal: "",
    tara: "",

    numeroCodigo: "",

    tq1Inicial: "",
    tq1Final: "",
    psiTq1Inicial: "",
    psiTq1Final: "",

    tq2Inicial: "",
    tq2Final: "",
    psiTq2Inicial: "",
    psiTq2Final: "",
    observacionesSGF2401: "",
    saco1Kg: "",
    saco2Kg: "",
    saco3Kg: "",
    saco4Kg: "",
    saco5Kg: "",
    saco6Kg: "",
    saco7Kg: "",
    saco8Kg: "",

    totalKg: "",
    promedioKg: "",
    diferenciaKg: "",
    mermaKg: "",

    supersaco1: "",
    supersaco2: "",
    supersaco3: "",
    supersaco4: "",
    supersaco5: "",
    supersaco6: "",
    supersaco7: "",
    supersaco8: "",
    supersaco9: "",

    nombreRecibe: "",
    nombreSupervisor: "",

    // SG-F-24-33

    nombreProducto: "",
    fechaRecepcion: "",
    horaRecepcion: "",
    operador2433: "",
    placas2433: "",
    fechaTerminoRecepcion: "",
    horaTerminoRecepcion: "",
    numeroSellos2433: "",
    numeroFactura2433: "",
    turno2433: "",
    tripulacion2433: "",
    comentarios2433: "",
    nombreRecibe2433: "",
    nombreSupervisor2433: "",

    nivelAntes: "",
    nivelDespues: "",

    conosSeguridad: false,
    ventilarOperacion: false,
    contenedorIdentificado: false,
    identificacionNOM: false,

    explosivo: false,
    inflamable: false,
    gasPresion: false,
    corrosivo: false,
    comburente: false,
    toxicidad: false,
    salud: false,
    medioAmbiente: false,

    cantidadFactura: "",
    cantidadFacturaObs: "",

    certificadoCalidad: "",
    certificadoCalidadObs: "",

    contenedoresBuenasCondiciones: "",
    contenedoresBuenasCondicionesObs: "",

    producto1: "",
    caducidad1: "",
    producto2: "",
    caducidad2: "",
    producto3: "",
    caducidad3: "",
    producto4: "",
    caducidad4: "",

    // RHF-0121

    fechaHoraLlegada: "",
    fechaHoraSalida: "",

    nombreOperadorRHF: "",
    lineaTransporteRHF: "",

    numeroTractor: "",
    numeroRemolque1: "",
    numeroRemolque2: "",

    placasTractor: "",
    placasRemolque1: "",
    placasRemolque2: "",
    comentarios: "",

    llantasSencillo: LLANTAS_SENCILLO.map(llanta => ({
      ...llanta,
      incidencias: [...llanta.incidencias]
    })),

    llantasFull: LLANTAS_FULL.map(llanta => ({
      ...llanta,
      incidencias: [...llanta.incidencias]
    }))

    };

    // Reiniciar peligros
for (let i = 0; i < 24; i++) {
    formulario[`peligro${i}`] = false;
}

// Reiniciar aspectos ambientales
for (let i = 0; i < 12; i++) {
    formulario[`ambiental${i}`] = false;
}

// Reiniciar observaciones del transportista
for (let i = 0; i < 11; i++) {
    formulario[`transporteObs${i}`] = "";
}

return formulario;

}

  const [formData, setFormData] = useState(
      crearFormularioInicial("RT")
  );

  const mostrarFull = !!formData.remolque2?.trim();

  const handleChange = (e) => {

  const { name, value, type, checked } = e.target;

  console.log("CAMBIO:", name, value);

  let nuevoFormData = {
    ...formData,
    [name]: type === "checkbox"
      ? checked
      : value
  };

  if (name === "areaMateriaPrima") {

  nuevoFormData.material =
    value === "Cuarto Monster"
      ? formData.material
      : "";

  // =====================================================
  // FOLIO SEGÚN EL ÁREA
  // =====================================================

  if (value === "Lata Vacía") {

    nuevoFormData.folio =
      obtenerFolio("RMP-LV");

  }

  if (value === "Cuarto Monster") {

    nuevoFormData.folio =
      obtenerFolio("RMP-CM");

  }

}

  console.log(
  "WORKFLOW:",
  obtenerWorkflow("SG-F-24-06")
);

console.log(
  "VIGILANCIA - DOC:",
  puedeEditarSeccion(
    "SG-F-24-06",
    "VIGILANCIA",
    "DOC"
  )
);

console.log(
  "APT - DOC:",
  puedeEditarSeccion(
    "SG-F-24-06",
    "APT",
    "DOC"
  )
);

console.log(
  "APT - EST:",
  puedeEditarSeccion(
    "SG-F-24-06",
    "APT",
    "EST"
  )
);

console.log(
  "VIGILANCIA puede enviar:",
  puedeEnviar(
    "SG-F-24-06",
    "VIGILANCIA"
  )
);

console.log(
  "APT puede finalizar:",
  puedeFinalizar(
    "SG-F-24-06",
    "APT"
  )
);

  const sacos = [
    "saco1Kg",
    "saco2Kg",
    "saco3Kg",
    "saco4Kg",
    "saco5Kg",
    "saco6Kg",
    "saco7Kg",
    "saco8Kg"
  ];

  // Si cambió alguno de los sacos, recalcular automáticamente
  if (sacos.includes(name)) {

    const totalKg = sacos.reduce((total, saco) => {

      return total + (parseFloat(nuevoFormData[saco]) || 0);

    }, 0);

    const promedioKg = totalKg / 8;

    const diferenciaKg = promedioKg - 1503.84;

    nuevoFormData.totalKg = totalKg.toFixed(2);

    nuevoFormData.promedioKg = promedioKg.toFixed(2);

    nuevoFormData.diferenciaKg = diferenciaKg.toFixed(2);

  }

  console.log(nuevoFormData.inspector);

  setFormData(nuevoFormData);

  setErrors({
    ...errors,
    [name]: ""
  });

};

const actualizarLlanta = (tipo, llantaActualizada) => {

    setFormData(prev => ({

        ...prev,

        [tipo === "FULL"
            ? "llantasFull"
            : "llantasSencillo"]:

        prev[
            tipo === "FULL"
                ? "llantasFull"
                : "llantasSencillo"
        ].map(llanta =>

            llanta.id === llantaActualizada.id
                ? llantaActualizada
                : llanta

        )

    }));

};

  const editarChecklist = (item) => {

    setFormData(item);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    toast.info("Checklist cargado para edición");
  };

  const eliminarChecklist = (index) => {

    const nuevoHistorial = historial.filter(
      (_, i) => i !== index
    );

    setHistorial(nuevoHistorial);

     toast.success("Checklist eliminado");

};


  const verDetalle = (item) => {

    setDetalleChecklist(item);
  };

  const generarPDF = async () => {

  console.log("Entró a generarPDF");
  console.log("Tipo checklist:", formData.tipoChecklist);

  try {

    let pdfBlob = null;

    switch (formData.tipoChecklist) {

      case "SG-F-24-01":
        pdfBlob = generarPDFSGF2401(formData);
        break;

      case "CHK-TRANSPORTE":
        pdfBlob = generarPDFCHKTransporte(formData);
        break;

      case "RH-F-01-21":
        toast.info("PDF de RH-F-01-21 en desarrollo.");
        return;

      case "SG-F-24-33":
        pdfBlob = generarPDFSGF2433(formData);
        break;

      default:
        toast.error("Checklist no soportado.");
        return;
    }

    if (!pdfBlob) {
      toast.error("No se pudo generar el PDF.");
      return;
    }

    console.log("PDF generado correctamente.");
    console.log("Tamaño PDF:", pdfBlob.size, "bytes");

    // Crear FormData para enviar el PDF a la API
    const datosPDF = new FormData();

datosPDF.append(
  "folio",
  formData.folio
);

datosPDF.append(
  "areaMateriaPrima",
  formData.areaMateriaPrima || ""
);

datosPDF.append(
  "pdf",
  pdfBlob,
  `${formData.folio}.pdf`
);

console.log(
  "Área PDF:",
  formData.areaMateriaPrima
);

console.log(
  "Enviando PDF a la API..."
);

    const response = await fetch(
      "http://localhost:5029/api/checklist/pdf",
      {
        method: "POST",
        body: datosPDF
      }
    );

    console.log(
      "STATUS PDF:",
      response.status
    );

    if (!response.ok) {

      const errorTexto =
        await response.text();

      console.error(
        "ERROR API PDF:",
        errorTexto
      );

      throw new Error(
        "La API no pudo guardar el PDF."
      );
    }

    const resultado =
      await response.json();

    console.log(
      "RESPUESTA API PDF:",
      resultado
    );

    toast.success(
      "PDF guardado correctamente"
    );

    // =====================================================
// CREAR NUEVO FORMULARIO DESPUÉS DE GUARDAR EL PDF
// =====================================================

let prefijoNuevo = "RMP";

if (formData.tipoChecklist === "SG-F-24-01") {

  prefijoNuevo =
    formData.areaMateriaPrima === "Lata Vacía"
      ? "RMP-LV"
      : formData.areaMateriaPrima === "Cuarto Monster"
        ? "RMP-CM"
        : "RMP";

} else if (formData.tipoChecklist === "CHK-TRANSPORTE") {

  prefijoNuevo = "RT";

} else if (formData.tipoChecklist === "RH-F-01-21") {

  prefijoNuevo = "RH";

} else if (formData.tipoChecklist === "SG-F-24-33") {

  prefijoNuevo = "RPQ";
}

const nuevoFormulario = crearFormularioInicial(
  prefijoNuevo,
  formData.tipoChecklist
);

setFormData(nuevoFormulario);

   
setEvidencias([]);

setResetEvidencias(
  (valor) => valor + 1
);

  } catch (error) {

    console.error(
      "ERROR AL GENERAR/GUARDAR PDF:",
      error
    );

    toast.error(
      "No se pudo guardar el PDF."
    );
  }
};

const finalizarChecklist = async () => {

  const ahora = new Date();

  const datosFinalizados = {

    ...formData,

    hora: ahora.toLocaleTimeString(),

    fecha: ahora.toLocaleDateString(),

    areaActual: "APT",

    estadoFlujo: "FINALIZADO",

    nombreRegistroAPT:
      nombreUsuarioActual

  };

  try {

    const response = await fetch(
      "http://localhost:5029/api/checklist",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(datosFinalizados)
      }
    );

    console.log(
      "STATUS FINALIZAR:",
      response.status
    );

    const data = await response.json();

    console.log(
      "DATA FINALIZAR:",
      data
    );

    guardarChecklistDev(
      datosFinalizados
    );

    toast.success(
      "Checklist finalizado correctamente"
    );

    switch (
      datosFinalizados.tipoChecklist
    ) {

      case "CHK-TRANSPORTE":
        generarPDFCHKTransporte(
          datosFinalizados
        );
        break;

      case "SG-F-24-01":
        generarPDFSGF2401(
          datosFinalizados
        );
        break;

      case "RH-F-01-21":
        generarPDFRHF0121(
          datosFinalizados
        );
        break;

      case "SG-F-24-33":
        generarPDFSGF2433(
          datosFinalizados
        );
        break;

      default:
        toast.error(
          "Checklist no soportado."
        );
        break;
    }

  } catch (error) {

    console.error(
      "Error al finalizar checklist:",
      error
    );

    toast.error(
      "No se pudo finalizar el checklist."
    );

  }
};

  const guardarChecklist = async () => {

    console.log("FORMDATA AL ENTRAR:", formData);

    console.log("=== GUARDAR CHECKLIST ===");
    console.log("tipoChecklist:", formData.tipoChecklist);
    console.log("folio:", formData.folio);

    let nuevosErrores = {};
    let primerError = null;

if (checklistSeleccionado === "CHK-TRANSPORTE") {

  if (!formData.nombreOperador) {
    nuevosErrores.nombreOperador =
      "Ingrese el nombre del operador";
  }

  if (!formData.lineaTransporte) {
    nuevosErrores.lineaTransporte =
      "Ingrese la línea de transporte";
  }

  if (!formData.placasytarjetacirculacion) {
  nuevosErrores.placasytarjetacirculacion =
    "Ingrese las placas y tarjeta de circulación";
}

}
if (checklistSeleccionado === "SG-F-24-01") {

  // ÁREA
  if (!formData.areaMateriaPrima) {
    nuevosErrores.areaMateriaPrima =
      "Seleccione el área";

    if (!primerError) {
      primerError = "areaMateriaPrima";
    }
  }

  // MATERIAL
  // Solo es obligatorio para Cuarto Monster
  if (
    formData.areaMateriaPrima === "Cuarto Monster" &&
    !formData.material
  ) {

    if (
  formData.areaMateriaPrima === "Cuarto Monster" &&
  formData.material === "Otro" &&
  !formData.materialEspecificado?.trim()
) {
  nuevosErrores.materialEspecificado =
    "Especifique el material";

  if (!primerError) {
    primerError = "materialEspecificado";
  }
}

    nuevosErrores.material =
      "Seleccione el material";

    if (!primerError) {
      primerError = "material";
    }
  }

  // PROVEEDOR
  if (!formData.proveedor) {
    nuevosErrores.proveedor =
      "Ingrese el proveedor";

    if (!primerError) {
      primerError = "proveedor";
    }
  }

  // OPERADOR
  if (!formData.operador) {
    nuevosErrores.operador =
      "Ingrese el operador";

    if (!primerError) {
      primerError = "operador";
    }
  }

  // TURNO
  if (!formData.turno) {
    nuevosErrores.turno =
      "Ingrese el turno";

    if (!primerError) {
      primerError = "turno";
    }
  }
}

console.log("CHECKLIST SELECCIONADO:", checklistSeleccionado);

if (checklistSeleccionado === "SG-F-24-33") {

  console.log("nombreProducto:", formData.nombreProducto);
console.log("operador2433:", formData.operador2433);
console.log("placas2433:", formData.placas2433);

    if (!formData.nombreProducto) {
        nuevosErrores.nombreProducto = "Ingrese el producto";
    }

    if (!formData.operador2433) {
        nuevosErrores.operador2433 = "Ingrese el operador";
    }

    if (!formData.placas2433) {
        nuevosErrores.placas2433 = "Ingrese las placas";
    }

}

console.log("FORMDATA COMPLETO:", formData);
console.log("Errores:", nuevosErrores);

console.log("TIPO CHECKLIST:", formData.tipoChecklist);


console.log(Object.keys(nuevosErrores));
setErrors(nuevosErrores);

if (primerError) {

  document
    .querySelector(
      `[name="${primerError}"]`
    )
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  document
    .querySelector(
      `[name="${primerError}"]`
    )
    ?.focus();
}

if (Object.keys(nuevosErrores).length > 0) {

  toast.error(
    "Complete los campos obligatorios"
  );

  return;
}

    try {

      setLoading(true);

      const ahora = new Date();
const datosAGuardar = {

  ...formData,

  hora: ahora.toLocaleTimeString(),

  fecha: ahora.toLocaleDateString(),

  areaActual:
  areaUsuario === "VIGILANCIA" &&
  formData.tipoChecklist === "CHK-TRANSPORTE"
    ? "APT"
    : areaUsuario,

  estadoFlujo:
  areaUsuario === "VIGILANCIA" &&
  formData.tipoChecklist === "CHK-TRANSPORTE"
    ? "ENVIADO_A_APT"
    : formData.estadoFlujo || "PENDIENTE",

  ...(areaUsuario === "VIGILANCIA"
    ? {
        nombreRegistroVigilancia:
          nombreUsuarioActual
      }
    : {}),

  ...(areaUsuario === "APT"
    ? {
        nombreRegistroAPT:
          nombreUsuarioActual
      }
    : {})

};

      const datosFormulario = new FormData();

datosFormulario.append(
  "checklist",
  JSON.stringify(datosAGuardar)
);

evidencias.forEach((archivo) => {
  datosFormulario.append(
    "evidencias",
    archivo
  );
});

const response = await fetch(
  "http://localhost:5029/api/checklist",
  {
    method: "POST",
    body: datosFormulario
  }
);

      console.log("STATUS:", response.status);
      console.log("RESPUESTA:", response);

      const data = await response.json();

      console.log("DATA:", data);

      if (
  datosAGuardar.tipoChecklist === "CHK-TRANSPORTE"
) {

  if (areaUsuario === "VIGILANCIA") {

  guardarChecklistDev(datosAGuardar);

  toast.success(
    "Checklist enviado a APT correctamente"
  );

  return;
}
if (areaUsuario === "APT") {

  guardarChecklistDev(datosAGuardar);

  toast.success(
    "Cambios guardados correctamente"
  );

  return;
}
}

      let prefijo = "RT";

console.log(
  "TIPO A GUARDAR:",
  datosAGuardar.tipoChecklist
);

switch (datosAGuardar.tipoChecklist) {

  case "CHK-TRANSPORTE":
    prefijo = "RT";
    break;

  case "SG-F-24-01":

    prefijo =
      datosAGuardar.areaMateriaPrima === "Lata Vacía"
        ? "RMP-LV"
        : datosAGuardar.areaMateriaPrima === "Cuarto Monster"
          ? "RMP-CM"
          : "RMP";

    break;

  case "RH-F-01-21":
    prefijo = "RH";
    break;

  case "SG-F-24-33":
    prefijo = "RPQ";
    break;
}


// =====================================================
// AUMENTAR CONSECUTIVO
// =====================================================

aumentarConsecutivo(prefijo);

toast.success(
  "Checklist enviado correctamente"
);

    } 
    
    catch (error) {

    console.error("ERROR API:", error);

    toast.error(
      error.message || "Error al enviar checklist"
    );
} finally {

      setLoading(false);
    }
  };

  const resultadosBusqueda = historial.filter((item) => {

  if (!busqueda.trim()) return false;

  const texto = busqueda.toLowerCase();

  return (

    item.folio?.toLowerCase().includes(texto) ||

    item.nombreOperador?.toLowerCase().includes(texto) ||

    item.placasytarjetacirculacion?.toLowerCase().includes(texto)

  );

});

  return (

    <div className="container">

      <ToastContainer />

      {!checklistSeleccionado && (

  <>

    <div className="header-app">

      <div className="topbar-checklist">

        <span className="titulo-topbar">
          Auditoría de Transporte
        </span>

        <img
          src={logo}
          alt="IEQSA"
          className="logo-topbar"
        />

      </div>

    </div>

    <div className="contenedor-buscador">

      <input
        type="text"
        className="input-buscador"
        placeholder="🔍 Escriba un folio, nombre del operador o placas para localizar un checklist registrado"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

    </div>

  </>

)}

      <div className="layout-operativo">

        <div className="selector-checklist">

{!checklistSeleccionado && (
       <div className="bienvenida-checklist">

  <h2>
    Seleccione el checklist que desea capturar para comenzar.
  </h2>

</div>

)}
{!checklistSeleccionado && (

  <>
    {areaUsuario === "APT" && (
      <NuevosChecklists
        area="APT"
        onAbrirChecklist={(checklist) => {
          console.log(
            "CHECKLIST A ABRIR:",
            checklist
          );
          setChecklistAPTSeleccionado(
            checklist
    );

  }}
      />
    )}

    <div className="tarjetas-checklist">

    <div
      className="tarjeta-checklist"

      onClick={() => {
  setChecklistSeleccionado("CHK-TRANSPORTE");

  setFormData(
  crearFormularioInicial(
    "RT",
    "CHK-TRANSPORTE"
  )
);
}}
    >
      <h3>🚛 Revisión de transporte </h3>
      <p>SG-F-24-06</p>
      <small>
        Control de ingreso y salida de transporte.
      </small>
    </div>

    <div
      className="tarjeta-checklist"
      onClick={() => {
      setChecklistSeleccionado("SG-F-24-01");

      setFormData(
        crearFormularioInicial(
          "RMP",
          "SG-F-24-01"
        )
      );
}}
    >
      <h3>📦 Lista de Chequeo</h3>
      <p>SG-F-24-01</p>
      <small>
        Recepción de materia prima.
      </small>
    </div>

    <div
      className="tarjeta-checklist"
      onClick={() => {
      setChecklistSeleccionado("RH-F-01-21");

      const nuevoFormulario = crearFormularioInicial(
  "RH",
  "RH-F-01-21"
);

setFormData(nuevoFormulario);
console.log(nuevoFormulario);

console.log("Seleccionado RH");
      console.log("Seleccionado RH");
}}
    >
      <h3>🚚 Inspección de seguridad para ingreso y salida </h3>
      <p>RH-F-01-21</p>
      <small>
        Revisión de tractor y remolque.
      </small>
    </div>

    <div
  className="tarjeta-checklist"

  onClick={() => {

    setChecklistSeleccionado("SG-F-24-33");

    const nuevoFormulario = crearFormularioInicial(
        "RPQ",
        "SG-F-24-33"
    );

    console.log("NUEVO FORMULARIO:", nuevoFormulario);

    setFormData(nuevoFormulario);

}}
>
  <h3>🧪 Recepción de Productos Químicos</h3>

  <p>SG-F-24-33</p>

  <small>
    Recepción de productos químicos, materiales e ingredientes.
  </small>
</div>

  </div>

  </>

)}

{checklistSeleccionado && (

  <div className="contenedor-regresar">

    <button
      className="btn-back"
      onClick={() => {

        setChecklistSeleccionado("");

        setFormData(crearFormularioInicial("RT"));

      }}
    >
      ← Regresar
    </button>

  </div>

)}
{checklistSeleccionado === "SG-F-24-33" && (
  <>

    <HeaderChecklist
      codigo="SG-F-24-33"
      titulo="RECEPCIÓN DE PRODUCTOS QUÍMICOS, MATERIALES E INGREDIENTES"
      subtitulo="Recepción y Verificación"
    >

      <button
        className="btn-back"
        onClick={() => {

          setChecklistSeleccionado("");

          setFormData({
            ...formData,
            tipoChecklist: ""
          });

        }}
      >
        ←
      </button>

    </HeaderChecklist>

    <CardSection title="INFORMACIÓN GENERAL">

      <InputField
        label="Fecha"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
      />

      <InputField
        label="Hora"
        name="hora"
        value={formData.hora}
        onChange={handleChange}
      />

      <div className="grupo">

        <label>Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          disabled={!puedeEditar("STATUS")}
        >
          <option>Pendiente</option>
          <option>En revisión</option>
          <option>Aprobado</option>
          <option>Rechazado</option>
        </select>

      </div>

      <InputField
        label="Folio"
        name="folio"
        value={formData.folio}
        readOnly
      />

    </CardSection>

    <SGF2433Section
      formData={formData}
      handleChange={handleChange}
    />

  </>
)}

          {checklistSeleccionado === "CHK-TRANSPORTE" && (
            <>

            <HeaderChecklist
              codigo="SG-F-24-06"
              titulo="CHECKLIST DE VERIFICACIÓN DE UNIDAD"
              subtitulo="Auditoría de Transporte"
            />

            <CardSection title="INFORMACIÓN GENERAL">

            <InputField
              label="Fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
            />

            <InputField
              label="Hora"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
            />

            <div className="grupo">

              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={!puedeEditar("STATUS")}
              >

                <option>Pendiente</option>
                <option>En revisión</option>
                <option>Aprobado</option>
                <option>Rechazado</option>
              </select>

            </div>

            <InputField
              label="Folio"
              name="folio"
              value={formData.folio}
              readOnly
            />

          </CardSection>

            <DatosGeneralesTransporte
              formData={formData}
              handleChange={handleChange}
              errors={errors}
              puedeEditar={puedeEditar("DATOS_GENERALES")}
            />
            </>
)}

          {checklistSeleccionado === "CHK-TRANSPORTE" && (
            <>
          <DocumentacionSection
            formData={formData}
            handleChange={handleChange}
            puedeEditar={puedeEditar("DOC")}
          />

          <OperadorSection
            formData={formData}
            handleChange={handleChange}
            puedeEditar={puedeEditar("OPE")}
          />

          <RemolqueSection
            formData={formData}
            handleChange={handleChange}
            puedeEditar={puedeEditar("REM")}
          />

          <EnrampadoSection
            formData={formData}
            handleChange={handleChange}
            puedeEditar={puedeEditar("ENRAMPADO")}
          />

          <EstadoRemolqueSection
            formData={formData}
            handleChange={handleChange}
            actualizarLlanta={actualizarLlanta}
            mostrarFull={mostrarFull}
            puedeEditarEstado={puedeEditar("EST")}
            puedeEditarLlantas={puedeEditar("LLANTAS")}
          />
        </>
)}

  {checklistSeleccionado === "SG-F-24-01" && (
  <>

    <HeaderChecklist
      codigo="SG-F-24-01"
      titulo="RECEPCIÓN DE MATERIA PRIMA"
      subtitulo="Recepción y Verificación"
    />

    <SGF2401InformacionGeneral
    formData={formData}
    handleChange={handleChange}
/>

    <DatosGeneralesSGF2401
      formData={formData}
      handleChange={handleChange}
      errors={errors}
    />

    <SGF2401Section
  formData={formData}
  handleChange={handleChange}
/>

{/* DATOS DE PESAJE */}
{formData.areaMateriaPrima === "Cuarto Monster" &&
  (
    formData.material === "Azúcar" ||
    formData.material === "Otro"
  ) && (
    <DatosPesajeSection
      formData={formData}
      handleChange={handleChange}
    />
)}


{/* MERMA Y SUPERSACO */}
{formData.areaMateriaPrima === "Cuarto Monster" &&
  (
    formData.material === "Azúcar" ||
    formData.material === "Otro"
  ) && (
  <>
    <MermaAzucarSection
      formData={formData}
      handleChange={handleChange}
    />

    <EstadoSupersacoSection
      formData={formData}
      handleChange={handleChange}
    />
  </>
)}

    <ObservacionesSGF2401
      formData={formData}
      handleChange={handleChange}
    />
  </>
)}

{checklistSeleccionado === "RH-F-01-21" && (
  <>

  <HeaderChecklist
  codigo="RH-F-01-21"
  titulo="INSPECCIÓN DE TRACTOR Y REMOLQUE"
  subtitulo="Requisitos de seguridad para ingreso y salida"
>

</HeaderChecklist>

  <RHF0121InformacionGeneral
    formData={formData}
    handleChange={handleChange}
/>

    {/*<GradoRiesgoSection
      formData={formData}
      handleChange={handleChange}
    /> */}

    <RHF0121DatosGenerales
      formData={formData}
      handleChange={handleChange}
    />

    <RHF0121OperadorSection
      formData={formData}
      handleChange={handleChange}
    />

    <RHF0121TransporteSection
      formData={formData}
      handleChange={handleChange}
    />
    <RHF0121RefrigeradoSection
      formData={formData}
      handleChange={handleChange}
    />

    <RHF0121ResultadoSection
      formData={formData}
      handleChange={handleChange}
    />

    <RHF0121ComentariosSection
      formData={formData}
      handleChange={handleChange}
    />

    <RHF0121EntregaSection
      formData={formData}
      handleChange={handleChange}
    />

    <RHF0121Section
      formData={formData}
      handleChange={handleChange}
    />
  </>
)}
  {checklistSeleccionado && (
  <>
    {formData.areaMateriaPrima === "Cuarto Monster" && (
      <EvidenciasSection
        key={resetEvidencias}
        onEvidenciasChange={setEvidencias}
      />
    )}

    <button
      className="boton"
      onClick={guardarChecklist}
      disabled={loading}
    >
      {loading
        ? "Guardando..."
        : "Guardar Checklist"}
    </button>

    <button
      className="boton"
      onClick={generarPDF}
      disabled={loading}
    >
      Generar PDF
    </button>
  </>
)}
        </div>
        <div className="main-operativo">

  {checklistSeleccionado === "CHK-TRANSPORTE" && (
    <>

      {/*
      <DashboardSection
          historial={historial}
      />
      */}

      {/*
      <HistorialSection
          historial={historial}
          editarChecklist={editarChecklist}
          eliminarChecklist={eliminarChecklist}
          verDetalle={verDetalle}
      />
      */}

      {/*<SupervisorSection
        historial={historial}
        verDetalle={verDetalle}
      />*/}
    </>
  )}

</div>

      </div>

      <ModalDetalle
        checklist={detalleChecklist}
        cerrarModal={() =>
          setDetalleChecklist(null)
        }
      />

    </div>
  );
}


export default RegistroInicial;
