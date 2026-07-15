import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logoIeqsa.png";
import { checklistSGF2401 } from "../data/checklistSGF2401";

function dibujarSeccion(doc, titulo, datos, yInicial) {

  // Encabezado gris
  doc.setFillColor(220, 220, 220);

  doc.rect(
    10,
    yInicial,
    195,
    8,
    "F"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);

  doc.text(
    titulo,
    15,
    yInicial + 6
  );

  // Datos
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  let y = yInicial + 16;

  datos.forEach((campo, index) => {

    const columna = index % 2;

    if (columna === 0) {

      doc.text(
        `${campo[0]}: ${campo[1] || ""}`,
        15,
        y
      );

    } else {

      doc.text(
        `${campo[0]}: ${campo[1] || ""}`,
        110,
        y
      );

      y += 8;

    }

  });

  return y + 4;

}

export function generarPDFSGF2401(formData) {

const doc = new jsPDF("p", "mm", "letter");

doc.addImage(
  logo,
  "PNG",
  15,
  10,
  28,
  28
);

doc.setDrawColor(0);

doc.rect(
  10,
  10,
  195,
  35
);

doc.line(
  45,
  10,
  45,
  45
);

doc.line(
  10,
  45,
  205,
  45
);

  // ===== Encabezado =====

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);

  doc.text(
    "SG-F-24-01",
    105,
    15,
    { align: "center" }
  );

  doc.setFontSize(13);

  doc.text(
    "RECEPCIÓN DE MATERIA PRIMA",
    105,
    23,
    { align: "center" }
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  doc.setFont("helvetica", "bold");

  doc.text("Fecha:", 15, 53);
  doc.text("Hora:", 75, 53);
  doc.text("Status:", 135, 53);
  doc.text("Folio:", 15, 60);
  doc.text(formData.folio, 30, 60);

  doc.setFont("helvetica", "normal");

  doc.text(formData.fecha, 30, 53);
  doc.text(formData.hora, 90, 53);
  doc.text(formData.status, 155, 53);

  doc.setFillColor(220, 220, 220);

  doc.rect(
    10,
    60,
    195,
    8,
    "F"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);

  doc.text(
    "INFORMACIÓN GENERAL",
    15,
    66
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  const informacionGeneral = [

  ["Proveedor", formData.proveedor],
  ["Material", formData.material],

  ["Operador", formData.operador],
  ["Lote", formData.lote],

  ["Turno", formData.turno],
  ["Diseño", formData.diseno],

  ["Tripulación", formData.tripulacion],
  ["Placas / Número", formData.placasNumero],

  ["Orden de Compra", formData.ordenCompra],
  ["Factura / Remisión", formData.facturaRemision],

  ["Alérgeno", formData.alergeno]

];

let y = 60;

y = dibujarSeccion(
  doc,
  "INFORMACIÓN GENERAL",
  informacionGeneral,
  y
);
  
const datosPesaje = [

  ["Peso Inicial", formData.pesoInicial],
  ["Peso Final", formData.pesoFinal],

  ["Tara", formData.tara],
  ["Número o Código", formData.numeroCodigo],

  ["TQ1 Inicial", formData.tq1Inicial],
  ["TQ1 Final", formData.tq1Final],

  ["PSI TQ1 Inicial", formData.psiTq1Inicial],
  ["PSI TQ1 Final", formData.psiTq1Final],

  ["TQ2 Inicial", formData.tq2Inicial],
  ["TQ2 Final", formData.tq2Final],

  ["PSI TQ2 Inicial", formData.psiTq2Inicial],
  ["PSI TQ2 Final", formData.psiTq2Final]

];

  y = dibujarSeccion(
    doc,
    "DATOS DE PESAJE Y TANQUES",
    datosPesaje,
    y
  );

  const datosMerma = [

    ["Saco 1", formData.saco1Kg],
    ["Saco 2", formData.saco2Kg],

    ["Saco 3", formData.saco3Kg],
    ["Saco 4", formData.saco4Kg],

    ["Saco 5", formData.saco5Kg],
    ["Saco 6", formData.saco6Kg],

    ["Saco 7", formData.saco7Kg],
    ["Saco 8", formData.saco8Kg],

    ["Total Kg", formData.totalKg],
    ["Promedio", formData.promedioKg],

    ["Dif. Prom. Teórico", formData.diferenciaKg],
    ["Merma Kg", formData.mermaKg]

  ];

  y = dibujarSeccion(
    doc,
    "AZÚCAR - CÁLCULO DE MERMA",
    datosMerma,
    y
  );

  const datosSupersaco = [];

  for (let i = 1; i <= 9; i++) {

    datosSupersaco.push([
      `Supersaco ${i}`,
      formData[`supersaco${i}`]
    ]);

  }

  y = dibujarSeccion(
    doc,
    "ESTADO DEL SUPERSACO",
    datosSupersaco,
    y
  );

    const observaciones = [

    [
      "Observaciones",
      formData.observacionesSGF2401
    ],

    [
      "Nombre quien recibe",
      formData.nombreRecibe
    ],

    [
      "Supervisor / Verificó",
      formData.nombreSupervisor
    ]

  ];

  y = dibujarSeccion(
    doc,
    "OBSERVACIONES",
    observaciones,
    y
  );

  let inicioTabla = y + 12;

  checklistSGF2401.secciones.forEach((seccion) => {

  if (seccion.preguntas.length === 0) return;

  autoTable(doc, {

    startY: inicioTabla,

    theme: "grid",

    head: [[
      "Pregunta",
      "Resultado"
    ]],

    body: seccion.preguntas.map((pregunta) => {

  let resultado = "";

  if (formData[pregunta.id] === "cumple") {

    resultado = "Cumple";

  } else if (formData[pregunta.id] === "noCumple") {

    resultado = "No cumple";

  } else {

    resultado = "N/A";

  }

  return [

    pregunta.texto,

    resultado

  ];

}),

    headStyles: {

      fillColor: [220, 220, 220],

      textColor: 0

    },

    columnStyles: {

  0: {
    cellWidth: 155
  },

  1: {
    cellWidth: 35
  }

}

  });

  inicioTabla =
    doc.lastAutoTable.finalY + 10;

});

doc.save("SG-F-24-01.pdf");

}