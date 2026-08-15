import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logoIeqsa.png";
import { checklistSGF2401 } from "../data/checklistSGF2401";

function dibujarSeccion(doc, titulo, datos, yInicial) {

  doc.setFillColor(220,220,220);

  doc.rect(
    10,
    yInicial,
    195,
    8,
    "F"
  );

  doc.setFont("helvetica","bold");
  doc.setFontSize(10);

  doc.text(
    titulo,
    15,
    yInicial + 6
  );

  doc.setFont("helvetica","normal");
  doc.setFontSize(10);

  let y = yInicial + 16;

  const alturaNecesaria =
  Math.ceil(datos.length / 2) * 8 + 20;

if (yInicial + alturaNecesaria > 255) {

  doc.addPage();

  yInicial = 20;

}

  datos.forEach((campo,index)=>{

    const columna = index % 2;

    if(columna===0){

      doc.text(
        `${campo[0]}: ${campo[1] || ""}`,
        15,
        y
      );

    }else{

      doc.text(
        `${campo[0]}: ${campo[1] || ""}`,
        110,
        y
      );

      }

      if (columna === 1 || index === datos.length - 1) {

        y += 8;

    }

  });

  return y + 4;

}

function dibujarChecklist(
  doc,
  secciones,
  formData,
  inicioTabla
) {

  secciones.forEach((seccion) => {

    if (seccion.preguntas.length === 0) return;

    const alturaPregunta = 12;

    if (inicioTabla + alturaPregunta > 265) {

      doc.addPage();

      inicioTabla = 20;

    }

    doc.setFillColor(220,220,220);

    doc.rect(
      10,
      inicioTabla,
      195,
      7,
      "F"
    );

    doc.setFont("helvetica","bold");
    doc.setFontSize(10);

    doc.text(
      seccion.nombre.toUpperCase(),
      15,
      inicioTabla + 5
    );

    inicioTabla += 8;

    autoTable(doc,{

      startY: inicioTabla,

      theme:"grid",

      head:[["Pregunta","Resultado"]],

      body: seccion.preguntas.map((pregunta)=>{

  let resultado="N/A";

  if(formData[pregunta.id]==="cumple")
    resultado="Cumple";

  if(formData[pregunta.id]==="noCumple")
    resultado="No cumple";

  let textoPregunta = pregunta.texto;

  // Agregar número de sello de transporte
  if (
    pregunta.id === "TR-011" &&
    formData.numeroSello
  ) {

    textoPregunta +=
      `\nNúmero: ${formData.numeroSello}`;

  }

  return[
    textoPregunta,
    resultado
  ];

}),

      styles:{
        fontSize:9,
        cellPadding:2
      },

      headStyles:{
        fillColor:[235,235,235],
        textColor:0
      },

      columnStyles:{
        0:{cellWidth:145},
        1:{cellWidth:45}
      }

    });

    inicioTabla =
      doc.lastAutoTable.finalY + 6;

  });

  return inicioTabla;

}

export function generarPDFSGF2401(formData) {

console.log(formData);

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

  const informacionGeneral = [

  ["Proveedor", formData.proveedor],
  ["Material", formData.material],

  ["Operador", formData.operador],

  ["Turno", formData.turno],
  ["Diseño", formData.diseno],

  ["Tripulación", formData.tripulacion],
  ["Placas / Número", formData.placasNumero],

  ["Factura / Remisión", formData.facturaRemision],

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

  /*
  const hayDatosPesaje = datosPesaje.some(
    ([, valor]) => valor && String(valor).trim() !== ""
  );

  if (hayDatosPesaje) {

  y = dibujarSeccion(
    doc,
    "DATOS DE PESAJE Y TANQUES",
    datosPesaje,
    y
  );

  }
  */

  let inicioTabla = y + 12;

inicioTabla = dibujarChecklist(
  doc,
  checklistSGF2401.secciones,
  formData,
  inicioTabla
);

y = inicioTabla;

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

  console.log(formData.observacionesSGF2401);
console.log(formData.nombreRecibe);
console.log(formData.nombreSupervisor);

    // Si ya no cabe, crea una nueva página
if (y + 45 > 255) {
  doc.addPage();
  y = 20;
}

// Encabezado
doc.setFillColor(220, 220, 220);
doc.rect(10, y, 195, 8, "F");

doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.text("OBSERVACIONES", 15, y + 6);

y += 15;

// Observaciones

doc.setFont("helvetica", "bold");
doc.text("Observaciones:", 15, y);

y += 6;

doc.setFont("helvetica", "normal");

doc.text(
    formData.observacionesSGF2401 || "",
    15,
    y,
    {
        maxWidth: 180
    }
);

// Línea debajo de las observaciones
doc.line(
    15,
    y + 8,
    190,
    y + 8
);

y += 18;

// Nombre quien recibe

doc.setFont("helvetica", "bold");
doc.text("Nombre quien recibe:", 15, y);

doc.setFont("helvetica", "normal");
doc.text(
    formData.nombreRecibe || "",
    65,
    y
);

y += 10;

// Supervisor

doc.setFont("helvetica", "bold");
doc.text("Supervisor / Verificó:", 15, y);

doc.setFont("helvetica", "normal");
doc.text(
    formData.nombreSupervisor || "",
    65,
    y
);
  

doc.save(`${formData.folio}.pdf`);

}