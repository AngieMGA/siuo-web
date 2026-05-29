import { useState } from "react";

function TruckInspection() {

  const [tipoUnidad, setTipoUnidad] =
    useState("1");

  const [puntos, setPuntos] = useState([

    {
      id: 1,
      nombre: "Cabina",
      top: "20%",
      left: "20%",
      status: "ok"
    },

    {
      id: 2,
      nombre: "Llantas tracto",
      top: "70%",
      left: "25%",
      status: "ok"
    },

    {
      id: 3,
      nombre: "Caja remolque 1",
      top: "40%",
      left: "55%",
      status: "ok"
    },

    {
      id: 4,
      nombre: "Llantas remolque 1",
      top: "75%",
      left: "58%",
      status: "ok"
    },

    {
      id: 5,
      nombre: "Caja remolque 2",
      top: "40%",
      left: "82%",
      status: "ok"
    },

    {
      id: 6,
      nombre: "Llantas remolque 2",
      top: "75%",
      left: "85%",
      status: "ok"
    }

  ]);

  const cambiarStatus = (id) => {

    const nuevosPuntos = puntos.map((punto) => {

      if (punto.id === id) {

        let nuevoStatus = "ok";

        if (punto.status === "ok") {
          nuevoStatus = "observacion";
        }

        else if (
          punto.status === "observacion"
        ) {
          nuevoStatus = "danio";
        }

        else {
          nuevoStatus = "ok";
        }

        return {
          ...punto,
          status: nuevoStatus
        };
      }

      return punto;
    });

    setPuntos(nuevosPuntos);
  };

  const obtenerClase = (status) => {

    if (status === "ok") {
      return "hotspot ok";
    }

    if (status === "observacion") {
      return "hotspot observacion";
    }

    return "hotspot danio";
  };

  const puntosFiltrados =
    tipoUnidad === "1"
      ? puntos.filter(
          punto => punto.id <= 4
        )
      : puntos;

  return (

    <div className="truck-container">

      <h2 className="subtitulo">
        INSPECCIÓN INTERACTIVA
      </h2>

      <div className="grupo">

        <label>
          Tipo de unidad
        </label>

        <select
          value={tipoUnidad}
          onChange={(e) =>
            setTipoUnidad(e.target.value)
          }
        >

          <option value="1">
            1 Remolque
          </option>

          <option value="2">
            2 Remolques
          </option>

        </select>

      </div>

      <div className="truck-image-container">

        <img
          className="truck-img"
          src="https://cdn-icons-png.flaticon.com/512/3774/3774278.png"
          alt="Tractocamión"
        />

        {puntosFiltrados.map((punto) => (

          <button
            key={punto.id}
            className={
              obtenerClase(punto.status)
            }
            style={{
              top: punto.top,
              left: punto.left
            }}
            onClick={() =>
              cambiarStatus(punto.id)
            }
          >

          </button>

        ))}

      </div>

      <div className="leyenda">

        <div>🟢 OK</div>

        <div>🟡 Observación</div>

        <div>🔴 Daño</div>

      </div>

    </div>
  );
}

export default TruckInspection;