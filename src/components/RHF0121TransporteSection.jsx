import CardSection from "./CardSection";

function RHF0121TransporteSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="DATOS DEL TRANSPORTE">

      <div className="grupo">

        <label>Tipo de Transporte</label>

        <select
          name="tipoTransporte"
          value={formData.tipoTransporte || ""}
          onChange={handleChange}
        >
          <option value="">
            Seleccione
          </option>

          <option value="Nacional">
            Nacional
          </option>

          <option value="Exportacion">
            Exportación
          </option>

        </select>

      </div>

      <div className="grupo">

        <label>Configuración</label>

        <select
          name="configuracionTransporte"
          value={formData.configuracionTransporte || ""}
          onChange={handleChange}
        >
          <option value="">
            Seleccione
          </option>

          <option value="Sencillo">
            Sencillo
          </option>

          <option value="Full">
            Full
          </option>

          <option value="Contenedor">
            Contenedor
          </option>

        </select>

      </div>

      <label>Ajuste el medidor de acuerdo al nivel de combustible (%)</label>

      <div className="grupo">

        <input
          type="range"
          min="0"
          max="100"
          name="nivelCombustible"
          value={formData.nivelCombustible || 50}
          onChange={handleChange}
          />

        <p>
          {formData.nivelCombustible || 50}%
        </p>

        <p>

          {(formData.nivelCombustible || 50) >= 51
            ? "✅ Mayor a 1/2 tanque"
            : "❌ Menor a 1/2 tanque"}

        </p>

      </div>

    </CardSection>

  );

}

export default RHF0121TransporteSection;