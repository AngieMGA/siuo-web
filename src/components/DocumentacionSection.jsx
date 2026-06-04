import CardSection from "./CardSection";
import StatusButton from "./StatusButton.jsx";

function DocumentacionSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="DOCUMENTACIÓN">

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

            <td>Placas</td>

            <td>

              <StatusButton
                active={formData.placasRem1}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "placasRem1",
                      type: "checkbox",
                      checked:
                        !formData.placasRem1
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.placasRem2}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "placasRem2",
                      type: "checkbox",
                      checked:
                        !formData.placasRem2
                    }
                  })
                }
              />

            </td>

          </tr>

          <tr>

            <td>Tarjeta circulación</td>

            <td>

              <StatusButton
                active={formData.tarjetaRem1}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "tarjetaRem1",
                      type: "checkbox",
                      checked:
                        !formData.tarjetaRem1
                    }
                  })
                }
              />

            </td>

            <td>

              <StatusButton
                active={formData.tarjetaRem2}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "tarjetaRem2",
                      type: "checkbox",
                      checked:
                        !formData.tarjetaRem2
                    }
                  })
                }
              />

            </td>

          </tr>
          <tr>

  <td>Coinciden con documentación</td>

  <td>

    <StatusButton
      active={formData.coincidenDocumentacion}
      onClick={() =>
        handleChange({
          target: {
            name: "coincidenDocumentacion",
            type: "checkbox",
            checked:
              !formData.coincidenDocumentacion
          }
        })
      }
    />

  </td>

  <td>

    <StatusButton
      active={formData.coincidenDocumentacion}
      onClick={() =>
        handleChange({
          target: {
            name: "coincidenDocumentacion",
            type: "checkbox",
            checked:
              !formData.coincidenDocumentacion
          }
        })
      }
    />

  </td>

</tr>

<tr>

  <td>Carta Porte debidamente llenada</td>

  <td>

    <StatusButton
      active={formData.cartaPorte}
      onClick={() =>
        handleChange({
          target: {
            name: "cartaPorte",
            type: "checkbox",
            checked:
              !formData.cartaPorte
          }
        })
      }
    />

  </td>

  <td>

    <StatusButton
      active={formData.cartaPorte}
      onClick={() =>
        handleChange({
          target: {
            name: "cartaPorte",
            type: "checkbox",
            checked:
              !formData.cartaPorte
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

export default DocumentacionSection;