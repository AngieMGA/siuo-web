import CardSection from "./CardSection";
import InputField from "./InputField";

function NivelTanque2433({
  formData,
  handleChange
}) {

  return (

    <CardSection title="NIVEL DEL TANQUE">

      <div className="grid-sgf2433">

        <InputField
          label="Nivel antes del trasvase (% / Lts / Kg)"
          name="nivelAntes"
          value={formData.nivelAntes}
          onChange={handleChange}
        />

        <InputField
          label="Nivel al término del trasvase (% / Lts / Kg)"
          name="nivelDespues"
          value={formData.nivelDespues}
          onChange={handleChange}
        />

      </div>

      <div className="grid-check2433">

        <label>
          <input
            type="checkbox"
            name="conosSeguridad"
            checked={formData.conosSeguridad}
            onChange={handleChange}
          />
          Colocación de conos de seguridad
        </label>

        <label>
          <input
            type="checkbox"
            name="ventilarOperacion"
            checked={formData.ventilarOperacion}
            onChange={handleChange}
          />
          Ventilar operación
        </label>

        <label>
          <input
            type="checkbox"
            name="contenedorIdentificado"
            checked={formData.contenedorIdentificado}
            onChange={handleChange}
          />
          Contenedor identificado y cerrado
        </label>

        <label>
          <input
            type="checkbox"
            name="identificacionNOM"
            checked={formData.identificacionNOM}
            onChange={handleChange}
          />
          Cuenta con identificación NOM-SCT
        </label>

      </div>

    </CardSection>

  );

}

export default NivelTanque2433;