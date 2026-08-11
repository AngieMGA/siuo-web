import CardSection from "./CardSection";
import InputField from "./InputField";

function DatosGeneralesTransporte({
  formData,
  handleChange,
  errors,
  puedeEditar
}) {

  return (
    <CardSection title="DATOS GENERALES">

      <InputField
        label="Nombre del Inspector"
        name="inspector"
        value={formData.inspector}
        onChange={handleChange}
        disabled={!puedeEditar}
      />

      <InputField
        label="Nombre del operador"
        name="nombreOperador"
        value={formData.nombreOperador}
        onChange={handleChange}
        error={errors.nombreOperador}
        disabled={!puedeEditar}
      />

      <InputField
        label="Teléfono del operador"
        name="telefonoOperador"
        value={formData.telefonoOperador}
        onChange={handleChange}
        disabled={!puedeEditar}
      />

      <InputField
        label="Línea de transporte"
        name="lineaTransporte"
        value={formData.lineaTransporte}
        onChange={handleChange}
        error={errors.lineaTransporte}
        disabled={!puedeEditar}
      />

      <InputField
        label="Placas y Tarjeta de Circulación"
        name="placasytarjetacirculacion"
        value={formData.placasytarjetacirculacion}
        onChange={handleChange}
        disabled={!puedeEditar}
      />

      <InputField
        label="Remolque 1"
        name="remolque1"
        value={formData.remolque1}
        onChange={handleChange}
        disabled={!puedeEditar}
      />

      <InputField
        label="Remolque 2"
        name="remolque2"
        value={formData.remolque2}
        onChange={handleChange}
        disabled={!puedeEditar}
      />

      <InputField
        label="Engomado de verificación federal vigente"
        name="engomadoVerificacion"
        value={formData.engomadoVerificacion}
        onChange={handleChange}
        disabled={!puedeEditar}
      />

      <InputField
        label="Engomado físico mecánico vigente"
        name="engomadoFisico"
        value={formData.engomadoFisico}
        onChange={handleChange}
        disabled={!puedeEditar}
      />

    </CardSection>
  );
}

export default DatosGeneralesTransporte;