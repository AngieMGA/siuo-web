import CardSection from "./CardSection";
import SelectionCard from "./SelectionCard";

function RHF0121RefrigeradoSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="REFRIGERADO">

      <div className="selection-group">

  <SelectionCard
    titulo="Sí"
    icono="🧊"
    tipo="success"
    seleccionado={
      formData.refrigerado === "SI"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"refrigerado",
          value:"SI"
        }
      })
    }
  />

  <SelectionCard
    titulo="No"
    icono="🚫"
    tipo="danger"
    seleccionado={
      formData.refrigerado === "NO"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"refrigerado",
          value:"NO"
        }
      })
    }
  />

</div>

      {formData.refrigerado === "SI" && (

  <div className="grupo">

    <label>
      Temperatura (°C)
    </label>

    <input
      type="number"
      name="temperatura"
      value={formData.temperatura || ""}
      onChange={handleChange}
    />

  </div>

)}

          </CardSection>

  );

}

export default RHF0121RefrigeradoSection;