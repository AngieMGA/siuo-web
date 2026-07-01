import CardSection from "./CardSection";
import InputField from "./InputField";

function CondicionesMaterial2433({
    formData,
    handleChange
}) {

    const preguntas = [

        {
            id: "cantidadFactura",
            texto: "Cantidad física vs factura coinciden"
        },

        {
            id: "certificadoCalidad",
            texto: "El material presenta certificado de calidad"
        },

        {
            id: "contenedoresBuenasCondiciones",
            texto: "Material y contenedores en buenas condiciones"
        }

    ];

    return (

        <CardSection title="CONDICIONES DEL MATERIAL">

            <table className="sgf-table">

                <thead>

                    <tr>

                        <th>Concepto</th>
                        <th>Cumple</th>
                        <th>No cumple</th>
                        <th>N/A</th>
                        <th>Observaciones</th>

                    </tr>

                </thead>

                <tbody>

                    {preguntas.map((pregunta) => (

                        <tr key={pregunta.id}>

                            <td>

                                {pregunta.texto}

                            </td>

                            <td>

                                <input
                                    type="radio"
                                    name={pregunta.id}
                                    value="cumple"
                                    checked={formData[pregunta.id] === "cumple"}
                                    onChange={handleChange}
                                />

                            </td>

                            <td>

                                <input
                                    type="radio"
                                    name={pregunta.id}
                                    value="noCumple"
                                    checked={formData[pregunta.id] === "noCumple"}
                                    onChange={handleChange}
                                />

                            </td>

                            <td>

                                <input
                                    type="radio"
                                    name={pregunta.id}
                                    value="na"
                                    checked={formData[pregunta.id] === "na"}
                                    onChange={handleChange}
                                />

                            </td>

                            <td style={{minWidth:"250px"}}>

                                <InputField
                                    name={`${pregunta.id}Obs`}
                                    value={formData[`${pregunta.id}Obs`]}
                                    onChange={handleChange}
                                />

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </CardSection>

    );

}

export default CondicionesMaterial2433;