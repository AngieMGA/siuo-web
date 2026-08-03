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
  type="select"
  options={[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "Patio"
  ]}
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