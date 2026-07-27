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

            {/* Número */}
            <text
                x={llanta.x}
                y={llanta.y - 12}
                textAnchor="middle"
                fontSize="8"
                fontWeight="bold"
                fill="#000"
            >
                {llanta.numero}
            </text>

            {/* Llanta */}
            <ellipse
                cx={llanta.x}
                cy={llanta.y}
                rx="10"
                ry="6"
                fill={COLORES[llanta.estado]}
                stroke="#222"
                strokeWidth="2"
            />

            {/* Centro */}
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