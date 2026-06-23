import CardSection from "./CardSection";

function RHF0121RefrigeradoSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="REFRIGERADO">

      <div className="grupo">

        <label>
          ¿Unidad Refrigerada?
        </label>

        <div className="resultado-cards">

  <div
    className={`resultado-card ${
      formData.refrigerado === "SI"
        ? "seleccionada-aprobada"
        : ""
    }`}
    onClick={() =>
      handleChange({
        target: {
          name: "refrigerado",
          value: "SI"
        }
      })
    }
  >

    🧊

    <h3>Refrigerada</h3>

  </div>

  <div
    className={`resultado-card ${
      formData.refrigerado === "NO"
        ? "seleccionada-rechazada"
        : ""
    }`}
    onClick={() =>
      handleChange({
        target: {
          name: "refrigerado",
          value: "NO"
        }
      })
    }
  >

    🚚

    <h3>No Refrigerada</h3>

  </div>

</div>

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