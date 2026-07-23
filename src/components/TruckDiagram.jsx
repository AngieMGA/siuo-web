import { useState } from "react";
import "../styles/TruckDiagram.css";
import TruckDiagramSvg from "./TruckDiagramSvg";
import TireModal from "./TireModal";


function TruckDiagram({ tipo, llantas, actualizarLlanta }) {

    const [llantaSeleccionada, setLlantaSeleccionada] = useState(null);

    const llantasMostrar = (llantas || []).filter(
    llanta => llanta.grupo === tipo
);

    return (
        <div className="truck-diagram">

            <TruckDiagramSvg
                llantas={llantasMostrar}
                onLlantaClick={(llanta) => {
                    setLlantaSeleccionada(llanta);
                }}
            />

            <TireModal
                llanta={llantaSeleccionada}
                onClose={() => setLlantaSeleccionada(null)}
                onGuardar={(llantaActualizada) => {

                    actualizarLlanta(llantaActualizada);

                    setLlantaSeleccionada(null);

                }}
            />

        </div>
    );
}

export default TruckDiagram;