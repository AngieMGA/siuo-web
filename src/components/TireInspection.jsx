import { useState } from "react";

function TireInspection({
  remolque1,
  remolque2
}) {

  const [llantas, setLlantas] = useState([

    { id: 1, status: "ok" },
    { id: 2, status: "ok" },
    { id: 3, status: "ok" },
    { id: 4, status: "ok" },
    { id: 5, status: "ok" },
    { id: 6, status: "ok" },
    { id: 7, status: "ok" },
    { id: 8, status: "ok" },
    { id: 9, status: "ok" },
    { id: 10, status: "ok" },
    { id: 11, status: "ok" },
    { id: 12, status: "ok" }
  ]);
 
  const cambiarStatus = (id) => {

    setLlantas(
      llantas.map((llanta) =>
        llanta.id === id
          ? {
              ...llanta,
              status:
                llanta.status === "ok"
                  ? "danio"
                  : "ok"
            }
          : llanta
      )
    );
  };

  const obtenerClase = (status) => {

    return status === "danio"
      ? "tire danio"
      : "tire ok";
  };

  const renderLlanta = (id) => (

    <div
      className="llanta-individual"
      onClick={() => cambiarStatus(id)}
    >

      <span>{id}</span>

      <button
        type="button"
        className={
          obtenerClase(
            llantas[id - 1].status
          )
        }
      />

    </div>

  );

  return (

    <div className="truck-container">

      <div className="diagrama-simple">

        <div className="eje">
          {renderLlanta(1)}
          {renderLlanta(2)}
          {renderLlanta(3)}
          {renderLlanta(4)}
        </div>

        <div className="linea-remolque"></div>

        <div className="eje">
          {renderLlanta(5)}
          {renderLlanta(6)}
          {renderLlanta(7)}
          {renderLlanta(8)}
        </div>

        {remolque2 && remolque2.trim() !== "" && (

          <>
            <div className="linea-remolque"></div>

            <div className="eje">
              {renderLlanta(9)}
              {renderLlanta(10)}
              {renderLlanta(11)}
              {renderLlanta(12)}
            </div>
          </>

        )}

      </div>

    </div>

  );
}

export default TireInspection;