import CardSection from "./CardSection";
import SelectionCard from "./SelectionCard";

function RHF0121CargaDescargaSection({
  formData,
  handleChange
}) {
  return (
    <CardSection title="TIPO DE OPERACIÓN">

      <div className="selection-group">

        <SelectionCard
          titulo="Carga"
          icono="📦"
          tipo="info"
          seleccionado={formData.tipoOperacion === "Carga"}
          onClick={() =>
            handleChange({
              target: {
                name: "tipoOperacion",
                value: "Carga"
              }
            })
          }
        />

        <SelectionCard
          titulo="Descarga"
          icono="🚛"
          tipo="success"
          seleccionado={formData.tipoOperacion === "Descarga"}
          onClick={() =>
            handleChange({
              target: {
                name: "tipoOperacion",
                value: "Descarga"
              }
            })
          }
        />

      </div>

    </CardSection>
  );
}

export default RHF0121CargaDescargaSection;