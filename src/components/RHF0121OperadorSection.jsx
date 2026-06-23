import CardSection from "./CardSection";
import InputField from "./InputField";

function RHF0121OperadorSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="DATOS DEL OPERADOR">

      <div className="grupo">

        <label>
          Presentación del Operador
        </label>

        <select
          name="presentacionOperador"
          value={formData.presentacionOperador || ""}
          onChange={handleChange}
        >
          <option value="">
            Seleccione
          </option>

          <option value="Bien">
            Bien
          </option>

          <option value="Mal">
            Mal
          </option>

        </select>

      </div>

      <InputField
        label="Número Licencia Federal"
        name="numeroLicencia"
        value={formData.numeroLicencia || ""}
        onChange={handleChange}
      />

      <InputField
        label="Número Tarjeta de Circulación"
        name="numeroTarjeta"
        value={formData.numeroTarjeta || ""}
        onChange={handleChange}
      />

      <InputField
        label="Número IMSS"
        name="numeroIMSS"
        value={formData.numeroIMSS || ""}
        onChange={handleChange}
      />

      <InputField
        label="Número Seguro Vigente"
        name="numeroSeguro"
        value={formData.numeroSeguro || ""}
        onChange={handleChange}
      />

      <InputField
        label="Número Carta Porte"
        name="numeroCartaPorte"
        value={formData.numeroCartaPorte || ""}
        onChange={handleChange}
      />

      <div className="grupo">

        <label>
          Observaciones EPP
        </label>

        <textarea
          name="observacionesEPP"
          value={formData.observacionesEPP || ""}
          onChange={handleChange}
          rows="4"
        />

      </div>

    </CardSection>

  );

}

export default RHF0121OperadorSection;