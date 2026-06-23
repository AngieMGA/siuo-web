import CardSection from "./CardSection";

function RHF0121ComentariosSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="COMENTARIOS">

      <div className="grupo">

        <label>
          Observaciones Generales
        </label>

        <textarea
          name="comentarios"
          value={formData.comentarios || ""}
          onChange={handleChange}
          rows="8"
          style={{
            width: "100%",
            resize: "vertical"
          }}
        />

      </div>

    </CardSection>

  );

}

export default RHF0121ComentariosSection;