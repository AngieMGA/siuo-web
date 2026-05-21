import CheckItem from "./CheckItem";
import CardSection from "./CardSection";

function DocumentacionSection({
  formData,
  handleChange
}) {
  return (

    <CardSection title="DOCUMENTACIÓN">

      <CheckItem
        label="Placas"
        name="placas"
        checked={formData.placas}
        onChange={handleChange}
      />

      <CheckItem
        label="Tarjeta de circulación"
        name="tarjetaCirculacion"
        checked={formData.tarjetaCirculacion}
        onChange={handleChange}
      />

      <CheckItem
        label="Coinciden con documentación"
        name="coincidenDocumentacion"
        checked={formData.coincidenDocumentacion}
        onChange={handleChange}
      />

      <CheckItem
        label="Carta porte debidamente llenada"
        name="cartaPorte"
        checked={formData.cartaPorte}
        onChange={handleChange}
      />

    </CardSection>
  );
}

export default DocumentacionSection;