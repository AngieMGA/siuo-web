import CardSection from "./CardSection";

function Riesgos2433({
  formData,
  handleChange
}) {

  return (

    <CardSection title="INDICAR GRADO DE RIESGO">

      <div className="grid-riesgos2433">

        <label>
          <input
            type="checkbox"
            name="explosivo"
            checked={formData.explosivo}
            onChange={handleChange}
          />
          Explosivo
        </label>

        <label>
          <input
            type="checkbox"
            name="inflamable"
            checked={formData.inflamable}
            onChange={handleChange}
          />
          Inflamable
        </label>

        <label>
          <input
            type="checkbox"
            name="gasPresion"
            checked={formData.gasPresion}
            onChange={handleChange}
          />
          Gas a presión
        </label>

        <label>
          <input
            type="checkbox"
            name="corrosivo"
            checked={formData.corrosivo}
            onChange={handleChange}
          />
          Corrosivo
        </label>

        <label>
          <input
            type="checkbox"
            name="comburente"
            checked={formData.comburente}
            onChange={handleChange}
          />
          Comburente
        </label>

        <label>
          <input
            type="checkbox"
            name="toxicidad"
            checked={formData.toxicidad}
            onChange={handleChange}
          />
          Toxicidad aguda
        </label>

        <label>
          <input
            type="checkbox"
            name="salud"
            checked={formData.salud}
            onChange={handleChange}
          />
          Peligro para la salud
        </label>

        <label>
          <input
            type="checkbox"
            name="medioAmbiente"
            checked={formData.medioAmbiente}
            onChange={handleChange}
          />
          Medio ambiente
        </label>

      </div>

    </CardSection>

  );

}

export default Riesgos2433;
