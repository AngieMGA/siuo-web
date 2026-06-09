import CardSection from "./CardSection";
import InputField from "./InputField";

function EnrampadoSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="ENRAMPADO">

      <InputField
        label="Rampa"
        name="rampa"
        value={formData.rampa}
        onChange={handleChange}
      />

      <InputField
        label="Lateral"
        name="lateral"
        value={formData.lateral}
        onChange={handleChange}
      />

      <InputField
        label="Observaciones"
        name="observacionesEnrampado"
        value={formData.observacionesEnrampado}
        onChange={handleChange}
      />

    </CardSection>

  );
}

export default EnrampadoSection;