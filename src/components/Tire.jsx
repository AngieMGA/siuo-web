import { ESTADOS } from "../data/truckDiagramData";

const COLORES = {
    [ESTADOS.BIEN]: "#4CAF50",
    [ESTADOS.OBSERVACION]: "#FFD54F",
    [ESTADOS.DANADA]: "#E53935"
};

function Tire({ llanta, onClick }) {

    return (

        <g
            style={{ cursor: "pointer" }}
            onClick={() => onClick?.(llanta)}
        >

            <ellipse
                cx={llanta.x}
                cy={llanta.y}
                rx="12"
                ry="8"
                fill={COLORES[llanta.estado]}
                stroke="#222"
                strokeWidth="2"
            />

            <ellipse
                cx={llanta.x}
                cy={llanta.y}
                rx="5"
                ry="3"
                fill="#FFF"
            />

        </g>

    );

}

export default Tire;