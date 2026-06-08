import CardSection from "./CardSection";
import { checklistSGF2401 } from "../data/checklistSGF2401";

function SGF2401Section({
  formData,
  handleChange
}) {

  return (

    <CardSection title="SG-F-24-01">

      {checklistSGF2401.secciones.map((seccion) => (

        <div
          key={seccion.id}
          style={{ marginBottom: "30px" }}
        >

          <h3>{seccion.nombre}</h3>

          <table className="sgf-table">

  <thead>

    <tr>
      <th>Pregunta</th>
      <th>Cumple</th>
      <th>No Cumple</th>
    </tr>

  </thead>

  <tbody>

    {seccion.preguntas.map((pregunta) => (

      <tr key={pregunta.id}>

        <td className="pregunta">
          {pregunta.texto}
        </td>

        <td className="radio-cell">
          <input
            type="radio"
            name={pregunta.id}
            value="cumple"
            checked={
                formData[pregunta.id] === "cumple"
            }
            onChange={handleChange}
            />
        </td>

        <td className="radio-cell">
          <input
            type="radio"
            name={pregunta.id}
            value="noCumple"
            checked={
                formData[pregunta.id] === "noCumple"
            }
            onChange={handleChange}
        />
        </td>

      </tr>

    ))}

  </tbody>

</table>
        </div>

      ))}

    </CardSection>

  );
}

export default SGF2401Section;