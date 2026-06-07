import CardSection from "./CardSection";
import InputField from "./InputField";
import StatusButton from "./StatusButton";
import { checklistTransporte } from "../data/checklistTransporte";

function RemolqueSection({
  formData,
  handleChange
}) {
const preguntasRemolque =
  checklistTransporte.secciones.find(
    (s) => s.id === "REM"
  ).preguntas;

  return (

    <CardSection title="REMOLQUE">

      <table className="check-table">

        <thead>

          <tr>

            <th></th>

            <th>Rem 1</th>

            <th>Rem 2</th>

          </tr>

        </thead>

        <tbody>

  {preguntasRemolque.map((pregunta) => (

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

      <InputField
        label="Tipo suspensión"
        name="suspension"
        value={formData.suspension}
        onChange={handleChange}
      />

    </CardSection>
  );
}

export default RemolqueSection;