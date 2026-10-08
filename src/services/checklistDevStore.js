const STORAGE_KEY = "siuo_checklists_dev";

function obtenerTodos() {
  try {
    const guardados = localStorage.getItem(STORAGE_KEY);

    return guardados
      ? JSON.parse(guardados)
      : [];
  } catch (error) {
    console.error(
      "Error al leer checklists de desarrollo:",
      error
    );

    return [];
  }
}

function guardarTodos(checklists) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(checklists)
  );
}

export function guardarChecklistDev(checklist) {
  const checklists = obtenerTodos();

  const indice = checklists.findIndex(
    (item) => item.folio === checklist.folio
  );

  const checklistConFecha = {
    ...checklist,
    fechaActualizacion: new Date().toISOString()
  };

  if (indice >= 0) {
    checklists[indice] = checklistConFecha;
  } else {
    checklists.push(checklistConFecha);
  }

  guardarTodos(checklists);

  return checklistConFecha;
}

export function obtenerChecklistDev(folio) {
  const checklists = obtenerTodos();

  return (
    checklists.find(
      (item) => item.folio === folio
    ) || null
  );
}

export function obtenerChecklistsPendientesDev(area) {
  const checklists = obtenerTodos();

  return checklists
    .filter(
      (item) =>
        item.areaActual === area &&
        item.estadoFlujo !== "FINALIZADO"
    )
    .sort((a, b) => {
      const fechaA = a.fechaActualizacion
        ? new Date(a.fechaActualizacion).getTime()
        : 0;

      const fechaB = b.fechaActualizacion
        ? new Date(b.fechaActualizacion).getTime()
        : 0;

      return fechaB - fechaA;
    });
}

export function actualizarChecklistDev(
  folio,
  cambios
) {
  const checklists = obtenerTodos();

  const indice = checklists.findIndex(
    (item) => item.folio === folio
  );

  if (indice === -1) {
    return null;
  }

  checklists[indice] = {
    ...checklists[indice],
    ...cambios,
    fechaActualizacion: new Date().toISOString()
  };

  guardarTodos(checklists);

  return checklists[indice];
}