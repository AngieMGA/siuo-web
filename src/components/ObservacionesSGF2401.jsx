import CardSection from "./CardSection";

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

    </CardSection>

  );
}

export default ObservacionesSGF2401;