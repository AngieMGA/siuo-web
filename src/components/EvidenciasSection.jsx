import { useState } from "react";
import CardSection from "./CardSection";

function EvidenciasSection() {

  const [imagen, setImagen] = useState(null);

  const handleImagen = (e) => {

    const archivo = e.target.files[0];

    if (archivo) {
      setImagen(URL.createObjectURL(archivo));
    }
  };

  return (

    <CardSection title="EVIDENCIAS">

      <div className="grupo">

        <label>Subir evidencia fotográfica</label>

        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImagen}
        />

      </div>

      {imagen && (

        <div className="preview-container">

          <img
            src={imagen}
            alt="Evidencia"
            className="preview-img"
          />

        </div>

      )}

    </CardSection>
  );
}

export default EvidenciasSection;