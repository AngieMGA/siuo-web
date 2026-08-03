import { useState } from "react";
import { ESTADOS } from "../data/truckDiagramData";

const COLORES = {
    [ESTADOS.BIEN]: "#43A047",
    [ESTADOS.OBSERVACION]: "#FFC107",
    [ESTADOS.DANADA]: "#E53935"
};

function Tire({ llanta, onClick, editable = false }) {

    const [posicion, setPosicion] = useState({
        x: llanta.x,
        y: llanta.y
    });

    const [drag, setDrag] = useState(false);

    const mover = (e) => {

        if (!editable || !drag) return;

        const svg = e.target.ownerSVGElement;

        const pt = svg.createSVGPoint();

        pt.x = e.clientX;
        pt.y = e.clientY;

        const cursor = pt.matrixTransform(
            svg.getScreenCTM().inverse()
        );

        setPosicion({
            x: cursor.x,
            y: cursor.y
        });

    };

    return (

        <g

            onMouseMove={mover}

            onMouseDown={() => {

                if (editable)
                    setDrag(true);

            }}

            onMouseUp={() => {

                if (!editable) return;

                setDrag(false);

                console.log(
                    llanta.id,
                    "x:",
                    Math.round(posicion.x),
                    "y:",
                    Math.round(posicion.y)
                );

            }}

            style={{
                cursor: editable ? "move" : "pointer"
            }}

            onClick={() => {

                if (!editable)
                    onClick?.(llanta);

            }}

        >

            <circle
                cx={editable ? posicion.x : llanta.x}
                cy={editable ? posicion.y : llanta.y}
                r="9"
                fill={COLORES[llanta.estado]}
                stroke="#FFF"
                strokeWidth="2"
            />

            <text
                x={editable ? posicion.x : llanta.x}
                y={(editable ? posicion.y : llanta.y) + 3}
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