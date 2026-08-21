import { useEffect, useState } from "react";
import {
  obtenerChecklistsPendientesDev
} from "../services/checklistDevStore";
import "../styles/NuevosChecklists.css";

function NuevosChecklists({
  area,
  onAbrirChecklist
}) {

  const [checklists, setChecklists] =
    useState([]);

  const cargarPendientes = () => {

    const pendientes =
      obtenerChecklistsPendientesDev(area);

    setChecklists(pendientes);
  };

  useEffect(() => {
    cargarPendientes();
  }, [area]);

  if (checklists.length === 0) {
    return null;
  }

  return (
    <div className="nuevos-checklists">

      <div className="nuevos-checklists-titulo">
        🔔 Nuevos checklists
      </div>

      {checklists.map((checklist) => (

        <div
          key={checklist.folio}
          className="checklist-notificacion"
        >

          <h3>
            {checklist.tipoChecklist ===
            "CHK-TRANSPORTE"
              ? "SG-F-24-06"
              : checklist.tipoChecklist}
          </h3>

          <p>
            <strong>Folio:</strong>{" "}
            {checklist.folio}
          </p>

          <p>
            <strong>Estatus:</strong>{" "}
            {checklist.status}
          </p>

          <p>
            <strong>Enviado por:</strong>{" "}
            {checklist.nombreRegistroVigilancia ||
              "Vigilancia / Patrimonial"}
          </p>

          <button
            type="button"
            className="boton"
            onClick={() =>
              onAbrirChecklist(checklist)
            }
          >
            ABRIR CHECKLIST
          </button>

        </div>

      ))}

    </div>
  );
}

export default NuevosChecklists;