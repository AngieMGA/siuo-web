import "../styles/TruckDiagram.css";
import TruckDiagramSvg from "./TruckDiagramSvg";
import { LLANTAS } from "../data/truckDiagramData";

function TruckDiagram({ tipo }) {

    const grupoMostrar = tipo;

    const llantasMostrar = LLANTAS.filter(
    llanta => llanta.grupo === tipo
);

    return (
        <div className="truck-diagram">

            <TruckDiagramSvg
                llantas={llantasMostrar}
                onLlantaClick={(llanta) => {
                    console.log(llanta);
                }}
            />

        </div>
    );
}

export default TruckDiagram;