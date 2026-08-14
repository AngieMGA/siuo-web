import CardSection from "./CardSection";
import { checklistSGF2401 } from "../data/checklistSGF2401";
import { configuracionSGF2401 } from "../data/configuracionSGF2401";
import React from "react";

function SGF2401Section({
  formData,
  handleChange
}) {

  const area = formData.areaMateriaPrima;
  const material = formData.material;

  let configuracion = null;

  // Lata Vacía
  if (area === "Lata Vacía") {
    configuracion =
      configuracionSGF2401["Lata Vacía"];
  }

  // Cuarto Monster + Material
  if (
    area === "Cuarto Monster" &&
    material
  ) {
    configuracion =
      configuracionSGF2401["Cuarto Monster"]?.[material];
  }

  // Si no hay configuración,
  // no mostrar preguntas.
  if (!configuracion) {
    return null;
  }

  return (
    <CardSection title="SG-F-24-01">

      {checklistSGF2401.secciones

        .map((seccion) => {

          // Obtener los IDs permitidos
          // para esta sección.
          const idsPermitidos =
            configuracion.preguntas?.[seccion.id] || [];

          // Filtrar las preguntas según
          // la configuración.
          const preguntasFiltradas =
            seccion.preguntas.filter(
              (pregunta) =>
                idsPermitidos.includes(
                  pregunta.id
                )
            );

          // Si no hay preguntas para esta sección,
          // no mostrarla.
          if (
            preguntasFiltradas.length === 0
          ) {
            return null;
          }

          return (
            <div
              key={seccion.id}
              style={{
                marginBottom: "30px"
              }}
            >

              <h3>
                {seccion.nombre}
              </h3>

              <table className="sgf-table">

                <thead>
                  <tr>
                    <th>Pregunta</th>
                    <th>Cumple</th>
                    <th>No Cumple</th>
                  </tr>
                </thead>

                <tbody>

                  {preguntasFiltradas.map(
                    (pregunta) => (

                      <React.Fragment
                        key={pregunta.id}
                      >

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
                                formData[
                                  pregunta.id
                                ] === "cumple"
                              }
                              onChange={
                                handleChange
                              }
                            />

                          </td>

                          <td className="radio-cell">

                            <input
                              type="radio"
                              name={pregunta.id}
                              value="noCumple"
                              checked={
                                formData[
                                  pregunta.id
                                ] === "noCumple"
                              }
                              onChange={
                                handleChange
                              }
                            />

                          </td>

                        </tr>

                      </React.Fragment>

                    )
                  )}

                </tbody>

              </table>

            </div>
          );

        })}

    </CardSection>
  );
}

export default SGF2401Section;