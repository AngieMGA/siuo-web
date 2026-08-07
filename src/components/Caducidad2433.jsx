import CardSection from "./CardSection";
import InputField from "./InputField";

function Caducidad2433({
    formData,
    handleChange
}){

    return(

        <CardSection title="REGISTRO DE CADUCIDAD EN CASO DE APLICAR (MATERIALES E INGREDIENTES)">

            <div className="caducidad-grid">

  <InputField
    label="Producto"
    name="producto1"
    value={formData.producto1}
    onChange={handleChange}
  />

  <InputField
    label="Caducidad"
    type="date"
    name="caducidad1"
    value={formData.caducidad1}
    onChange={handleChange}
  />

  <InputField
    label="Producto"
    name="producto2"
    value={formData.producto2}
    onChange={handleChange}
  />

  <InputField
    label="Caducidad"
    type="date"
    name="caducidad2"
    value={formData.caducidad2}
    onChange={handleChange}
  />

  <InputField
    label="Producto"
    name="producto3"
    value={formData.producto3}
    onChange={handleChange}
  />

  <InputField
    label="Caducidad"
    type="date"
    name="caducidad3"
    value={formData.caducidad3}
    onChange={handleChange}
  />

  <InputField
    label="Producto"
    name="producto4"
    value={formData.producto4}
    onChange={handleChange}
  />

  <InputField
    label="Caducidad"
    type="date"
    name="caducidad4"
    value={formData.caducidad4}
    onChange={handleChange}
  />

</div>

        </CardSection>

    );

}

export default Caducidad2433;