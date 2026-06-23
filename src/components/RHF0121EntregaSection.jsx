import CardSection from "./CardSection";
import InputField from "./InputField";

function RHF0121EntregaSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="DATOS DE ENTREGA">

      <InputField
        label="Origen (Descarga)"
        name="origenDescarga"
        value={formData.origenDescarga || ""}
        onChange={handleChange}
      />

      <InputField
        label="Destino (Carga)"
        name="destinoCarga"
        value={formData.destinoCarga || ""}
        onChange={handleChange}
      />

      <InputField
        label="Número de Sellos / Fleje"
        name="numeroSellos"
        value={formData.numeroSellos || ""}
        onChange={handleChange}
      />

      <InputField
        label="No. Delivery"
        name="numeroDelivery"
        value={formData.numeroDelivery || ""}
        onChange={handleChange}
      />

    </CardSection>

  );

}

export default RHF0121EntregaSection;