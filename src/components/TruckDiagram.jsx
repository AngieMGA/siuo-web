import { useState } from "react";
import "../styles/TruckDiagram.css";
import TruckDiagramSvg from "./TruckDiagramSvg";
import TireModal from "./TireModal";

function TruckDiagram({ tipo, llantas, actualizarLlanta }) {

    const [llantaSeleccionada, setLlantaSeleccionada] = useState(null);

    const llantasMostrar = llantas || [];

    const manejarClickLlanta = (llanta) => {
        setLlantaSeleccionada(llanta);
    };

    return (
        <div className="truck-diagram">

            <TruckDiagramSvg
                tipo={tipo}
                llantas={llantasMostrar}
                onLlantaClick={manejarClickLlanta}
            />

            <TireModal
                llanta={llantaSeleccionada}
                onClose={() => setLlantaSeleccionada(null)}
                onGuardar={(llantaActualizada) => {
                    actualizarLlanta(tipo, llantaActualizada);
                    setLlantaSeleccionada(null);
                }}
            />

        </div>
    );
}

export default TruckDiagram;