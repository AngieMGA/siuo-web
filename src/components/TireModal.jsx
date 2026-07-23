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

    const cambiarEstado = (estado) => {

        setDatos(prev => ({
            ...prev,
            estado
        }));

    };

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

                <h2>Llanta {datos.id}</h2>

                <hr />

                <label>Estado</label>

                <select
                    value={datos.estado}
                    onChange={(e) =>
                        cambiarEstado(e.target.value)
                    }
                >

                    <option value={ESTADOS.BIEN}>
                        Bien
                    </option>

                    <option value={ESTADOS.OBSERVACION}>
                        Observación
                    </option>

                    <option value={ESTADOS.DANADA}>
                        Dañada
                    </option>

                </select>

                <br />
                <br />

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
                                checked={
                                    datos.incidencias.includes(
                                        incidencia.id
                                    )
                                }
                                onChange={() =>
                                    cambiarIncidencia(
                                        incidencia.id
                                    )
                                }
                            />

                            {" "}
                            {incidencia.nombre}

                        </label>

                    ))}

                </div>

                <br />

                <label>Comentario</label>

                <textarea
                    rows="4"
                    value={datos.comentario}
                    onChange={(e) =>
                        cambiarComentario(
                            e.target.value
                        )
                    }
                />

                <br />
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

                    <button
                        type="button"
                        onClick={() =>
                            onGuardar(datos)
                        }
                    >
                        Guardar
                    </button>

                </div>

            </div>

        </div>

    );

}

export default TireModal;