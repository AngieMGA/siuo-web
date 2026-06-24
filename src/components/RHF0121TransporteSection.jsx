import CardSection from "./CardSection";
import SelectionCard from "./SelectionCard";
import FuelGauge from "./FuelGauge";

function RHF0121TransporteSection({
  formData,
  handleChange
}) {

  return (

    <CardSection title="DATOS DEL TRANSPORTE">

      <div className="selection-group">

  <SelectionCard
    titulo="Nacional"
    icono="🇲🇽"
    tipo="success"
    seleccionado={
      formData.tipoTransporte === "Nacional"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"tipoTransporte",
          value:"Nacional"
        }
      })
    }
  />

  <SelectionCard
    titulo="Exportación"
    icono="🌎"
    tipo="info"
    seleccionado={
      formData.tipoTransporte === "Exportacion"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"tipoTransporte",
          value:"Exportacion"
        }
      })
    }
  />

</div>

      <div className="selection-group">

  <SelectionCard
    titulo="Sencillo"
    icono="🚚"
    tipo="info"
    seleccionado={
      formData.configuracion === "Sencillo"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"configuracion",
          value:"Sencillo"
        }
      })
    }
  />

  <SelectionCard
    titulo="Full"
    icono="🚛"
    tipo="success"
    seleccionado={
      formData.configuracion === "Full"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"configuracion",
          value:"Full"
        }
      })
    }
  />

  <SelectionCard
    titulo="Contenedor"
    icono="📦"
    tipo="info"
    seleccionado={
      formData.configuracion === "Contenedor"
    }
    onClick={() =>
      handleChange({
        target:{
          name:"configuracion",
          value:"Contenedor"
        }
      })
    }
  />

</div>

      <label>Ajuste el medidor de acuerdo al nivel de combustible (%)</label>

      <CardSection title="COMBUSTIBLE">

  <div className="tanques-container">

  <FuelGauge
    titulo="TANQUE 1"
    name="tanque1"
    valor={formData.tanque1}
    handleChange={handleChange}
  />

  <FuelGauge
    titulo="TANQUE 2"
    name="tanque2"
    valor={formData.tanque2}
    handleChange={handleChange}
  />

</div>

</CardSection>

    </CardSection>

  );

}

export default RHF0121TransporteSection;