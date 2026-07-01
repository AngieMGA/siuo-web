import CardSection from "./CardSection";

function PeligrosAmbientales2433({
    formData,
    handleChange
}){

const peligros=[

"Deficiencia de oxígeno",
"Carga manual",
"Movimiento de cargas",
"Colisión o volcadura",
"Partes en movimiento",
"Exposición a ruido",
"Posturas",
"Proyección de partículas",
"Superficies resbalosas",
"Caídas al mismo nivel",
"Contacto con sustancias químicas",
"Incendio",
"Caídas de diferente nivel",
"Invasión",
"Atropellamiento",
"Explosión",
"Contacto con superficies calientes",
"Riesgos eléctricos",
"Polvo",
"Iluminación no adecuada",
"Cuerpos punzocortantes",
"Vibración",
"Aves",
"Agotamiento físico"

];

const ambientales=[

"Generación de residuos peligrosos",
"Generación de ruido",
"Consumo de energía",
"Consumo de agua",
"Generación de calor",
"Consumo de productos químicos",
"Consumo de materiales",
"Descarga de aguas",
"Emisiones a la atmósfera",
"Generación de residuos no peligrosos",
"Contaminación del agua",
"Contaminación del suelo"

];

return(

<>

<CardSection title="PELIGROS">

<div className="grid-peligros">

{peligros.map((item,index)=>(

<label key={index}>

<input
type="checkbox"
name={`peligro${index}`}
checked={formData[`peligro${index}`]}
onChange={handleChange}
/>

{item}

</label>

))}

</div>

</CardSection>

<CardSection title="ASPECTOS AMBIENTALES">

<div className="grid-peligros">

{ambientales.map((item,index)=>(

<label key={index}>

<input
type="checkbox"
name={`ambiental${index}`}
checked={formData[`ambiental${index}`]}
onChange={handleChange}
/>

{item}

</label>

))}

</div>

</CardSection>

<CardSection title="OBSERVACIONES">

<textarea

className="textarea"

rows={6}

name="observaciones2433"

value={formData.observaciones2433}

onChange={handleChange}

/>

</CardSection>

<CardSection title="FIRMAS">

<div className="grid-sgf2433">

<div>

<label>

Nombre de quien realiza la actividad

</label>

<input

className="input"

name="firmaRealiza"

value={formData.firmaRealiza}

onChange={handleChange}

/>

</div>

<div>

<label>

Nombre del Supervisor

</label>

<input

className="input"

name="firmaSupervisor"

value={formData.firmaSupervisor}

onChange={handleChange}

/>

</div>

</div>

</CardSection>

</>

);

}

export default PeligrosAmbientales2433;