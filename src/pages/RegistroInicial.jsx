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
import TireInspection from "../components/TireInspection";
import ModalDetalle from "../components/ModalDetalle";
import SupervisorSection from "../components/SupervisorSection";
import InputField from "../components/InputField";
import CardSection from "../components/CardSection";
import SGF2401Section from "../components/SGF2401Section";
import DatosPesajeSection from "../components/DatosPesajeSection";
import MermaAzucarSection from "../components/MermaAzucarSection";
import ObservacionesSGF2401 from "../components/ObservacionesSGF2401";
import EstadoSupersacoSection from "../components/EstadoSupersacoSection";
import SGF2433Section from "../components/SGF2433Section";
import "react-toastify/dist/ReactToastify.css";
import RHF0121DatosGenerales from "../components/RHF0121DatosGenerales";
import RHF0121Section from "../components/RHF0121Section";
import RHF0121OperadorSection from "../components/RHF0121OperadorSection";
import RHF0121TransporteSection from "../components/RHF0121TransporteSection";
import RHF0121ResultadoSection from "../components/RHF0121ResultadoSection";
import RHF0121RefrigeradoSection from "../components/RHF0121RefrigeradoSection";
import RHF0121ComentariosSection from "../components/RHF0121ComentariosSection";
import RHF0121EntregaSection from "../components/RHF0121EntregaSection";
import HeaderChecklist from "../components/HeaderChecklist";
import GradoRiesgoSection from "../components/GradoRiesgoSection";
import jsPDF from "jspdf";
import "../styles/RegistroInicial.css";

