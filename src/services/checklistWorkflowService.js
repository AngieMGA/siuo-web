import { checklistWorkflow } from "../config/checklistWorkflow";

/**
 * Obtiene la configuración de flujo de un checklist.
 */
export function obtenerWorkflow(codigoChecklist) {
  return checklistWorkflow[codigoChecklist] || null;
}

/**
 * Obtiene la etapa correspondiente al área actual.
 */
export function obtenerEtapaPorArea(
  codigoChecklist,
  area
) {
  const workflow = obtenerWorkflow(codigoChecklist);

  if (!workflow) {
    return null;
  }

  return (
    workflow.etapas.find(
      (etapa) => etapa.area === area
    ) || null
  );
}

/**
 * Determina si un área puede editar una sección.
 */
export function puedeEditarSeccion(
  codigoChecklist,
  area,
  seccion
) {
  const etapa = obtenerEtapaPorArea(
    codigoChecklist,
    area
  );

  if (!etapa || !etapa.puedeEditar) {
    return false;
  }

  return etapa.seccionesEditables.includes(
    seccion
  );
}

/**
 * Determina si el área puede enviar el checklist
 * a la siguiente etapa.
 */
export function puedeEnviar(
  codigoChecklist,
  area
) {
  const etapa = obtenerEtapaPorArea(
    codigoChecklist,
    area
  );

  return etapa?.puedeEnviar === true;
}

/**
 * Determina si el área puede finalizar el checklist.
 */
export function puedeFinalizar(
  codigoChecklist,
  area
) {
  const etapa = obtenerEtapaPorArea(
    codigoChecklist,
    area
  );

  return etapa?.puedeFinalizar === true;
}

/**
 * Obtiene el área siguiente.
 */
export function obtenerSiguienteArea(
  codigoChecklist,
  area
) {
  const etapa = obtenerEtapaPorArea(
    codigoChecklist,
    area
  );

  return etapa?.siguienteArea || null;
}

/**
 * Obtiene los estados configurados para el checklist.
 */
export function obtenerEstados(
  codigoChecklist
) {
  const workflow = obtenerWorkflow(
    codigoChecklist
  );

  return workflow?.estados || null;
}