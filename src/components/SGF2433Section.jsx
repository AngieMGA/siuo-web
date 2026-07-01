import DatosGenerales2433 from "./DatosGenerales2433";
import NivelTanque2433 from "./NivelTanque2433";
import Riesgos2433 from "./Riesgos2433";
import CondicionesMaterial2433 from "./CondicionesMaterial2433";
import Caducidad2433 from "./Caducidad2433";
import SeguridadTransporte2433 from "./SeguridadTransporte2433";
import EPP2433 from "./EPP2433";
import PeligrosAmbientales2433 from "./PeligrosAmbientales2433";
import Trasvase2433 from "./Trasvase2433";

function SGF2433Section({
    formData,
    handleChange
}){

    return(

        <>

            <DatosGenerales2433
                formData={formData}
                handleChange={handleChange}
            />

            <NivelTanque2433
                formData={formData}
                handleChange={handleChange}
            />

            <Riesgos2433
                formData={formData}
                handleChange={handleChange}
            />

            <CondicionesMaterial2433
                formData={formData}
                handleChange={handleChange}
            />

            <Caducidad2433
                formData={formData}
                handleChange={handleChange}
            />

            <SeguridadTransporte2433
                formData={formData}
                handleChange={handleChange}
            />

            <EPP2433
                formData={formData}
                handleChange={handleChange}
            />

            <PeligrosAmbientales2433
                formData={formData}
                handleChange={handleChange}
            />

            <Trasvase2433
                formData={formData}
                handleChange={handleChange}
            />

        </>

    );

}

export default SGF2433Section;