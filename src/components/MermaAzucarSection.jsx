import CardSection from "./CardSection";

function MermaAzucarSection({
  formData,
  handleChange
}) {

  const sacos = [
    "saco1Kg",
    "saco2Kg",
    "saco3Kg",
    "saco4Kg",
    "saco5Kg",
    "saco6Kg",
    "saco7Kg",
    "saco8Kg"
  ];

  return (

    <CardSection title="AZÚCAR - CÁLCULO DE MERMA">

      <table className="check-table">

        <thead>

          <tr>

            <th>Saco</th>

            <th>Peso (Kg)</th>

          </tr>

        </thead>

        <tbody>

          {sacos.map((saco, index) => (

            <tr key={saco}>

              <td>
                Saco {index + 1}
              </td>

              <td>

                <input
                  type="number"
                  name={saco}
                  value={
                    formData[saco] || ""
                  }
                  onChange={handleChange}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <div
  style={{
    marginTop: "20px"
  }}
>

  <div className="input-group">

    <label>Total Kg</label>

    <input
      value={formData.totalKg || ""}
      readOnly
    />

  </div>

  <div className="input-group">

    <label>Prom</label>

    <input
      value={formData.promedioKg || ""}
      readOnly
    />

  </div>

  <div className="input-group">

    <label>
      Dif. Prom. Teórico (1503.84)
    </label>

    <input
      value={formData.diferenciaKg || ""}
      readOnly
    />

  </div>

  <div className="input-group">

    <label>
      Kg Totales de Merma x Num. Sacos
    </label>

    <input
      value={formData.mermaKg || ""}
      readOnly
    />

  </div>

</div>

    </CardSection>

  );
}

export default MermaAzucarSection;