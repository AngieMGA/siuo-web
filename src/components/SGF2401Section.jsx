import CardSection from "./CardSection";
import { checklistSGF2401 } from "../data/checklistSGF2401";
import InputField from "./InputField";
import React from "react";

function SGF2401Section({
  formData,
  handleChange
}) {

  return (

    <CardSection title="SG-F-24-01">

      {checklistSGF2401.secciones.map((seccion) => (

        <div
          key={seccion.id}
          style={{ marginBottom: "30px" }}
        >

          <h3>{seccion.nombre}</h3>

          <table className="sgf-table">

            <thead>

              <tr>
                <th>Pregunta</th>
                <th>Cumple</th>
                <th>No Cumple</th>
              </tr>

            </thead>

            <tbody>

  {seccion.preguntas.map((pregunta) => (

    <React.Fragment key={pregunta.id}>

      <tr>

        <td className="pregunta">
          {pregunta.texto}
        </td>

        <td className="radio-cell">

          <input
            type="radio"
            name={pregunta.id}
            value="cumple"
            checked={
              formData[pregunta.id] === "cumple"
            }
            onChange={handleChange}
          />

        </td>

        <td className="radio-cell">

          <input
            type="radio"
            name={pregunta.id}
            value="noCumple"
            checked={
              formData[pregunta.id] === "noCumple"
            }
            onChange={handleChange}
          />

        </td>

      </tr>

      {pregunta.id === "MAT-007" &&
        formData["MAT-007"] === "cumple" && (

        <tr>

          <td colSpan="3">

            <div
              style={{
                padding: "15px",
                background: "#f5f5f5",
                borderRadius: "8px",
                marginTop: "10px"
              }}
            >

              <h4>
                DATOS DE PESAJE Y TANQUES
              </h4>

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

          </td>

        </tr>

      )}

      {pregunta.id === "MAT-008" &&
  formData["MAT-008"] === "cumple" && (

  <tr>

    <td colSpan="3">

      <div
        style={{
          padding: "15px",
          background: "#f5f5f5",
          borderRadius: "8px",
          marginTop: "10px"
        }}
      >

        <InputField
          label="Número o Código"
          name="numeroCodigo"
          value={formData.numeroCodigo}
          onChange={handleChange}
        />

      </div>

    </td>

  </tr>

)}

    </React.Fragment>

  ))}

</tbody>

          </table>

        </div>

      ))}

    </CardSection>

  );
}

export default SGF2401Section;