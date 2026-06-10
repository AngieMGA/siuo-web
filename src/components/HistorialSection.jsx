import { useState } from "react";

import CardSection from "./CardSection";

function HistorialSection({
  historial,
  editarChecklist,
  eliminarChecklist,
  verDetalle
}) {

  const [busqueda, setBusqueda] = useState("");

  const historialFiltrado = historial.filter((item) => {

    return (

      item.nombreOperador
        .toLowerCase()
        .includes(busqueda.toLowerCase())

      ||

      item.lineaTransporte
        .toLowerCase()
        .includes(busqueda.toLowerCase())

      ||

      item.placasTracto
        .toLowerCase()
        .includes(busqueda.toLowerCase())

    );
  });

  return (

    <CardSection title="HISTORIAL DE CHECKLISTS">

      <div className="grupo">

        <label>Buscar checklist</label>

        <input
          type="text"
          placeholder="Buscar operador, placas o folio..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

      </div>

      {historialFiltrado.length === 0 ? (

        <p>No hay resultados</p>

      ) : (

        historialFiltrado.map((item, index) => (

          <div
            key={index}
            className="historial-item"
          >

            <h3>
              Operador: {item.nombreOperador}
            </h3>

            <p>
              Línea: {item.lineaTransporte}
            </p>
            
            <p>
              Inspector: {item.inspector}
            </p>

            <p>
              Status: {item.status}
            </p>

            <p>
              Folio: {item.folio}
            </p>
            
            <p>
              Placas: {item.placasTracto}
            </p>

            <div className="acciones">

              <button
                className="btn-editar"
                onClick={() => editarChecklist(item)}
              >
                Editar
              </button>

              <button
                className="btn-eliminar"
                onClick={() => eliminarChecklist(index)}
              >
                Eliminar
              </button>

              <button
                className="btn-editar"
                onClick={() => verDetalle(item)}
              >
                Ver detalle
              </button>

            </div>

          </div>

        ))

      )}

    </CardSection>
  );
}

export default HistorialSection;