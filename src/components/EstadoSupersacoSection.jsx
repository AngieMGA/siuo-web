import CardSection from "./CardSection";

function EstadoSupersacoSection({
  formData,
  handleChange
}) {

  const supersacos = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9
  ];

  return (

    <CardSection title="ESTADO DE SUPERSACO">

      <p>
        Parchado / Cosido /
        Falta de Oreja /
        Falta de Sello
      </p>

      <table className="check-table">

  <thead>

    <tr>

      <th></th>

      {[1,2,3,4,5,6,7,8,9].map((num) => (

        <th key={num}>
          {num}
        </th>

      ))}

    </tr>

  </thead>

  <tbody>

    <tr>

      <td>
        <strong>B</strong>
      </td>

      {[1,2,3,4,5,6,7,8,9].map((num) => (

        <td key={`B-${num}`}>

          <input
            type="radio"
            name={`supersaco${num}`}
            value="B"
            checked={
              formData[`supersaco${num}`] === "B"
            }
            onChange={handleChange}
          />

        </td>

      ))}

    </tr>

    <tr>

      <td>
        <strong>M</strong>
      </td>

      {[1,2,3,4,5,6,7,8,9].map((num) => (

        <td key={`M-${num}`}>

          <input
            type="radio"
            name={`supersaco${num}`}
            value="M"
            checked={
              formData[`supersaco${num}`] === "M"
            }
            onChange={handleChange}
          />

        </td>

      ))}

    </tr>

  </tbody>

</table>

    </CardSection>

  );
}

export default EstadoSupersacoSection;