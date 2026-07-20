import CardSection from "./CardSection";
import StatusButton from "./StatusButton";
import TruckDiagram from "./TruckDiagram"; 

const preguntasEstadoRemolque = [

  {
    id: "EST-001",
    texto: "Piso"
  },

  {
    id: "EST-002",
    texto: "Techo"
  },

  {
    id: "EST-003",
    texto: "Paredes"
  },

  {
    id: "EST-004",
    texto: "Olor en caja"
  },

  {
    id: "EST-005",
    texto: "Limpieza"
  },

  {
    id: "EST-006",
    texto: "Plagas"
  },

  {
    id: "EST-007",
    texto: "Devuelve producto terminado o tarimas"
  }

];

function EstadoRemolqueSection({
  formData,
  handleChange
}) {

  return (

      <>

    <CardSection title="ESTADO DEL REMOLQUE">

      <table className="check-table">

        <thead>

          <tr>

            <th>Concepto</th>

            <th>REM 1</th>

            <th>REM 2</th>

          </tr>

        </thead>

        <tbody>

          {preguntasEstadoRemolque.map((pregunta) => (

            <tr key={pregunta.id}>

              <td>
                <strong>{pregunta.texto}</strong>
              </td>

              <td>

                <StatusButton
                  active={
                    formData[
                      `${pregunta.id}-REM1`
                    ] || false
                  }
                  onClick={() =>
                    handleChange({
                      target: {
                        name:
                          `${pregunta.id}-REM1`,
                        type: "checkbox",
                        checked:
                          !formData[
                            `${pregunta.id}-REM1`
                          ]
                      }
                    })
                  }
                />

              </td>

              <td>

                <StatusButton
                  active={
                    formData[
                      `${pregunta.id}-REM2`
                    ] || false
                  }
                  onClick={() =>
                    handleChange({
                      target: {
                        name:
                          `${pregunta.id}-REM2`,
                        type: "checkbox",
                        checked:
                          !formData[
                            `${pregunta.id}-REM2`
                          ]
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

    <CardSection title="DIAGRAMA DE LA UNIDAD">
    <TruckDiagram tipo="UNIDAD" />
    </CardSection>

    {formData.remolque2?.trim() && (
        <CardSection title="DIAGRAMA DEL REMOLQUE 2">
            <TruckDiagram tipo="REM2" />
        </CardSection>
)}

  </>

  );
}

export default EstadoRemolqueSection;