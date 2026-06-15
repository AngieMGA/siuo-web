import CardSection from "./CardSection";
import InputField from "./InputField";

function ObservacionesSGF2401({
  formData,
  handleChange
}) {

  return (

    <CardSection title="OBSERVACIONES">

      <textarea
        name="observacionesSGF2401"
        value={
          formData.observacionesSGF2401 || ""
        }
        onChange={handleChange}
        rows="6"
        style={{
          width: "100%",
          resize: "vertical"
        }}
      />

      <div
        style={{
          marginTop: "20px"
        }}
      >

        <InputField
          label="Nombre quien recibe"
          name="nombreRecibe"
          value={formData.nombreRecibe}
          onChange={handleChange}
        />

        <InputField
          label="Nombre Supervisor / Verifico"
          name="nombreSupervisor"
          value={formData.nombreSupervisor}
          onChange={handleChange}
        />

      </div>

    </CardSection>

  );
}

export default ObservacionesSGF2401;