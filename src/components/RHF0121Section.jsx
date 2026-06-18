import CardSection from "./CardSection";
import { checklistRHF0121 } from "../data/checklistRHF0121";

function RHF0121Section({
  formData,
  handleChange
}) {

  return (

    <CardSection title="RH-F-01-21 Inspección de Tractor y Remolque">

      {checklistRHF0121.secciones.map((seccion) => (

        <div
          key={seccion.id}
          style={{ marginBottom: "30px" }}
        >

          <h3>{seccion.nombre}</h3>

          <table className="sgf-table">

            <thead>

              <tr>
                <th>Área de Verificación</th>
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

export default RHF0121Section;
