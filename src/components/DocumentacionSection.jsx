import CardSection from "./CardSection";
import StatusButton from "./StatusButton.jsx";
import { checklistTransporte } from "../data/checklistTransporte";

function DocumentacionSection({
  formData,
  handleChange
}) {

  const preguntasDocumentacion =
  checklistTransporte.secciones.find(
    (s) => s.id === "DOC"
  ).preguntas;

  return (

    <CardSection title="DOCUMENTACIÓN">

      <table className="check-table">

        <thead>

          <tr>

            <th></th>

            <th>Rem 1</th>

            <th>Rem 2</th>

          </tr>

        </thead>

        <tbody>

  {preguntasDocumentacion.map((pregunta) => (

    <tr key={pregunta.id}>

  <td>
    <strong>{pregunta.texto}</strong>
  </td>

  <td>

    <StatusButton
      active={formData[`${pregunta.id}-REM1`] || false}
      onClick={() =>
        handleChange({
          target: {
            name: `${pregunta.id}-REM1`,
            type: "checkbox",
            checked:
              !formData[`${pregunta.id}-REM1`]
          }
        })
      }
    />

  </td>

  <td>

    <StatusButton
      active={formData[`${pregunta.id}-REM2`] || false}
      onClick={() =>
        handleChange({
          target: {
            name: `${pregunta.id}-REM2`,
            type: "checkbox",
            checked:
              !formData[`${pregunta.id}-REM2`]
          }
        })
      }
    />

  </td>

</tr>

  ))}

</tbody>

      </table>

    </CardSection>
  );
}

export default DocumentacionSection;