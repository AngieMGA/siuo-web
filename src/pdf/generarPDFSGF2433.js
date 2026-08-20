import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logoIeqsa.png";

import {
    transporte2433,
    epp2433,
    trasvase2433,
    peligros2433,
    ambientales2433
} from "../data/checklistSGF2433";

function dibujarSeccion(doc, titulo, datos, yInicial) {

    if (yInicial + 40 > 255) {

        doc.addPage();

        yInicial = 20;

    }

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

        if(columna===1 || index===datos.length-1){

            y += 8;

        }

    });

    return y + 4;

}
function dibujarTablaOpciones(
    doc,
    titulo,
    preguntas,
    prefijo,
    formData,
    y,
    mostrarObservaciones = true
) {

    const anchoPagina = doc.internal.pageSize.getWidth();
    const margen = 10;
    const anchoTabla = anchoPagina - (margen * 2);

    let encabezados = [
        titulo,
        "Cumple",
        "No cumple",
        "N/A"
    ];

    if (mostrarObservaciones) {
        encabezados.push("Observaciones");
    }

    const body = preguntas.map((texto, index) => {

        const valor = formData[`${prefijo}${index}`];

        const fila = [

            texto,

            valor === "cumple" || valor === "si"
                ? "X"
                : "",

            valor === "nocumple" ||
            valor === "noCumple" ||
            valor === "no"
                ? "X"
                : "",

            valor === "na"
                ? "X"
                : ""

        ];

        if (mostrarObservaciones) {

            fila.push(
                formData[`${prefijo}Obs${index}`] || ""
            );

        }

        return fila;

    });

    let columnStyles;

    if (mostrarObservaciones) {

        columnStyles = {

            0: {
                cellWidth: 90
            },

            1: {
                cellWidth: 15,
                halign: "center"
            },

            2: {
                cellWidth: 18,
                halign: "center"
            },

            3: {
                cellWidth: 15,
                halign: "center"
            },

            4: {
                cellWidth: 57
            }

        };

    } else {

        columnStyles = {

            0: {
                cellWidth: anchoTabla - 65
            },

            1: {
                cellWidth: 20,
                halign: "center"
            },

            2: {
                cellWidth: 25,
                halign: "center"
            },

            3: {
                cellWidth: 20,
                halign: "center"
            }

        };

    }

    autoTable(doc, {

        startY: y,

        theme: "grid",

        margin: {
            left: margen,
            right: margen
        },

        head: [encabezados],

        body: body,

        styles: {
            fontSize: 8,
            cellPadding: 2
        },

        headStyles: {
            fillColor: [220, 220, 220],
            textColor: 0
        },

        columnStyles: columnStyles

    });

    return doc.lastAutoTable.finalY + 8;
}

