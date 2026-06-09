import CardSection from "./CardSection";
import InputField from "./InputField";

function DatosGeneralesTransporte({
  formData,
  handleChange,
  errors
}) {

  return (

    <CardSection title="DATOS GENERALES">

      <InputField
        label="Folio"
        name="folio"
        value={formData.folio}
        onChange={handleChange}
      />

      <InputField
        label="Nombre del Inspector"
        name="inspector"
        value={formData.inspector}
        onChange={handleChange}
      />

      <InputField
        label="Nombre del operador"
        name="nombreOperador"
        value={formData.nombreOperador}
        onChange={handleChange}
        error={errors.nombreOperador}
      />

      <InputField
        label="Teléfono del operador"
        name="telefonoOperador"
        value={formData.telefonoOperador}
        onChange={handleChange}
      />

      <InputField
        label="Línea de transporte"
        name="lineaTransporte"
        value={formData.lineaTransporte}
        onChange={handleChange}
        error={errors.lineaTransporte}
      />

      <InputField
        label="Placas y Tarjeta de Circulación"
        name="placasytarjetacirculacion"
        value={formData.placasytarjetacirculacion}
        onChange={handleChange}
      />

      <InputField
        label="Remolque 1"
        name="remolque1"
        value={formData.remolque1}
        onChange={handleChange}
      />

      <InputField
        label="Remolque 2"
        name="remolque2"
        value={formData.remolque2}
        onChange={handleChange}
      />

      <InputField
        label="Engomado de verificación federal vigente"
        name="engomadoVerificacion"
        value={formData.engomadoVerificacion}
        onChange={handleChange}
      />

      <InputField
        label="Engomado físico mecánico vigente"
        name="engomadoFisico"
        value={formData.engomadoFisico}
        onChange={handleChange}
      />

    </CardSection>

  );
}

export default DatosGeneralesTransporte;