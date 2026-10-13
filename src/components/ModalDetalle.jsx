
function ModalDetalle({ checklist, cerrarModal }) {
  if (!checklist) return null;

  return (
    <div className="modal-overlay" onClick={cerrarModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Detalle del checklist</h2>

        <p>
          <strong>Folio:</strong>{" "}
          {checklist.folio || "No registrado"}
        </p>

        <p>
          <strong>Tipo de checklist:</strong>{" "}
          {checklist.tipoChecklist || "No especificado"}
        </p>

        <p>
          <strong>Operador:</strong>{" "}
          {checklist.nombreOperador || "No registrado"}
        </p>

        <p>
          <strong>Placas:</strong>{" "}
          {checklist.placasytarjetadecirculacion || "No registradas"}
        </p>

        <p>
          <strong>Delivery:</strong>{" "}
          {checklist.delivery || "No registrado"}
        </p>

        <p>
          <strong>Factura/remisión:</strong>{" "}
          {checklist.facturaRemision || "No registrada"}
        </p>

        <button
          type="button"
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
