import { useState } from "react";

import "../styles/RegistroInicial.css";

import CheckItem from "../components/CheckItem";
import InputField from "../components/InputField";
import CardSection from "../components/CardSection";

function RegistroInicial() {

  const [formData, setFormData] = useState({
    nombreOperador: "",
    lineaTransporte: "",
    placasTracto: "",
    telefonoOperador: "",
    remolque1: "",
    remolque2: "",

    placas: false,
    tarjetaCirculacion: false,
    coincidenDocumentacion: false,
    cartaPorte: false
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox"
        ? checked
        : value
    });
  };

  const guardarChecklist = () => {

    console.log(formData);

    alert("Checklist guardado");
  };

  return (
    <div className="container">

      <h1 className="titulo">
        SIUO CHECKLIST
      </h1>

      {/* DATOS GENERALES */}

      <CardSection title="DATOS GENERALES">

        <InputField
          label="Nombre del operador"
          name="nombreOperador"
          value={formData.nombreOperador}
          onChange={handleChange}
        />

        <InputField
          label="Línea de transporte"
          name="lineaTransporte"
          value={formData.lineaTransporte}
          onChange={handleChange}
        />

        <InputField
          label="Placas del tracto"
          name="placasTracto"
          value={formData.placasTracto}
          onChange={handleChange}
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

      {/* DOCUMENTACIÓN */}

      <CardSection title="DOCUMENTACIÓN">

        <CheckItem
          label="Placas"
          name="placas"
          checked={formData.placas}
          onChange={handleChange}
        />

        <CheckItem
          label="Tarjeta de circulación"
          name="tarjetaCirculacion"
          checked={formData.tarjetaCirculacion}
          onChange={handleChange}
        />

        <CheckItem
          label="Coinciden con documentación"
          name="coincidenDocumentacion"
          checked={formData.coincidenDocumentacion}
          onChange={handleChange}
        />

        <CheckItem
          label="Carta porte debidamente llenada"
          name="cartaPorte"
          checked={formData.cartaPorte}
          onChange={handleChange}
        />

      </CardSection>

      {/* BOTÓN */}

      <button
        className="boton"
        onClick={guardarChecklist}
      >
        Guardar Checklist
      </button>

    </div>
  );
}

export default RegistroInicial;