export function generarPDFSGF2433(formData) {

    const doc = new jsPDF("p", "mm", "letter");

    doc.addImage(
    logo,
    "PNG",
    12,
    12,
    22,
    22
);

doc.setDrawColor(0);

doc.rect(10,10,195,35);

doc.line(40,10,40,45);

doc.line(10,45,205,45);

doc.setFont("helvetica","bold");

doc.setFontSize(16);

doc.text(
    "SG-F-24-33",
    122,
    16,
    { align:"center" }
);

doc.setFontSize(11);

doc.text(
    "RECEPCIÓN DE PRODUCTOS QUÍMICOS,",
    122,
    23,
    { align:"center" }
);

doc.text(
    "MATERIALES E INGREDIENTES",
    122,
    30,
    { align:"center" }
);
    doc.setFont("helvetica","bold");
    doc.setFontSize(10);

    doc.text("Fecha:",15,53);
    doc.text("Hora:",75,53);
    doc.text("Status:",135,53);
    doc.text("Folio:",15,60);

    doc.setFont("helvetica","normal");

    doc.text(formData.fecha || "",30,53);
    doc.text(formData.hora || "",90,53);
    doc.text(formData.status || "",155,53);
    doc.text(formData.folio || "",30,60);

        let y = 68;

    const datosGenerales = [

        ["Producto", formData.nombreProducto],

        ["Fecha recepción", formData.fechaRecepcion],

        ["Hora recepción", formData.horaRecepcion],

        ["Operador", formData.operador2433],

        ["Placas", formData.placas2433],

        ["Fecha término", formData.fechaTerminoRecepcion],

        ["Hora término", formData.horaTerminoRecepcion],

        ["No. Sellos", formData.numeroSellos2433],

        ["No. Factura", formData.numeroFactura2433],

        ["Turno", formData.turno2433],

        ["Tripulación", formData.tripulacion2433]

    ];

    y = dibujarSeccion(
        doc,
        "DATOS GENERALES",
        datosGenerales,
        y
    );

    const datosTanque = [

    ["Nivel antes", formData.nivelAntes],
    ["Nivel después", formData.nivelDespues],

    ["Conos de seguridad", formData.conosSeguridad ? "Sí" : "No"],
    ["Ventilar operación", formData.ventilarOperacion ? "Sí" : "No"],

    ["Contenedor identificado", formData.contenedorIdentificado ? "Sí" : "No"],
    ["Identificación NOM", formData.identificacionNOM ? "Sí" : "No"]

];

y = dibujarSeccion(
    doc,
    "NIVEL DEL TANQUE",
    datosTanque,
    y
);

const datosRiesgo = [

    ["Explosivo", formData.explosivo ? "Sí" : "No"],
    ["Inflamable", formData.inflamable ? "Sí" : "No"],

    ["Gas a presión", formData.gasPresion ? "Sí" : "No"],
    ["Corrosivo", formData.corrosivo ? "Sí" : "No"],

    ["Comburente", formData.comburente ? "Sí" : "No"],
    ["Toxicidad", formData.toxicidad ? "Sí" : "No"],

    ["Peligro para la salud", formData.salud ? "Sí" : "No"],
    ["Medio ambiente", formData.medioAmbiente ? "Sí" : "No"]

];

y = dibujarSeccion(
    doc,
    "GRADO DE RIESGO",
    datosRiesgo,
    y
);
autoTable(doc, {

    startY: y,

    theme: "grid",

    head: [[
        "CONDICIONES DEL MATERIAL",
        "Cumple",
        "No cumple",
        "N/A",
        "Observaciones"
    ]],

    body: [

        [

            "Cantidad física vs factura coinciden",

            formData.cantidadFactura === "cumple" ? "X" : "",

            formData.cantidadFactura === "noCumple" ? "X" : "",

            formData.cantidadFactura === "na" ? "X" : "",

            formData.cantidadFacturaObs || ""

        ],

        [

            "El material presenta certificado de calidad",

            formData.certificadoCalidad === "cumple" ? "X" : "",

            formData.certificadoCalidad === "noCumple" ? "X" : "",

            formData.certificadoCalidad === "na" ? "X" : "",

            formData.certificadoCalidadObs || ""

        ],

        [

            "Material y contenedores en buenas condiciones",

            formData.contenedoresBuenasCondiciones === "cumple" ? "X" : "",

            formData.contenedoresBuenasCondiciones === "noCumple" ? "X" : "",

            formData.contenedoresBuenasCondiciones === "na" ? "X" : "",

            formData.contenedoresBuenasCondicionesObs || ""

        ]

    ],

    styles: {

        fontSize: 8,

        cellPadding: 2

    },

    headStyles: {

        fillColor: [220,220,220],

        textColor: 0

    },

    columnStyles: {

        0: { cellWidth: 90 },

        1: { cellWidth: 15, halign: "center" },

        2: { cellWidth: 18, halign: "center" },

        3: { cellWidth: 15, halign: "center" },

        4: { cellWidth: 57 }

    }

});
y = doc.lastAutoTable.finalY + 8;

const datosCaducidad = [

    ["Producto 1", formData.producto1],
    ["Caducidad", formData.caducidad1],

    ["Producto 2", formData.producto2],
    ["Caducidad", formData.caducidad2],

    ["Producto 3", formData.producto3],
    ["Caducidad", formData.caducidad3],

    ["Producto 4", formData.producto4],
    ["Caducidad", formData.caducidad4]

];

y = dibujarSeccion(
    doc,
    "REGISTRO DE CADUCIDAD",
    datosCaducidad,
    y
);

y = dibujarTablaOpciones(
    doc,
    "CALIDAD Y SEGURIDAD DEL SERVICIO DEL TRANSPORTISTA",
    transporte2433,
    "transporte",
    formData,
    y,
    true
);

y = dibujarTablaOpciones(
    doc,
    "EQUIPO DE PROTECCIÓN PERSONAL",
    epp2433,
    "epp",
    formData,
    y,
    false
);

const riesgosSeleccionados = [];

peligros2433.forEach((item, index) => {

    if (formData[`peligro${index}`]) {

        riesgosSeleccionados.push([
            "Peligro",
            item
        ]);

    }

});

ambientales2433.forEach((item, index) => {

    if (formData[`ambiental${index}`]) {

        riesgosSeleccionados.push([
            "Ambiental",
            item
        ]);

    }

});

if (riesgosSeleccionados.length === 0) {

    riesgosSeleccionados.push([
        "Resultado",
        "Sin riesgos seleccionados"
    ]);

}

y = dibujarSeccion(
    doc,
    "PELIGROS Y ASPECTOS AMBIENTALES",
    riesgosSeleccionados,
    y
);

const datosTrasvase = [

    [
        "Tipo de trabajo",
        formData.tipoTrabajo || ""
    ]

];

y = dibujarSeccion(
    doc,
    "TRASVASE",
    datosTrasvase,
    y
);

y = dibujarTablaOpciones(
    doc,
    "ANTES DE LA ACTIVIDAD",
    trasvase2433.antes,
    "antes",
    formData,
    y,
    false
);

y = dibujarTablaOpciones(
    doc,
    "DURANTE LA ACTIVIDAD",
    trasvase2433.durante,
    "durante",
    formData,
    y,
    false
);

y = dibujarTablaOpciones(
    doc,
    "DESPUÉS DE LA ACTIVIDAD",
    trasvase2433.despues,
    "despues",
    formData,
    y,
    false
);

// ==============================
// OBSERVACIONES GENERALES
// ==============================

const datosObservaciones = [

    [
        "Observaciones",
        formData.comentarios2433 || ""
    ]

];

y = dibujarSeccion(
    doc,
    "OBSERVACIONES",
    datosObservaciones,
    y
);


// ==============================
// FIRMAS
// ==============================

const datosFirmas = [

    [
        "Nombre de quien realiza la actividad",
        formData.nombreRecibe2433 || ""
    ],

    [
        "Nombre del Supervisor",
        formData.nombreSupervisor2433 || ""
    ]

];

y = dibujarSeccion(
    doc,
    "FIRMAS",
    datosFirmas,
    y
);

if (y + 40 > 255) {

    doc.addPage();

    y = 20;

}

const pdfBlob = doc.output("blob");

// Descargar el PDF
const url = URL.createObjectURL(pdfBlob);

const enlace = document.createElement("a");

enlace.href = url;
enlace.download = `${formData.folio}.pdf`;

document.body.appendChild(enlace);

enlace.click();

document.body.removeChild(enlace);

URL.revokeObjectURL(url);

// Regresar el Blob para que RegistroInicial.jsx
// pueda enviarlo a la API
return pdfBlob;

}

