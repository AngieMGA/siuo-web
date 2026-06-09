import CardSection from "./CardSection";
import InputField from "./InputField";

function DatosGeneralesSGF2401({
  formData,
  handleChange
}) {

  return (

    <CardSection title="DATOS GENERALES SG-F-24-01">

      <InputField
        label="Folio"
        name="folio"
        value={formData.folio}
        onChange={handleChange}
      />

      <InputField
        label="Proveedor"
        name="proveedor"
        value={formData.proveedor}
        onChange={handleChange}
      />

      <InputField
        label="Material"
        name="material"
        value={formData.material}
        onChange={handleChange}
      />

      <InputField
        label="Operador"
        name="operador"
        value={formData.operador}
        onChange={handleChange}
      />

      <InputField
        label="Lote"
        name="lote"
        value={formData.lote}
        onChange={handleChange}
      />

      <InputField
        label="Turno"
        name="turno"
        value={formData.turno}
        onChange={handleChange}
      />

      <InputField
        label="Orden de Compra IEQSA"
        name="ordenCompra"
        value={formData.ordenCompra}
        onChange={handleChange}
      />

      <InputField
        label="Factura / Remisión"
        name="facturaRemision"
        value={formData.facturaRemision}
        onChange={handleChange}
      />
      <InputField
        label="Diseño"
        name="diseno"
        value={formData.diseno}
        onChange={handleChange}
      />

      <InputField
        label="Tripulación"
        name="tripulacion"
        value={formData.tripulacion}
        onChange={handleChange}
      />

      <InputField
        label="Placas / Número"
        name="placasNumero"
        value={formData.placasNumero}
        onChange={handleChange}
      />

    </CardSection>

  );
}

export default DatosGeneralesSGF2401;