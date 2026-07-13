import jsPDF from "jspdf";

export function generarPDFSGF2401(formData) {

    const doc = new jsPDF("p", "mm", "letter");

    doc.setFont("helvetica", "bold");

    doc.setFontSize(16);

    doc.text(
        "SG-F-24-01 RECEPCIÓN DE MATERIA PRIMA",
        15,
        15
    );

    doc.save("SG-F-24-01.pdf");

}