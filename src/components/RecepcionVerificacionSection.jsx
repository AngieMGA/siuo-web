import CardSection from "./CardSection";
import InputField from "./InputField";

function RecepcionVerificacionSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="RECEPCIÓN Y VERIFICACIÓN">

      <div className="grid-sgf2401">

        <InputField
          label="Nombre de quien recibe"
          name="nombreRecibe"
          value={formData.nombreRecibe || ""}
          onChange={handleChange}
        />

        <InputField
          label="Nombre Supervisor / Verificó"
          name="nombreSupervisor"
          value={formData.nombreSupervisor || ""}
          onChange={handleChange}
        />

      </div>

    </CardSection>

  );
}

export default RecepcionVerificacionSection;