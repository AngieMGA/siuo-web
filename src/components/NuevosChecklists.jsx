
import { useEffect, useState } from "react";
import {
  obtenerChecklistsPendientesDev
} from "../services/checklistDevStore";
import "../styles/NuevosChecklists.css";

function NuevosChecklists({
  area,
  onAbrirChecklist
}) {
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    const cargarPendientes = () => {
      const pendientes = obtenerChecklistsPendientesDev(area);
      setChecklists(pendientes);
    };

    cargarPendientes();

    // Actualiza la lista cuando otra parte de la aplicación
    // notifique que cambió el almacenamiento de checklists.
    window.addEventListener(
      "checklists-actualizados",
      cargarPendientes
    );

    return () => {
      window.removeEventListener(
        "checklists-actualizados",
        cargarPendientes
      );
    };
  }, [area]);

  if (checklists.length === 0) {
    return null;
  }

  return (
    <div className="nuevos-checklists">
      <div className="nuevos-checklists-titulo">
        Nuevos checklists
      </div>

      {checklists.map((checklist, index) => (
        <div
          key={
            checklist.id_inspeccion ??
            checklist.idInspeccion ??
            `${checklist.folio}-${index}`
          }
          className="checklist-notificacion"
        >
          <h3>
            {checklist.tipoChecklist === "CHK-TRANSPORTE"
              ? "SG-F-24-06"
              : checklist.tipoChecklist}
          </h3>

          <p>
            <strong>Folio:</strong>{" "}
            {checklist.folio || "Sin folio"}
          </p>

          <p>
            <strong>Estatus:</strong>{" "}
            {checklist.status || checklist.estadoFlujo || "Pendiente"}
          </p>

          <p>
            <strong>Enviado por:</strong>{" "}
            {checklist.nombreRegistroVigilancia ||
              "Vigilancia / Patrimonial"}
          </p>

          <button
            type="button"
            className="boton"
            onClick={() => onAbrirChecklist(checklist)}
          >
            ABRIR CHECKLIST
          </button>
        </div>
      ))}
    </div>
  );
}

export default NuevosChecklists;
