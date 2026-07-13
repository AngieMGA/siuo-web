import CardSection from "./CardSection";
import InputField from "./InputField";

function DatosGeneralesSGF2401({
  formData,
  handleChange,
  errors
}) {
  return (
    <CardSection title="DATOS GENERALES SG-F-24-01">

      <div className="grid-sgf2401">

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
          label="Turno"
          name="turno"
          value={formData.turno}
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

        {errors?.tripulacion && (
          <p style={{ color: "red" }}>
            {errors.tripulacion}
          </p>
        )}

        <InputField
          label="Placas / Número"
          name="placasNumero"
          value={formData.placasNumero}
          onChange={handleChange}
        />

        {errors?.placasNumero && (
          <p style={{ color: "red" }}>
            {errors.placasNumero}
          </p>
        )}

        <InputField
          label="Factura / Remisión"
          name="facturaRemision"
          value={formData.facturaRemision}
          onChange={handleChange}
        />

        {errors?.facturaRemision && (
          <p style={{ color: "red" }}>
            {errors.facturaRemision}
          </p>
        )}

      </div>

    </CardSection>
  );
}

export default DatosGeneralesSGF2401;