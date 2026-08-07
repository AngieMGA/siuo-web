import CardSection from "./CardSection";
import InputField from "./InputField";

function ObservacionesSGF2433({
    formData,
    handleChange
}) {

    return (

        <>

            <CardSection title="OBSERVACIONES">

                <div className="grupo">

                    <label>Observaciones</label>

                    <textarea
                        name="comentarios2433"
                        value={formData.comentarios2433}
                        onChange={handleChange}
                        rows={5}
                    />

                </div>

            </CardSection>

            <CardSection title="FIRMAS">

                <InputField
                    label="Nombre quien recibe"
                    name="nombreRecibe2433"
                    value={formData.nombreRecibe2433}
                    onChange={handleChange}
                />

                <InputField
                    label="Supervisor / Verificó"
                    name="nombreSupervisor2433"
                    value={formData.nombreSupervisor2433}
                    onChange={handleChange}
                />

            </CardSection>

        </>

    );

}

export default ObservacionesSGF2433;