import { useEffect, useState } from "react";
import { ESTADOS, INCIDENCIAS } from "../data/truckDiagramData";

function TireModal({
    llanta,
    onClose,
    onGuardar
}) {

    const [datos, setDatos] = useState(null);

    useEffect(() => {

        if (llanta) {

            setDatos({
                ...llanta,
                incidencias: [...llanta.incidencias]
            });

        }

    }, [llanta]);

    if (!datos) return null;

    const cambiarComentario = (comentario) => {

        setDatos(prev => ({
            ...prev,
            comentario
        }));

    };

    const cambiarIncidencia = (id) => {

        const existe = datos.incidencias.includes(id);

        setDatos(prev => ({

            ...prev,

            incidencias: existe
                ? prev.incidencias.filter(i => i !== id)
                : [...prev.incidencias, id]

        }));

    };

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Llanta {datos.numero}</h2>

                <hr />

                {datos.estado === ESTADOS.BIEN && (

    <>

        <p><strong>¿Qué deseas registrar?</strong></p>

        <div
            style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                marginTop: 20,
                marginBottom: 20
            }}
        >

            <button
                type="button"
                onClick={() =>
                    setDatos(prev => ({
                        ...prev,
                        estado: ESTADOS.DANADA
                    }))
                }
            >
                🔴 Dañada
            </button>

            <button
                type="button"
                onClick={() =>
                    setDatos(prev => ({
                        ...prev,
                        estado: ESTADOS.OBSERVACION
                    }))
                }
            >
                🟡 Observación
            </button>

        </div>

    </>

)}

                {datos.estado === ESTADOS.OBSERVACION && (

                    <>

                        <label>Comentario</label>

                        <textarea
                            rows="4"
                            value={datos.comentario}
                            onChange={(e) =>
                                cambiarComentario(e.target.value)
                            }
                        />

                    </>

                )}

                {datos.estado === ESTADOS.DANADA && (

                    <>

                        <label>Incidencias</label>

                        <div>

                            {INCIDENCIAS.map((incidencia) => (

                                <label
                                    key={incidencia.id}
                                    style={{
                                        display: "block",
                                        marginBottom: 5
                                    }}
                                >

                                    <input
                                        type="checkbox"
                                        checked={datos.incidencias.includes(
                                            incidencia.id
                                        )}
                                        onChange={() =>
                                            cambiarIncidencia(incidencia.id)
                                        }
                                    />

                                    {" "}
                                    {incidencia.nombre}

                                </label>

                            ))}

                        </div>

                    </>

                )}

                <br />

<div
    style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: 10
    }}
>

    <button
        type="button"
        onClick={onClose}
    >
        Cancelar
    </button>

    {datos.estado !== ESTADOS.BIEN && (
        <button
            type="button"
            onClick={() => onGuardar(datos)}
        >
            Guardar
        </button>
    )}

</div>

            </div>

        </div>

    );

}

export default TireModal;