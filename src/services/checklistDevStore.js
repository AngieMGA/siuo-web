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

  if (indice >= 0) {
    checklists[indice] = checklist;
  } else {
    checklists.push(checklist);
  }

  guardarTodos(checklists);

  return checklist;
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

  return checklists.filter(
    (item) =>
      item.areaActual === area &&
      item.estadoFlujo !== "FINALIZADO"
  );
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
    ...cambios
  };

  guardarTodos(checklists);

  return checklists[indice];
}