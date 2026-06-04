import CardSection from "./CardSection";
import StatusButton from "./StatusButton";

function OperadorSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="OPERADOR">

      <table className="check-table">

        <thead>

          <tr>

            <th></th>

            <th>Rem 1</th>

            <th>Rem 2</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Alta IMSS</td>

            <td>

              <StatusButton
                active={formData.imssRem1}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "imssRem1",
                      type: "checkbox",
                      checked:
                        !formData.imssRem1
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.imssRem2}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "imssRem2",
                      type: "checkbox",
                      checked:
                        !formData.imssRem2
                    }
                  })
                }
              />

            </td>

          </tr>

          <tr>

            <td>Identificación</td>

            <td>

              <StatusButton
                active={formData.identificacionRem1}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "identificacionRem1",
                      type: "checkbox",
                      checked:
                        !formData.identificacionRem1
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.identificacionRem2}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "identificacionRem2",
                      type: "checkbox",
                      checked:
                        !formData.identificacionRem2
                    }
                  })
                }
              />

            </td>

          </tr>

          <tr>

            <td>Uniforme</td>

            <td>

              <StatusButton
                active={formData.uniformeRem1}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "uniformeRem1",
                      type: "checkbox",
                      checked:
                        !formData.uniformeRem1
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.uniformeRem2}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "uniformeRem2",
                      type: "checkbox",
                      checked:
                        !formData.uniformeRem2
                    }
                  })
                }
              />

            </td>

          </tr>

          <tr>

            <td>Presentación del Operador</td>

            <td>

              <StatusButton
                active={formData.presentacion}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "presentacion",
                      type: "checkbox",
                      checked:
                        !formData.presentacion
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.presentacion}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "presentacion",
                      type: "checkbox",
                      checked:
                        !formData.presentacion
                    }
                  })
                }
              />

            </td>

          </tr>

        </tbody>

      </table>

    </CardSection>
  );
}

export default OperadorSection;