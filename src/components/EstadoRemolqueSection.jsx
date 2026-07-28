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
  handleChange,
  actualizarLlanta,
  mostrarFull
}) {

    const totalBien =
    formData.llantasRem1.filter(
        l => l.estado === "BIEN"
    ).length;

const totalDanada =
    formData.llantasRem1.filter(
        l => l.estado === "DANADA"
    ).length;

const totalObservacion =
    formData.llantasRem1.filter(
        l => l.estado === "OBSERVACION"
    ).length;

const total = formData.llantasRem1.length;

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

    <CardSection title="DIAGRAMA DEL REMOLQUE 1">
    <p style={{ marginBottom: "10px" }}>
    <strong>Seleccione la llanta a inspeccionar.</strong>
</p>

<div
    style={{
        display: "flex",
        gap: "25px",
        marginBottom: "15px",
        flexWrap: "wrap",
        fontSize: "14px"
    }}
>
    <span>🟢 <strong>Bien</strong></span>
    <span>🔴 <strong>Dañada</strong></span>
    <span>🟡 <strong>Observación</strong></span>
</div>

<p
    style={{
        fontSize: "13px",
        color: "#666",
        marginBottom: "20px"
    }}
>
    Al hacer clic sobre una llanta podrá registrar un daño o una observación.
</p>

<div
    style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginBottom: "20px"
    }}
>

    <div className="estado-card">
        🟢 {totalBien}
    </div>

    <div className="estado-card">
        🟡 {totalObservacion}
    </div>

    <div className="estado-card">
        🔴 {totalDanada}
    </div>

    <div className="estado-card">
        Total {total}
    </div>

</div>

<TruckDiagram
    tipo="REM1"
    llantas={formData.llantasRem1}
    actualizarLlanta={actualizarLlanta}
    mostrarFull={mostrarFull}
/>
</CardSection>

{formData.remolque2?.trim() && (
    <CardSection title="DIAGRAMA DEL REMOLQUE 2">
        <TruckDiagram
            tipo="REM2"
            llantas={formData.llantasRem2}
            actualizarLlanta={actualizarLlanta}
            mostrarFull={mostrarFull}
        />
    </CardSection>
)}

  </>

  );
}

export default EstadoRemolqueSection;