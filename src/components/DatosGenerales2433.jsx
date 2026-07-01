import CardSection from "./CardSection";
import InputField from "./InputField";

function DatosGenerales2433({
  formData,
  handleChange
}) {

  return (

    <CardSection title="DATOS GENERALES">

      <div className="grid-sgf2433">

        <InputField
          label="Nombre del producto químico y/o material"
          name="nombreProducto"
          value={formData.nombreProducto}
          onChange={handleChange}
        />

        <InputField
          label="Fecha de recepción"
          name="fechaRecepcion"
          type="date"
          value={formData.fechaRecepcion}
          onChange={handleChange}
        />

        <InputField
          label="Hora de recepción"
          name="horaRecepcion"
          type="time"
          value={formData.horaRecepcion}
          onChange={handleChange}
        />

        <InputField
          label="Operador"
          name="operador2433"
          value={formData.operador2433}
          onChange={handleChange}
        />

        <InputField
          label="Placas"
          name="placas2433"
          value={formData.placas2433}
          onChange={handleChange}
        />

        <InputField
          label="Fecha de término"
          name="fechaTerminoRecepcion"
          type="date"
          value={formData.fechaTerminoRecepcion}
          onChange={handleChange}
        />

        <InputField
          label="Hora de término"
          name="horaTerminoRecepcion"
          type="time"
          value={formData.horaTerminoRecepcion}
          onChange={handleChange}
        />

        <InputField
          label="Número de sellos"
          name="numeroSellos2433"
          value={formData.numeroSellos2433}
          onChange={handleChange}
        />

        <InputField
          label="Número de factura"
          name="numeroFactura2433"
          value={formData.numeroFactura2433}
          onChange={handleChange}
        />

        <InputField
          label="Turno"
          name="turno2433"
          value={formData.turno2433}
          onChange={handleChange}
        />

        <InputField
          label="Tripulación"
          name="tripulacion2433"
          value={formData.tripulacion2433}
          onChange={handleChange}
        />

      </div>

    </CardSection>

  );

}

export default DatosGenerales2433;