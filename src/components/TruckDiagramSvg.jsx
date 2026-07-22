import { LLANTAS } from "../data/truckDiagramData";
import Tire from "./Tire";

function TruckDiagramSvg({ llantas = LLANTAS, onLlantaClick }) {

    return (
        <svg
    viewBox="0 0 1000 400"
    width="100%"
    height="100%"
>

    {/* Caja del remolque */}
    <rect
        x="170"
        y="90"
        width="650"
        height="220"
        rx="10"
        fill="#F8F8F8"
        stroke="#555"
        strokeWidth="3"
    />

    {/* Patines */}
    <line
        x1="240"
        y1="310"
        x2="240"
        y2="340"
        stroke="#555"
        strokeWidth="3"
    />

    <line
        x1="280"
        y1="310"
        x2="280"
        y2="340"
        stroke="#555"
        strokeWidth="3"
    />

    {llantas.map((llanta) => (
        <Tire
            key={llanta.id}
            llanta={llanta}
            onClick={onLlantaClick}
        />
    ))}

</svg>
    );

}

export default TruckDiagramSvg;