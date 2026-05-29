import { useEffect, useState } from "react";

import "../styles/RegistroInicial.css";

import InputField from "../components/InputField";
import CardSection from "../components/CardSection";

import DocumentacionSection from "../components/DocumentacionSection";
import OperadorSection from "../components/OperadorSection";
import RemolqueSection from "../components/RemolqueSection";
import EvidenciasSection from "../components/EvidenciasSection";
import HistorialSection from "../components/HistorialSection";
import DashboardSection from "../components/DashboardSection";
import TruckInspection from "../components/TruckInspection";
import TireInspection from "../components/TireInspection";
import ModalDetalle from "../components/ModalDetalle";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import jsPDF from "jspdf";

function RegistroInicial() {

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

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

  const formularioInicial = {
    
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
    lineaTransporte: "",
    placasTracto: "",
    telefonoOperador: "",
    remolque1: "",
    remolque2: "",

    placas: false,
    tarjetaCirculacion: false,
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
    logo: false,

    fugaAditivo: false,
    especificacionFuga: ""

  };

  const [formData, setFormData] =
    useState(formularioInicial);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

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

    doc.text("SIUO CHECKLIST", 20, 20);

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

    doc.save("SIUO_Checklist.pdf");

    toast.success("PDF generado");
  };

  const guardarChecklist = async () => {

    let nuevosErrores = {};

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

    setErrors(nuevosErrores);

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

      await response.json();

      toast.success(
        "Checklist enviado correctamente"
      );

      setHistorial([
        formData,
        ...historial
      ]);

      setFormData(formularioInicial);

    } catch (error) {

      console.error(error);

      toast.error(
        "Error al enviar checklist"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="container">

      <ToastContainer />

      <h1 className="titulo">
        SIUO CHECKLIST
      </h1>

      <div className="layout-operativo">

        <div className="sidebar-operativo">

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

                <option>
                  Pendiente
                </option>

                <option>
                  En revisión
                </option>

                <option>
                  Aprobado
                </option>

                <option>
                  Rechazado
                </option>

              </select>

            </div>

          </CardSection>

          <CardSection title="DATOS GENERALES">

            <InputField
              label="Nombre del operador"
              name="nombreOperador"
              value={formData.nombreOperador}
              onChange={handleChange}
              error={errors.nombreOperador}
            />

            <InputField
              label="Línea de transporte"
              name="lineaTransporte"
              value={formData.lineaTransporte}
              onChange={handleChange}
              error={errors.lineaTransporte}
            />

            <InputField
              label="Placas del tracto"
              name="placasTracto"
              value={formData.placasTracto}
              onChange={handleChange}
              error={errors.placasTracto}
            />

            <InputField
              label="Teléfono del operador"
              name="telefonoOperador"
              value={formData.telefonoOperador}
              onChange={handleChange}
            />

            <InputField
              label="Remolque 1"
              name="remolque1"
              value={formData.remolque1}
              onChange={handleChange}
            />

            <InputField
              label="Remolque 2"
              name="remolque2"
              value={formData.remolque2}
              onChange={handleChange}
            />

          </CardSection>

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

        </div>

        <div className="main-operativo">

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
