import CardSection from "./CardSection";
import InputField from "./InputField";
import { trasvase2433 } from "../data/checklistSGF2433";

function Trasvase2433({
    formData,
    handleChange
}){

return(

<>

<CardSection title="DATOS DEL TRABAJO">

<div className="grid-sgf2433">

<InputField
label="Fecha"
name="fechaTrasvase"
value={formData.fechaTrasvase}
onChange={handleChange}
/>

<InputField
label="Hora Inicio"
name="horaInicioTrasvase"
value={formData.horaInicioTrasvase}
onChange={handleChange}
/>

<InputField
label="Hora Fin"
name="horaFinTrasvase"
value={formData.horaFinTrasvase}
onChange={handleChange}
/>

<InputField
label="Descripción del trabajo"
name="descripcionTrabajo"
value={formData.descripcionTrabajo}
onChange={handleChange}
/>

<InputField
label="Compañía"
name="compania"
value={formData.compania}
onChange={handleChange}
/>

</div>

</CardSection>

<CardSection title="TIPO DE TRABAJO">

<div className="grid-check2433">

<label>

<input
type="radio"
name="tipoTrabajo"
value="preventivo"
checked={formData.tipoTrabajo==="preventivo"}
onChange={handleChange}
/>

Mantenimiento Preventivo

</label>

<label>

<input
type="radio"
name="tipoTrabajo"
value="trasvase"
checked={formData.tipoTrabajo==="trasvase"}
onChange={handleChange}
/>

Trasvase

</label>

<label>

<input
type="radio"
name="tipoTrabajo"
value="correctivo"
checked={formData.tipoTrabajo==="correctivo"}
onChange={handleChange}
/>

Mantenimiento Correctivo

</label>

<label>

<input
type="radio"
name="tipoTrabajo"
value="modificacion"
checked={formData.tipoTrabajo==="modificacion"}
onChange={handleChange}
/>

Modificaciones

</label>

</div>

</CardSection>

<CardSection title="LISTA DE VERIFICACIÓN">

  {Object.entries(trasvase2433).map(
    ([seccion, preguntas]) => (

      <div
        key={seccion}
        style={{ marginBottom: "30px" }}
      >

        <h3>

          {seccion === "antes"
            ? "ANTES DE LA ACTIVIDAD"
            : seccion === "durante"
            ? "DURANTE LA ACTIVIDAD"
            : "DESPUÉS DE LA ACTIVIDAD"}

        </h3>

        <table className="sgf-table">

          <thead>

            <tr>

              <th>Concepto</th>
              <th>Sí</th>
              <th>No</th>
              <th>N/A</th>

            </tr>

          </thead>

          <tbody>

            {preguntas.map((texto,index)=>(

              <tr key={index}>

                <td>{texto}</td>

                <td>

                  <input
                    type="radio"
                    name={`${seccion}${index}`}
                    value="si"
                    checked={
                      formData[
                        `${seccion}${index}`
                      ]==="si"
                    }
                    onChange={handleChange}
                  />

                </td>

                <td>

                  <input
                    type="radio"
                    name={`${seccion}${index}`}
                    value="no"
                    checked={
                      formData[
                        `${seccion}${index}`
                      ]==="no"
                    }
                    onChange={handleChange}
                  />

                </td>

                <td>

                  <input
                    type="radio"
                    name={`${seccion}${index}`}
                    value="na"
                    checked={
                      formData[
                        `${seccion}${index}`
                      ]==="na"
                    }
                    onChange={handleChange}
                  />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    )

  )}

</CardSection>

</>



);

}

export default Trasvase2433;