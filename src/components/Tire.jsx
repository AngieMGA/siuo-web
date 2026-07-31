import { useState } from "react";
import { ESTADOS } from "../data/truckDiagramData";

const COLORES = {
    [ESTADOS.BIEN]: "#43A047",
    [ESTADOS.OBSERVACION]: "#FFC107",
    [ESTADOS.DANADA]: "#E53935"
};

function Tire({
    llanta,
    onClick,
    editable = false
}) {

    const [posicion, setPosicion] = useState({
    x: llanta.x,
    y: llanta.y
});


    return (

        <g
    style={{
        cursor: "pointer"
    }}
    onClick={() => onClick?.(llanta)}
>

            {/* Área clickeable (invisible) */}
            <rect
                x={posicion.x - 15}
                y={posicion.y - 15}
                width="30"
                height="30"
                fill="transparent"
            />

            {/* Badge */}
            <circle
                cx={posicion.x}
                cy={posicion.y}
                r="9"
                fill={COLORES[llanta.estado]}
                stroke="#fff"
                strokeWidth="2.5"
            />

            <circle
                cx={posicion.x}
                cy={posicion.y}
                r="11"
                fill="none"
                stroke="rgba(0,0,0,.15)"
                strokeWidth="1"
            />

            {/* Número */}
            <text
                x={posicion.x}
                y={posicion.y + 3}
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