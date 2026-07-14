import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generarPDFSGF2401(formData) {

const doc = new jsPDF("p", "mm", "letter");

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

  doc.text(
    `Fecha: ${formData.fecha}`,
    15,
    35
  );

  doc.text(
    `Hora: ${formData.hora}`,
    70,
    35
  );

  doc.text(
    `Status: ${formData.status}`,
    130,
    35
  );

  autoTable(doc, {

    startY: 45,

    theme: "grid",

    head: [["Campo", "Valor"]],

    body: [

      ["Proveedor", formData.proveedor],

      ["Material", formData.material],

      ["Operador", formData.operador],

      ["Turno", formData.turno],

      ["Diseño", formData.diseno],

      ["Tripulación", formData.tripulacion],

      ["Placas / Número", formData.placasNumero],

      ["Factura / Remisión", formData.facturaRemision]

    ]

  });

  doc.save("SG-F-24-01.pdf");

}