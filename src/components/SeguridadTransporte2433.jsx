import CardSection from "./CardSection";
import InputField from "./InputField";
import { transporte2433 } from "../data/checklistSGF2433";

function SeguridadTransporte2433({
    formData,
    handleChange
}){

    return(

        <CardSection title="CALIDAD Y SEGURIDAD DEL SERVICIO DEL TRANSPORTISTA E INSTALACIONES ">

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

                    {transporte2433.map((texto,index)=>(

                        <tr key={index}>

                            <td>{texto}</td>

                            <td>

                                <input
                                    type="radio"
                                    name={`transporte${index}`}
                                    value="cumple"
                                    checked={formData[`transporte${index}`]==="cumple"}
                                    onChange={handleChange}
                                />

                            </td>

                            <td>

                                <input
                                    type="radio"
                                    name={`transporte${index}`}
                                    value="nocumple"
                                    checked={formData[`transporte${index}`]==="nocumple"}
                                    onChange={handleChange}
                                />

                            </td>

                            <td>

                                <input
                                    type="radio"
                                    name={`transporte${index}`}
                                    value="na"
                                    checked={formData[`transporte${index}`]==="na"}
                                    onChange={handleChange}
                                />

                            </td>

                            <td>

                                <InputField
                                    name={`transporteObs${index}`}
                                    value={formData[`transporteObs${index}`]}
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

export default SeguridadTransporte2433;