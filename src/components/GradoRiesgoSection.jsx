import CardSection from "./CardSection";
import atencion from "../assets/atencion.png";
import bomba from "../assets/bomba.png";
import corrosion from "../assets/corrosion.png";
import fuego from "../assets/fuego.png";
import irritante from "../assets/irritante.png";
import llama from "../assets/llama.png";
import medioAmbiente from "../assets/medioAmbiente.png";
import peligroSalud from "../assets/peligroSalud.png";
import tibiasCruzadas from "../assets/tibiasCruzadas.png";

const riesgos = [
  {
    key: "explosivo",
    imagen: bomba
  },
  {
    key: "inflamable",
    imagen: fuego
  },
  {
    key: "gasPresion",
    imagen: atencion
  },
  {
    key: "corrosivo",
    imagen: corrosion
  },
  {
    key: "comburente",
    imagen: llama
  },
  {
    key: "toxicidad",
    imagen: tibiasCruzadas
  },
  {
    key: "salud",
    imagen: peligroSalud
  },
  {
    key: "medioAmbiente",
    imagen: medioAmbiente
  },
  {
  key: "irritante",
  imagen: irritante
}
];

function GradoRiesgoSection({ formData, handleChange }) {
  return (
    <CardSection title="INDICAR GRADO DE RIESGO">

      <div className="riesgos-grid">

        {riesgos.map((riesgo) => (

<label
  key={riesgo.key}
  className={`riesgo-card ${
    formData[riesgo.key] ? "seleccionado" : ""
  }`}
>

  <input
    type="checkbox"
    name={riesgo.key}
    checked={formData[riesgo.key]}
    onChange={handleChange}
    className="riesgo-checkbox"
  />

  <img
    src={riesgo.imagen}
    alt={riesgo.key}
    className="riesgo-img"
  />

  <input
              type="checkbox"
              name={riesgo.key}
              checked={formData[riesgo.key]}
              onChange={handleChange}
            />

          </label>

        ))}

      </div>

    </CardSection>
  );
}

export default GradoRiesgoSection;