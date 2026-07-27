import truckDiagram from "../assets/truckDiagram.png";
import Tire from "./Tire";

function TruckDiagramSvg({ tipo, llantas = [], onLlantaClick }) {

    return (

        <div
            style={{
                position: "relative",
                width: "100%",
                maxWidth: "1100px",
                margin: "0 auto"
            }}
        >

            <img
                src={truckDiagram}
                alt="Diagrama del remolque"
                style={{
                    width: "100%",
                    display: "block"
                }}
            />

            <svg
                viewBox="0 0 791 277"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
            >

                {llantas.map((llanta) => (

                    <Tire
                        key={llanta.id}
                        llanta={llanta}
                        onClick={onLlantaClick}
                    />

                ))}

            </svg>

        </div>

    );

}

export default TruckDiagramSvg;