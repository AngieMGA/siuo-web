import { useEffect, useState } from "react";
import CardSection from "./CardSection";

function EvidenciasSection({ onEvidenciasChange }) {

  const [evidencias, setEvidencias] = useState([]);

  const handleImagen = (e) => {

    const archivo = e.target.files[0];

    if (!archivo) {
      return;
    }

    const nuevaEvidencia = {
      archivo: archivo,
      preview: URL.createObjectURL(archivo)
    };
setEvidencias((anteriores) => {

  const actualizadas = [
    ...anteriores,
    nuevaEvidencia
  ];

  if (onEvidenciasChange) {
    onEvidenciasChange(
      actualizadas.map(
        (evidencia) => evidencia.archivo
      )
    );
  }

  return actualizadas;
});

    // Permite volver a abrir la cámara
    e.target.value = "";
  };

  useEffect(() => {

    return () => {

      evidencias.forEach((evidencia) => {
        URL.revokeObjectURL(evidencia.preview);
      });

    };

  }, [evidencias]);

  return (

    <CardSection title="EVIDENCIAS">

      <div className="grupo">

        <label>Tomar evidencia fotográfica</label>

        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImagen}
        />

      </div>

      {evidencias.length > 0 && (

        <div className="preview-container">

          {evidencias.map((evidencia, indice) => (

            <div
              key={indice}
              className="evidencia-item"
            >

              <img
                src={evidencia.preview}
                alt={`Evidencia ${indice + 1}`}
                className="preview-img"
              />

              <div>
                Evidencia {indice + 1}
              </div>

            </div>

          ))}

        </div>

      )}

    </CardSection>
  );
}

export default EvidenciasSection;