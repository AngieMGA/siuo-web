import CardSection from "./CardSection";
import InputField from "./InputField";
import StatusButton from "./StatusButton";

function RemolqueSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="REMOLQUE">

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

            <td>Llantas buen estado</td>

            <td>

              <StatusButton
                active={formData.llantasRem1}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "llantasRem1",
                      type: "checkbox",
                      checked:
                        !formData.llantasRem1
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.llantasRem2}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "llantasRem2",
                      type: "checkbox",
                      checked:
                        !formData.llantasRem2
                    }
                  })
                }
              />

            </td>

          </tr>

          <tr>

            <td>Profundidad mínima</td>

            <td>

              <StatusButton
                active={formData.profundidadRem1}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "profundidadRem1",
                      type: "checkbox",
                      checked:
                        !formData.profundidadRem1
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.profundidadRem2}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "profundidadRem2",
                      type: "checkbox",
                      checked:
                        !formData.profundidadRem2
                    }
                  })
                }
              />

            </td>

          </tr>

          <tr>

            <td>Frenos</td>

            <td>

              <StatusButton
                active={formData.frenosRem1}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "frenosRem1",
                      type: "checkbox",
                      checked:
                        !formData.frenosRem1
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.frenosRem2}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "frenosRem2",
                      type: "checkbox",
                      checked:
                        !formData.frenosRem2
                    }
                  })
                }
              />

            </td>

          </tr>

          <tr>

  <td>Logo Tractor</td>

  <td>

    <StatusButton
      active={formData.logoTractor1}
      onClick={() =>
        handleChange({
          target: {
            name: "logoTractor",
            type: "checkbox",
            checked:
              !formData.logoTractor
          }
        })
      }
    />

  </td>

  <td>

    <StatusButton
      active={formData.logoTractor2}
      onClick={() =>
        handleChange({
          target: {
            name: "logoTractor",
            type: "checkbox",
            checked:
              !formData.logoTractor
          }
        })
      }
    />

  </td>


</tr>

        </tbody>

      </table>

      <InputField
        label="Tipo suspensión"
        name="suspension"
        value={formData.suspension}
        onChange={handleChange}
      />

    </CardSection>
  );
}

export default RemolqueSection;