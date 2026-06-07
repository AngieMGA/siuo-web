import CardSection from "./CardSection";
import StatusButton from "./StatusButton";
import { checklistTransporte } from "../data/checklistTransporte";

function OperadorSection({
  formData,
  handleChange
}) {

  const preguntasOperador =
  checklistTransporte.secciones.find(
    (s) => s.id === "OPE"
  ).preguntas;

  return (

    <CardSection title="OPERADOR">

      <table className="check-table">

        <thead>

          <tr>

            <th></th>

            <th>Rem 1</th>

            <th>Rem 2</th>

          </tr>

        </thead>

        <tbody>

  {preguntasOperador.map((pregunta) => (

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

export default OperadorSection;