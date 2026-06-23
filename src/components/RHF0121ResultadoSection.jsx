import CardSection from "./CardSection";

function RHF0121ResultadoSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="RESULTADO DE INSPECCIÓN">

      <div className="grupo">

        <label>
          Resultado Final
        </label>

        <div className="resultado-cards">

  <div
    className={`resultado-card ${
      formData.resultadoFinal === "Aceptada"
        ? "seleccionada-aprobada"
        : ""
    }`}
    onClick={() =>
      handleChange({
        target: {
          name: "resultadoFinal",
          value: "Aceptada"
        }
      })
    }
  >
    🟢

    <h3>Aceptada</h3>

  </div>

  <div
    className={`resultado-card ${
      formData.resultadoFinal === "Rechazada"
        ? "seleccionada-rechazada"
        : ""
    }`}
    onClick={() =>
      handleChange({
        target: {
          name: "resultadoFinal",
          value: "Rechazada"
        }
      })
    }
  >
    🔴
    

    <h3>Rechazada</h3>

  </div>

</div>

      </div>

      {formData.resultadoFinal === "Aceptada" && (

  <div className="grupo">

    <label>
      Rampa asignada para cargar
    </label>

    <select
      name="rampaAsignada"
      value={formData.rampaAsignada || ""}
      onChange={handleChange}
    >

      <option value="">
        Seleccione una rampa
      </option>

      <option value="1">Rampa 1</option>
      <option value="2">Rampa 2</option>
      <option value="3">Rampa 3</option>
      <option value="4">Rampa 4</option>
      <option value="5">Rampa 5</option>
      <option value="6">Rampa 6</option>
      <option value="7">Rampa 7</option>
      <option value="8">Rampa 8</option>
      <option value="9">Rampa 9</option>
      <option value="10">Rampa 10</option>
      <option value="11">Rampa 11</option>
      <option value="12">Rampa 12</option>
      <option value="13">Rampa 13</option>
      <option value="14">Rampa 14</option>

    </select>

  </div>

)}

    </CardSection>

  );

}

export default RHF0121ResultadoSection;