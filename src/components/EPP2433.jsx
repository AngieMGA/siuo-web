import CardSection from "./CardSection";
import { epp2433 } from "../data/checklistSGF2433";

function EPP2433({
    formData,
    handleChange
}){

    return(

        <CardSection title="EQUIPO DE PROTECCIÓN PERSONAL">

            <table className="sgf-table">

                <thead>

                    <tr>

                        <th>Equipo</th>
                        <th>Sí</th>
                        <th>No</th>
                        <th>N/A</th>

                    </tr>

                </thead>

                <tbody>

                    {epp2433.map((equipo,index)=>(

                        <tr key={index}>

                            <td>

                                {equipo}

                            </td>

                            <td>

                                <input
                                    type="radio"
                                    name={`epp${index}`}
                                    value="si"
                                    checked={formData[`epp${index}`]==="si"}
                                    onChange={handleChange}
                                />

                            </td>

                            <td>

                                <input
                                    type="radio"
                                    name={`epp${index}`}
                                    value="no"
                                    checked={formData[`epp${index}`]==="no"}
                                    onChange={handleChange}
                                />

                            </td>

                            <td>

                                <input
                                    type="radio"
                                    name={`epp${index}`}
                                    value="na"
                                    checked={formData[`epp${index}`]==="na"}
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

export default EPP2433;