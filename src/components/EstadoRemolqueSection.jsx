import CardSection from "./CardSection";
import StatusButton from "./StatusButton";
import TruckDiagram from "./TruckDiagram";
import EstadoResumen from "./EstadoResumen";
import { ESTADOS } from "../data/truckDiagramData";

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
  mostrarFull,
  puedeEditarEstado,
  puedeEditarLlantas
}) {

  const llantas = mostrarFull
    ? formData.llantasFull
    : formData.llantasSencillo;

  const totalBien =
    llantas.filter(
      l => l.estado === ESTADOS.BIEN
    ).length;

  const totalDanada =
    llantas.filter(
      l => l.estado === ESTADOS.DANADA
    ).length;

  const totalObservacion =
    llantas.filter(
      l => l.estado === ESTADOS.OBSERVACION
    ).length;

  const total = llantas.length;

  return (

    <>

      {/* =========================================
          ESTADO DEL REMOLQUE
          APT PUEDE EDITAR
         ========================================= */}

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

            {preguntasEstadoRemolque.map(
              (pregunta) => (

                <tr key={pregunta.id}>

                  <td>
                    <strong>
                      {pregunta.texto}
                    </strong>
                  </td>

                  <td>

                    <StatusButton
                      active={
                        formData[
                          `${pregunta.id}-REM1`
                        ] || false
                      }

                      disabled={
                        !puedeEditarEstado
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

                      disabled={
                        !puedeEditarEstado
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

              )
            )}

          </tbody>

        </table>

      </CardSection>


      {/* =========================================
          DIAGRAMA DE LA UNIDAD / LLANTAS
          VIGILANCIA PUEDE EDITAR
         ========================================= */}

      <CardSection title="DIAGRAMA DE LA UNIDAD">

        <p style={{ marginBottom: "10px" }}>
          <strong>
            Seleccione la llanta a inspeccionar.
          </strong>
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

          <span>
            🟢 <strong>Bien</strong>
          </span>

          <span>
            🔴 <strong>Dañada</strong>
          </span>

          <span>
            🟡 <strong>Observación</strong>
          </span>

        </div>

        <p
          style={{
            fontSize: "13px",
            color: "#666",
            marginBottom: "20px"
          }}
        >
          Al hacer clic sobre una llanta podrá
          registrar un daño o una observación.
        </p>


        <EstadoResumen
          bien={totalBien}
          observacion={totalObservacion}
          danada={totalDanada}
          total={total}
        />

        <TruckDiagram
          tipo={mostrarFull ? "FULL" : "SENCILLO"}
          llantas={
            mostrarFull
              ? formData.llantasFull
              : formData.llantasSencillo
          }
          actualizarLlanta={actualizarLlanta}
          mostrarFull={mostrarFull}
          puedeEditar={puedeEditarLlantas}
        />
      </CardSection>

    </>

  );

}

export default EstadoRemolqueSection;