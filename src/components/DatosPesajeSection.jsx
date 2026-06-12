import CardSection from "./CardSection";
import InputField from "./InputField";

function DatosPesajeSection({
  formData,
  handleChange
}) {

  console.log("Render DatosPesajeSection");
  return (

    <CardSection title="DATOS DE PESAJE Y TANQUES">
      
      <div className="grid-sgf2401">

        <InputField
          label="Peso Inicial"
          name="pesoInicial"
          value={formData.pesoInicial}
          onChange={handleChange}
        />

        <InputField
          label="Peso Final"
          name="pesoFinal"
          value={formData.pesoFinal}
          onChange={handleChange}
        />

        <InputField
          label="Tara"
          name="tara"
          value={formData.tara}
          onChange={handleChange}
        />

        <InputField
          label="Número o Código"
          name="numeroCodigo"
          value={formData.numeroCodigo}
          onChange={handleChange}
        />

        <InputField
          label="TQ1 Inicial"
          name="tq1Inicial"
          value={formData.tq1Inicial}
          onChange={handleChange}
        />

        <InputField
          label="TQ1 Final"
          name="tq1Final"
          value={formData.tq1Final}
          onChange={handleChange}
        />

        <InputField
          label="PSI TQ1 Inicial"
          name="psiTq1Inicial"
          value={formData.psiTq1Inicial}
          onChange={handleChange}
        />

        <InputField
          label="PSI TQ1 Final"
          name="psiTq1Final"
          value={formData.psiTq1Final}
          onChange={handleChange}
        />

        <InputField
          label="TQ2 Inicial"
          name="tq2Inicial"
          value={formData.tq2Inicial}
          onChange={handleChange}
        />

        <InputField
          label="TQ2 Final"
          name="tq2Final"
          value={formData.tq2Final}
          onChange={handleChange}
        />

        <InputField
          label="PSI TQ2 Inicial"
          name="psiTq2Inicial"
          value={formData.psiTq2Inicial}
          onChange={handleChange}
        />

        <InputField
          label="PSI TQ2 Final"
          name="psiTq2Final"
          value={formData.psiTq2Final}
          onChange={handleChange}
        />

      </div>

    </CardSection>

  );
}

export default DatosPesajeSection;