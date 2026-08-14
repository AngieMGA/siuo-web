import CardSection from "./CardSection";
import InputField from "./InputField";

function SGF2401InformacionGeneral({ formData, handleChange }) {
  return (

    <CardSection title="INFORMACIÓN GENERAL">

      <InputField
        label="Folio"
        name="folio"
        value={formData.folio}
        onChange={handleChange}
        disabled
      />

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

    </CardSection>
  );
}

export default SGF2401InformacionGeneral;