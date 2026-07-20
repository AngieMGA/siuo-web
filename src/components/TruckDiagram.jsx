import "../styles/TruckDiagram.css";
import diagramaTrailer from "../assets/DiagramaTrailer.svg";

function TruckDiagram({
    tipo
}) {

  const llantas = [

  // TRACTO
  { id: "L1", tipo: "TRACTO", top: 38.5, left: 11.2 },
  { id: "L2", tipo: "TRACTO", top: 38.5, left: 28.8 },
  { id: "L3", tipo: "TRACTO", top: 38.5, left: 35.8 },

  // REMOLQUE
  { id: "L4", tipo: "REMOLQUE", top: 38.5, left: 72.5 },
  { id: "L5", tipo: "REMOLQUE", top: 38.5, left: 79.5 }

];

  const tipoMostrar =
      tipo === "TRACTO"
          ? "TRACTO"
          : "REMOLQUE";

  const llantasMostrar = llantas.filter(
      (llanta) => llanta.tipo === tipoMostrar
  );

  return (

    <div className="truck-diagram">

      <img
        src={diagramaTrailer}
        alt="Diagrama del tracto"
        className="truck-image"
      />

       {llantasMostrar.map((llanta) => (

    <div
      key={llanta.id}
      className="hotspot"
      style={{
      top: `${llanta.top}%`,
      left: `${llanta.left}%`
  }}
    >
      {llanta.id}
    </div>

))}

    </div>

  );

}

export default TruckDiagram;