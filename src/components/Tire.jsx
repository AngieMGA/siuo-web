import { ESTADOS } from "../data/truckDiagramData";

const COLORES = {
    [ESTADOS.BIEN]: "#43A047",
    [ESTADOS.OBSERVACION]: "#FFC107",
    [ESTADOS.DANADA]: "#E53935"
};

function Tire({ llanta, onClick }) {

    return (

        <g
            style={{
                cursor: "pointer",
                transition: "transform .2s"
            }}
            onClick={() => onClick?.(llanta)}
        >

            {/* Área clickeable (invisible) */}
            <rect
                x={llanta.x - 15}
                y={llanta.y - 15}
                width="30"
                height="30"
                fill="transparent"
            />

            {/* Badge */}
            <circle
                cx={llanta.x}
                cy={llanta.y}
                r="9"
                fill={COLORES[llanta.estado]}
                stroke="#fff"
                strokeWidth="2.5"
            />

            <circle
                cx={llanta.x}
                cy={llanta.y}
                r="11"
                fill="none"
                stroke="rgba(0,0,0,.15)"
                strokeWidth="1"
            />

            {/* Número */}
            <text
                x={llanta.x}
                y={llanta.y + 3}
                textAnchor="middle"
                fontSize="8"
                fontWeight="bold"
                fill="#FFF"
            >
                {llanta.numero}
            </text>

        </g>

    );

}

export default Tire;