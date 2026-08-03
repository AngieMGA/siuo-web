import CardSection from "./CardSection";
import SelectionCard from "./SelectionCard";

function RHF0121ResultadoSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="INSPECCIÓN">

      <div className="grupo">

        <label>
          Resultado Final
        </label>
      
      </div>

        <div className="selection-group">

  <SelectionCard
    titulo="Aceptada"
    icono="✅"
    tipo="success"
    seleccionado={
      formData.resultadoFinal === "Aceptada"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"resultadoFinal",
          value:"Aceptada"
        }
      })
    }
  />

  <SelectionCard
    titulo="Rechazada"
    icono="❌"
    tipo="danger"
    seleccionado={
      formData.resultadoFinal === "Rechazada"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"resultadoFinal",
          value:"Rechazada"
        }
      })
    }
  />

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

      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>

    </select>

  </div>

)}

    </CardSection>

  );

}

export default RHF0121ResultadoSection;