function RegistroInicial() {

  const [loading, setLoading] = useState(false);

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

  const [detalleChecklist, setDetalleChecklist] =
    useState(null); 

  useEffect(() => {

    localStorage.setItem(
      "historial",
      JSON.stringify(historial)
    );

  }, [historial]);

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

  const formularioInicial = {

    tipoChecklist: "CHK-TRANSPORTE",
    
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

    nombreOperador: "",
    telefonoOperador: "",
    lineaTransporte: "",
    placasTracto: "",
    nombreInspector: "",
    folio: "",
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

    proveedor: "",
    material: "",
    operador: "",
    lote: "",
    turno: "",

    diseno: "",
    tripulacion: "",

    placasNumero: "",

    alergeno: "",

    ordenCompra: "",
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
    saco1: "",
    saco2: "",
    saco3: "",
    saco4: "",
    saco5: "",
    saco6: "",
    saco7: "",
    saco8: "",

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

  };

  const generarFolio = () => {

  const hoy = new Date();

  const fecha =
    hoy.getFullYear().toString() +
    String(hoy.getMonth() + 1).padStart(2, "0") +
    String(hoy.getDate()).padStart(2, "0");

  const ultimoConsecutivo =
    Number(localStorage.getItem(`folio-${fecha}`) || 0) + 1;

  localStorage.setItem(
    `folio-${fecha}`,
    ultimoConsecutivo
  );

  return `IEQSA-RT-${fecha}-${String(ultimoConsecutivo).padStart(3, "0")}`;
};

  const [formData, setFormData] =
  useState({
    ...formularioInicial,
    folio: generarFolio()
  });

  const handleChange = (e) => {

  const { name, value, type, checked } = e.target;

  console.log(
    "Nombre:",
    name,
    "Valor:",
    value
  );

  setFormData({
    ...formData,
    [name]: type === "checkbox"
      ? checked
      : value
  });

  setErrors({
    ...errors,
    [name]: ""
  });
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

  const generarPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      formData.tipoChecklist === "SG-F-24-01"
        ? "SG-F-24-01 Recepción de Materia Prima"
        : "Checklist de Verificación de Unidad",
      20,
      20
    );

    doc.setFontSize(12);
    
    doc.setFontSize(12);

    doc.text(
      `Fecha: ${formData.fecha}`,
      20,
      35
    );

    doc.text(
      `Hora: ${formData.hora}`,
      20,
      45
    );

    doc.text(
      `Status: ${formData.status}`,
      20,
      55
    );
    if (formData.tipoChecklist === "CHK-TRANSPORTE") {

  doc.text(
    `Operador: ${formData.nombreOperador}`,
    20,
    70
  );

  doc.text(
    `Línea: ${formData.lineaTransporte}`,
    20,
    80
  );

  doc.text(
    `Placas: ${formData.placasTracto}`,
    20,
    90
  );

  doc.text(
    `Teléfono: ${formData.telefonoOperador}`,
    20,
    100
  );

  doc.text(
    `Remolque 1: ${formData.remolque1}`,
    20,
    110
  );

  doc.text(
    `Remolque 2: ${formData.remolque2}`,
    20,
    120
  );

}

    if (formData.tipoChecklist === "SG-F-24-01") {

  doc.text(
    `Proveedor: ${formData.proveedor}`,
    20,
    140
  );

  doc.text(
    `Material: ${formData.material}`,
    20,
    150
  );

  doc.text(
    `Operador: ${formData.operador}`,
    20,
    160
  );

  doc.text(
    `Lote: ${formData.lote}`,
    20,
    170
  );

  doc.text(
    `Turno: ${formData.turno}`,
    20,
    180
  );

  doc.text(
  `Diseño: ${formData.diseno}`,
  20,
  190
);

doc.text(
  `Tripulación: ${formData.tripulacion}`,
  20,
  200
);

doc.text(
  `Placas/Número: ${formData.placasNumero}`,
  20,
  210
);

doc.text(
  `Alérgeno y/o Micro Sensitivo: ${formData.alergeno}`,
  20,
  220
);

doc.text(
  `Orden de Compra IEQSA: ${formData.ordenCompra}`,
  20,
  230
);

doc.text(
  `Factura / Remisión: ${formData.facturaRemision}`,
  20,
  240
);

}

    doc.save(
      formData.tipoChecklist === "SG-F-24-01"
        ? "SG-F-24-01.pdf"
        : "Checklist_de_verificacion_de_unidad.pdf"
    );

    toast.success("PDF generado");
  };

  const guardarChecklist = async () => {

    let nuevosErrores = {};
    let primerError = null;

if (formData.tipoChecklist === "CHK-TRANSPORTE") {

  if (!formData.nombreOperador) {
    nuevosErrores.nombreOperador =
      "Ingrese el nombre del operador";
  }

  if (!formData.lineaTransporte) {
    nuevosErrores.lineaTransporte =
      "Ingrese la línea de transporte";
  }

  if (!formData.placasTracto) {
    nuevosErrores.placasTracto =
      "Ingrese las placas";
  }

}

if (formData.tipoChecklist === "SG-F-24-01") {

  if (!formData.proveedor) {
  nuevosErrores.proveedor =
    "Ingrese el proveedor";

  document
    .querySelector('[name="proveedor"]')
    ?.focus();
  
}

  if (!formData.material) {
  nuevosErrores.material =
    "Ingrese el material";

  if (!primerError) {
    primerError = "material";
  }

}
  if (!formData.operador) {
    nuevosErrores.operador =
      "Ingrese el operador";
  }

  if (!formData.lote) {
    nuevosErrores.lote =
      "Ingrese el lote";
  }

  if (!formData.turno) {
    nuevosErrores.turno =
      "Ingrese el turno";
  }

}

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

      const response = await fetch(
        "https://localhost:7030/api/checklist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      console.log("STATUS:", response.status);
      console.log("RESPUESTA:", response);

      const data = await response.json();

      console.log("DATA:", data);

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

  return (

    <div className="container">

      <ToastContainer />

      {!checklistSeleccionado && (

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

)}

      <div className="layout-operativo">

        <div className="selector-checklist">

{!checklistSeleccionado && (
       <div className="bienvenida-checklist">

  <h2>
    Seleccione el checklist que desea capturar
  </h2>

  <p>
    Haga clic en una opción para comenzar.
  </p>

</div>

)}

{!checklistSeleccionado && (

  <div className="tarjetas-checklist">

    <div
      className="tarjeta-checklist"
      onClick={() => {
        setChecklistSeleccionado("CHK-TRANSPORTE");
        setFormData({
          ...formData,
          tipoChecklist: "CHK-TRANSPORTE"
        });
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
        setFormData({
          ...formData,
          tipoChecklist: "SG-F-24-01"
        });
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
        setFormData({
          ...formData,
          tipoChecklist: "RH-F-01-21"
        });
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
    setFormData({
      ...formData,
      tipoChecklist: "SG-F-24-33"
    });
  }}
>
  <h3>🧪 Recepción de Productos Químicos</h3>

  <p>SG-F-24-33</p>

  <small>
    Recepción de productos químicos, materiales e ingredientes.
  </small>

</div>

  </div>


)}

{checklistSeleccionado && (

  <div className="contenedor-regresar">

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
      ← Regresar
    </button>

  </div>

)}

{checklistSeleccionado === "SG-F-24-33" && (

    <SGF2433Section
        formData={formData}
        handleChange={handleChange}
    />

)}

{checklistSeleccionado &&
 checklistSeleccionado !== "RH-F-01-21" && (

  <CardSection title="INFORMACIÓN GENERAL">

    <InputField
      label="Fecha"
      name="fecha"
      value={formData.fecha}
      onChange={handleChange}
    />

    <InputField
      label="Hora"
      value={formData.hora}
      onChange={handleChange}
    />

    <div className="grupo">

      <label>Status</label>

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Aprobado</option>
        <option>Rechazado</option>
        <option>Terreno</option>

      </select>

    </div>

  </CardSection>

)}

          {checklistSeleccionado === "CHK-TRANSPORTE" && (
            <>

            <HeaderChecklist
              codigo="SG-F-24-06"
              titulo="CHECKLIST DE VERIFICACIÓN DE UNIDAD"
              subtitulo="Auditoría de Transporte"
            />

            <DatosGeneralesTransporte
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            </>
)}

          {checklistSeleccionado === "CHK-TRANSPORTE" && (
            <>
          <DocumentacionSection
            formData={formData}
            handleChange={handleChange}
          />

          <OperadorSection
            formData={formData}
            handleChange={handleChange}
          />

          <RemolqueSection
            formData={formData}
            handleChange={handleChange}
          />

          <EnrampadoSection
            formData={formData}
            handleChange={handleChange}
          />

          <EstadoRemolqueSection
            formData={formData}
            handleChange={handleChange}
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
        >

          <option>Aprobado</option>
          <option>Rechazado</option>

        </select>

      </div>

    </CardSection>



    <DatosGeneralesSGF2401
      formData={formData}
      handleChange={handleChange}
      errors={errors}
    />

    <SGF2401Section
      formData={formData}
      handleChange={handleChange}
    />
  
    <MermaAzucarSection
      formData={formData}
      handleChange={handleChange}
    />

    <EstadoSupersacoSection
      formData={formData}
      handleChange={handleChange}
    />

    <ObservacionesSGF2401
      formData={formData}
      handleChange={handleChange}
    />
  </>
)}

{checklistSeleccionado === "SG-F-24-33" && (
  <>

    <HeaderChecklist
      codigo="SG-F-24-33"
      titulo="RECEPCIÓN DE PRODUCTOS QUÍMICOS, MATERIALES E INGREDIENTES"
      subtitulo="Recepción y Verificación"
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

      <GradoRiesgoSection
        formData={formData}
        handleChange={handleChange}
      />

      <div className="grupo">

        <label>Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Pendiente</option>
          <option>En revisión</option>
          <option>Aprobado</option>
          <option>Rechazado</option>
        </select>

      </div>

    </CardSection>

    <SGF2433Section
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
    >

      <option>Pendiente</option>
      <option>En revisión</option>
      <option>Aprobado</option>
      <option>Rechazado</option>

    </select>

  </div>

</CardSection>

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
    <EvidenciasSection />

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
    >
      Generar PDF
    </button>
  </>
)}
        </div>
        <div className="main-operativo">

  {checklistSeleccionado === "CHK-TRANSPORTE" && (
    <>
      <TireInspection
        remolque1={formData.remolque1}
        remolque2={formData.remolque2}
      />

      <DashboardSection
        historial={historial}
      />

      <HistorialSection
        historial={historial}
        editarChecklist={editarChecklist}
        eliminarChecklist={eliminarChecklist}
        verDetalle={verDetalle}
      />

      <SupervisorSection
        historial={historial}
        verDetalle={verDetalle}
      />
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
