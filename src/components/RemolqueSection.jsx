import CheckItem from "./CheckItem";
import CardSection from "./CardSection";
import InputField from "./InputField";

function RemolqueSection({
  formData,
  handleChange
}) {
  return (

    <CardSection title="REMOLQUE">

      <CheckItem
        label="Llantas en buen estado"
        name="llantas"
        checked={formData.llantas}
        onChange={handleChange}
      />

      <CheckItem
        label="Profundidad mínima 3.2 mm"
        name="profundidad"
        checked={formData.profundidad}
        onChange={handleChange}
      />

      <InputField
        label="Tipo de suspensión"
        name="suspension"
        value={formData.suspension}
        onChange={handleChange}
      />

      <CheckItem
        label="Frenos"
        name="frenos"
        checked={formData.frenos}
        onChange={handleChange}
      />

      <CheckItem
        label="Logo en tracto"
        name="logo"
        checked={formData.logo}
        onChange={handleChange}
      />

      <CheckItem
        label="¿Existe fuga de aditivo?"
        name="fugaAditivo"
        checked={formData.fugaAditivo}
        onChange={handleChange}
      />

      {formData.fugaAditivo && (

        <InputField
          label="Especifique fuga"
          name="especificacionFuga"
          value={formData.especificacionFuga}
          onChange={handleChange}
        />

      )}

    </CardSection>
  );
}

export default RemolqueSection;