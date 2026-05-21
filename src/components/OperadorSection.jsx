import CheckItem from "./CheckItem";
import CardSection from "./CardSection";

function OperadorSection({
  formData,
  handleChange
}) {
  return (

    <CardSection title="OPERADOR">

      <CheckItem
        label="Alta ante el IMSS vigente"
        name="imss"
        checked={formData.imss}
        onChange={handleChange}
      />

      <CheckItem
        label="Identificación oficial"
        name="identificacion"
        checked={formData.identificacion}
        onChange={handleChange}
      />

      <CheckItem
        label="Uniforme / Chaleco"
        name="uniforme"
        checked={formData.uniforme}
        onChange={handleChange}
      />

      <CheckItem
        label="Presentación del operador"
        name="presentacion"
        checked={formData.presentacion}
        onChange={handleChange}
      />

    </CardSection>
  );
}

export default OperadorSection;