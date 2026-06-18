import CardSection from "./CardSection";
import InputField from "./InputField";

function RHF0121DatosGenerales({
  formData,
  handleChange
}) {

  return (

    <CardSection title="DATOS GENERALES RH-F-01-21">

      <InputField
        label="Fecha y Hora de Llegada"
        name="fechaHoraLlegada"
        value={formData.fechaHoraLlegada}
        onChange={handleChange}
      />

      <InputField
        label="Fecha y Hora de Salida"
        name="fechaHoraSalida"
        value={formData.fechaHoraSalida}
        onChange={handleChange}
      />

      <InputField
        label="Nombre del Operador"
        name="nombreOperadorRHF"
        value={formData.nombreOperadorRHF}
        onChange={handleChange}
      />

      <InputField
        label="Línea de Transporte"
        name="lineaTransporteRHF"
        value={formData.lineaTransporteRHF}
        onChange={handleChange}
      />

      <InputField
        label="Número de Tractor"
        name="numeroTractor"
        value={formData.numeroTractor}
        onChange={handleChange}
      />

      <InputField
        label="Número de Remolque 1"
        name="numeroRemolque1"
        value={formData.numeroRemolque1}
        onChange={handleChange}
      />

      <InputField
        label="Número de Remolque 2"
        name="numeroRemolque2"
        value={formData.numeroRemolque2}
        onChange={handleChange}
      />

      <InputField
        label="Placas Tractor"
        name="placasTractor"
        value={formData.placasTractor}
        onChange={handleChange}
      />

      <InputField
        label="Placas Remolque 1"
        name="placasRemolque1"
        value={formData.placasRemolque1}
        onChange={handleChange}
      />

      <InputField
        label="Placas Remolque 2"
        name="placasRemolque2"
        value={formData.placasRemolque2}
        onChange={handleChange}
      />

    </CardSection>

  );
}

export default RHF0121DatosGenerales;