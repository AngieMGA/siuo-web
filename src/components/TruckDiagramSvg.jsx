import Remolque1 from "../assets/Remolque1.png";
import Remolque2 from "../assets/Remolque2.png";
import Tire from "./Tire";

function TruckDiagramSvg({
    tipo,
    llantas = [],
    onLlantaClick,
    mostrarFull
}) {

    const imagen = mostrarFull
        ? Remolque2
        : Remolque1;

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
                src={imagen}
                alt="Diagrama del remolque"
                style={{
                width: "100%",
                display: "block",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,.15)"
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

                <defs>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow
                            dx="0"
                            dy="1"
                            stdDeviation="2"
                            floodColor="#000"
                            floodOpacity="0.35"
                        />
                    </filter>
                </defs>

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