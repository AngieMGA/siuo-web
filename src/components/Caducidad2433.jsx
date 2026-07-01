import CardSection from "./CardSection";
import InputField from "./InputField";

function Caducidad2433({
    formData,
    handleChange
}){

    return(

        <CardSection title="REGISTRO DE CADUCIDAD EN CASO DE APLICAR (MATERIALES E INGREDIENTES)">

            <table className="sgf-table">

                <thead>

                    <tr>

                        <th>Producto</th>
                        <th>Caducidad</th>
                        <th>Producto</th>
                        <th>Caducidad</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>

                            <InputField
                                name="producto1"
                                value={formData.producto1}
                                onChange={handleChange}
                            />

                        </td>

                        <td>

                            <InputField
                                type="date"
                                name="caducidad1"
                                value={formData.caducidad1}
                                onChange={handleChange}
                            />

                        </td>

                        <td>

                            <InputField
                                name="producto2"
                                value={formData.producto2}
                                onChange={handleChange}
                            />

                        </td>

                        <td>

                            <InputField
                                type="date"
                                name="caducidad2"
                                value={formData.caducidad2}
                                onChange={handleChange}
                            />

                        </td>

                    </tr>

                    <tr>

                        <td>

                            <InputField
                                name="producto3"
                                value={formData.producto3}
                                onChange={handleChange}
                            />

                        </td>

                        <td>

                            <InputField
                                type="date"
                                name="caducidad3"
                                value={formData.caducidad3}
                                onChange={handleChange}
                            />

                        </td>

                        <td>

                            <InputField
                                name="producto4"
                                value={formData.producto4}
                                onChange={handleChange}
                            />

                        </td>

                        <td>

                            <InputField
                                type="date"
                                name="caducidad4"
                                value={formData.caducidad4}
                                onChange={handleChange}
                            />

                        </td>

                    </tr>

                </tbody>

            </table>

        </CardSection>

    );

}

export default Caducidad2433;