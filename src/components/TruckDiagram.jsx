import { useState } from "react";
import "../styles/TruckDiagram.css";
import TruckDiagramSvg from "./TruckDiagramSvg";
import TireModal from "./TireModal";

function TruckDiagram({
  tipo,
  llantas,
  actualizarLlanta,
  mostrarFull,
  puedeEditar = true
}) {

  const [
    llantaSeleccionada,
    setLlantaSeleccionada
  ] = useState(null);

  const llantasMostrar = llantas || [];

  const manejarClickLlanta = (llanta) => {

    // Si el área no puede editar las llantas,
    // solamente se visualiza el diagrama.
    if (!puedeEditar) {
      return;
    }

    setLlantaSeleccionada(llanta);
  };

  return (

    <div
      className="truck-diagram"
      style={{
        opacity: puedeEditar ? 1 : 0.75
      }}
    >

      <TruckDiagramSvg
        tipo={tipo}
        llantas={llantasMostrar}
        onLlantaClick={manejarClickLlanta}
        mostrarFull={mostrarFull}
      />

      {puedeEditar && (
        <TireModal
          llanta={llantaSeleccionada}

          onClose={() =>
            setLlantaSeleccionada(null)
          }

          onGuardar={(llantaActualizada) => {

            actualizarLlanta(
              tipo,
              llantaActualizada
            );

            setLlantaSeleccionada(null);
          }}
        />
      )}

    </div>
  );
}

export default TruckDiagram;

    