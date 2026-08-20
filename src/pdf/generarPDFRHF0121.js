import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logoIeqsa.png";
import { checklistRHF0121 } from "../data/checklistRHF0121";
import { ESTADOS, INCIDENCIAS } from "../data/truckDiagramData";


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

        return[
          pregunta.texto,
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

function dibujarTablaChecklist(doc, idSeccion, formData, startY) {

    const seccion = checklistTransporte.secciones.find(
        s => s.id === idSeccion
    );

    console.log("SECCIÓN:", idSeccion);

console.table(
    seccion.preguntas.map((pregunta) => ({
        pregunta: pregunta.texto,
        rem1: formData[`${pregunta.id}-REM1`],
        rem2: formData[`${pregunta.id}-REM2`]
    }))
);

    autoTable(doc, {

        startY,

        theme: "grid",

        head: [[
            seccion.nombre.toUpperCase(),
            "REM 1",
            "REM 2"
        ]],

        body: seccion.preguntas.map((pregunta) => [

            pregunta.texto,

            formData[`${pregunta.id}-REM1`] ? "X" : "N/C",

            formData[`${pregunta.id}-REM2`] ? "X" : "N/C",

        ]),

        styles: {
            fontSize: 9,
            cellPadding: 2,
            valign: "middle"
        },

        headStyles: {
            fillColor: [220,220,220],
            textColor: 0
        },

        columnStyles: {

            0: {
                cellWidth: 135
            },

            1: {
                cellWidth: 25,
                halign: "center"
            },

            2: {
                cellWidth: 25,
                halign: "center"
            }

        }

    });

    return doc.lastAutoTable.finalY + 6;

}

function dibujarResumenLlantas(doc, formData, y) {

    const llantas =
        formData.llantasFull || formData.llantasSencillo || [];

    const bien =
        llantas.filter(
            l => l.estado === ESTADOS.BIEN
        ).length;

    const observacion =
        llantas.filter(
            l => l.estado === ESTADOS.OBSERVACION
        ).length;

    const danada =
        llantas.filter(
            l => l.estado === ESTADOS.DANADA
        ).length;

    autoTable(doc, {

        startY: y,

        theme: "grid",

        head: [[
            "BIEN",
            "OBSERVACIÓN",
            "DAÑADAS",
            "TOTAL"
        ]],

        body: [[

            bien,

            observacion,

            danada,

            llantas.length

        ]],

        headStyles: {

            fillColor: [220,220,220],

            textColor: 0

        },

        styles: {

            halign: "center",

            fontSize: 10

        }

    });

    return doc.lastAutoTable.finalY + 8;

}
function dibujarIncidencias(doc, formData, y) {

    const llantas =
        formData.llantasFull || formData.llantasSencillo || [];

    const incidencias = llantas.filter(
        l => l.estado !== ESTADOS.BIEN
    );

    if (incidencias.length === 0) {

        return dibujarSeccion(
            doc,
            "INCIDENCIAS",
            [["Resultado", "Sin incidencias registradas"]],
            y
        );

    }

    const datos = [];

    incidencias.forEach((llanta) => {

        datos.push([
    `Llanta ${llanta.numero}`,
    llanta.estado === ESTADOS.DANADA
        ? "Dañada"
        : "Observación"
]);

        if (llanta.incidencias.length > 0) {

            datos.push([

                "Incidencias",

                llanta.incidencias
                    .map(id => {

                        const encontrada =
                            INCIDENCIAS.find(
                                i => i.id === id
                            );

                        return encontrada
                            ? encontrada.nombre
                            : id;

                    })
                    .join(", ")

            ]);

        }

        if (llanta.comentario) {

            datos.push([
                "Comentario",
                llanta.comentario
            ]);

        }

    });

    return dibujarSeccion(
        doc,
        "INCIDENCIAS",
        datos,
        y
    );

}

function validarSaltoPagina(doc, y, alturaNecesaria = 0) {

    if (y + alturaNecesaria > 260) {

        doc.addPage();

        return 20;

    }

    return y;

}

export function generarPDFRHF0121(formData) {

    console.log("Entré al PDF RH");
    console.log(formData);

    const doc = new jsPDF("p","mm","letter");

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

    doc.setFont("helvetica","bold");
    doc.setFontSize(16);

    doc.text(
        "RH-F-01-21",
        105,
        15,
        { align: "center" }
    );

    doc.setFontSize(13);

    doc.text(
    "INSPECCIÓN DE TRACTOR Y REMOLQUE",
    105,
    23,
    { align: "center" }
);

    doc.setFont("helvetica","normal");
    doc.setFontSize(10);

    doc.setFont("helvetica","bold");

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

    ["Nombre del Operador", formData.nombreOperadorRHF],
    ["Teléfono", formData.telefonoOperador],

    ["Línea de Transporte", formData.lineaTransporteRHF],
    ["Número de Tractor", formData.numeroTractor],

    ["Número de Remolque 1", formData.numeroRemolque1],
    ["Número de Remolque 2", formData.numeroRemolque2],

    ["Placas Tractor", formData.placasTractor],
    ["Placas Remolque 1", formData.placasRemolque1],

    ["Placas Remolque 2", formData.placasRemolque2]

];

y = dibujarSeccion(
    doc,
    "DATOS GENERALES",
    datosGenerales,
    y
);

const datosOperador = [

    ["Presentación", formData.presentacionOperador],
    ["Licencia Federal", formData.numeroLicencia],

    ["Tarjeta de Circulación", formData.numeroTarjeta],
    ["Número IMSS", formData.numeroIMSS],

    ["Seguro Vigente", formData.numeroSeguro],
    ["Carta Porte", formData.numeroCartaPorte],

    ["Observaciones EPP", formData.observacionesEPP]

];

y = dibujarSeccion(
    doc,
    "DATOS DEL OPERADOR",
    datosOperador,
    y
);

let inicioTabla = y + 10;

inicioTabla = dibujarChecklist(
    doc,
    checklistRHF0121.secciones,
    formData,
    inicioTabla
);

y = inicioTabla;

const datosTransporte = [

    ["Tipo de Transporte", formData.tipoTransporte],
    ["Configuración", formData.configuracion],

    ["Tanque 1 (%)", formData.tanque1],
    ["Tanque 2 (%)", formData.tanque2]

];

y = dibujarSeccion(
    doc,
    "DATOS DEL TRANSPORTE",
    datosTransporte,
    y
);

const datosRefrigerado = [

    ["Refrigerado", formData.refrigerado],
    ["Temperatura (°C)", formData.temperatura]

];

y = dibujarSeccion(
    doc,
    "REFRIGERADO",
    datosRefrigerado,
    y
);

const datosResultado = [

    ["Resultado Final", formData.resultadoFinal],

    ["Rampa Asignada", formData.rampaAsignada]

];

y = dibujarSeccion(
    doc,
    "RESULTADO DE LA INSPECCIÓN",
    datosResultado,
    y
);


const datosEntrega = [

    ["Origen (Descarga)", formData.origenDescarga],
    ["Destino (Carga)", formData.destinoCarga],

    ["Número de Sellos / Fleje", formData.numeroSellos],
    ["No. Delivery", formData.numeroDelivery]

];

y = dibujarSeccion(
    doc,
    "DATOS DE ENTREGA",
    datosEntrega,
    y
);

// Si ya no cabe, crear una nueva página
if (y + 45 > 255) {

    doc.addPage();

    y = 20;

}

// Encabezado
doc.setFillColor(220,220,220);

doc.rect(
    10,
    y,
    195,
    8,
    "F"
);

doc.setFont("helvetica","bold");
doc.setFontSize(10);

doc.text(
    "COMENTARIOS",
    15,
    y + 6
);

y += 15;

// Recuadro
doc.rect(
    15,
    y,
    175,
    38
);

// Texto
doc.setFont("helvetica","normal");

doc.text(
    formData.comentarios || "",
    18,
    y + 6,
    {
        maxWidth: 170
    }
);

y += 48;


/*
y = validarSaltoPagina(doc, y, 40);

y = dibujarTablaChecklist(
    doc,
    "DOC",
    formData,
    y
);

y = validarSaltoPagina(doc, y, 40);

y = dibujarTablaChecklist(
    doc,
    "OPE",
    formData,
    y
);

y = validarSaltoPagina(doc, y, 50);

y = dibujarTablaChecklist(
    doc,
    "REM",
    formData,
    y
);

const datosEnrampado = [

    ["Rampa", formData.rampa],

    ["Lateral", formData.lateral],

    ["Observaciones", formData.observacionesEnrampado]

];

y = validarSaltoPagina(doc, y, 30);

y = dibujarSeccion(
    doc,
    "ENRAMPADO",
    datosEnrampado,
    y
);

y = validarSaltoPagina(doc, y, 55);

y = dibujarTablaChecklist(
    doc,
    "EST",
    formData,
    y
);
*/
/*
y = validarSaltoPagina(doc, y, 25);

y = dibujarResumenLlantas(
    doc,
    formData,
    y
);

y = validarSaltoPagina(doc, y, 45);

y = dibujarIncidencias(
    doc,
    formData,
    y
);
*/
console.log(formData);

const pdfBlob = doc.output("blob");

// Descargar el PDF en la computadora
const url = URL.createObjectURL(pdfBlob);

const enlace = document.createElement("a");

enlace.href = url;
enlace.download = `${formData.folio}.pdf`;

document.body.appendChild(enlace);

enlace.click();

document.body.removeChild(enlace);

URL.revokeObjectURL(url);

// Devolver el Blob para que RegistroInicial.jsx
// pueda enviarlo a la API
return pdfBlob;

}