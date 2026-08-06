import CardSection from "./CardSection";
import InputField from "./InputField";

function RHF0121InformacionGeneral({
  formData,
  handleChange
}) {

  return (

    <CardSection title="INFORMACIÓN GENERAL">

      <InputField
        label="Folio"
        name="folio"
        value={formData.folio}
        readOnly
      />

      <InputField
        label="Fecha"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
      />

      <InputField
        label="Hora"
        name="hora"
        value={formData.hora}
        onChange={handleChange}
      />

      <div className="grupo">

        <label>Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >

          <option>Pendiente</option>
          <option>En revisión</option>
          <option>Aprobado</option>
          <option>Rechazado</option>

        </select>

      </div>

    </CardSection>

  );

}

export default RHF0121InformacionGeneral;