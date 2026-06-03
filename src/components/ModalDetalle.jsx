function ModalDetalle({
  checklist,
  cerrarModal
}) {

  if (!checklist) return null;

  return (

    <div className="modal-overlay">

      <div className="modal-content">

        <h2>
          Detalle Checklist
        </h2>

        <p>
          <strong>Folio:</strong>{" "}
          {checklist.folio}
        </p>

        <p>
          <strong>Inspector:</strong>{" "}
          {checklist.inspector}
        </p>

        <p>
          <strong>Fecha:</strong>{" "}
          {checklist.fecha}
        </p>

        <p>
          <strong>Hora:</strong>{" "}
          {checklist.hora}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {checklist.status}
        </p>

        <hr />

        <p>
          <strong>Operador:</strong>{" "}
          {checklist.nombreOperador}
        </p>

        <p>
          <strong>Línea:</strong>{" "}
          {checklist.lineaTransporte}
        </p>

        <p>
          <strong>Placas:</strong>{" "}
          {checklist.placasTracto}
        </p>

        <p>
          <strong>Teléfono:</strong>{" "}
          {checklist.telefonoOperador}
        </p>

        <hr />

        <p>
          <strong>Remolque 1:</strong>{" "}
          {checklist.remolque1}
        </p>

        <p>
          <strong>Remolque 2:</strong>{" "}
          {checklist.remolque2}
        </p>

        <button
          className="boton"
          onClick={cerrarModal}
        >
          Cerrar
        </button>

      </div>

    </div>
  );
}

export default ModalDetalle;