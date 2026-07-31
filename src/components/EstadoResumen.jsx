import "../styles/EstadoResumen.css";

function EstadoResumen({
    bien,
    observacion,
    danada,
    total
}) {

    return (

        <div className="estado-resumen">

            <div className="estado-card bien">

                <div className="estado-icon">
                    🟢
                </div>

                <div className="estado-info">

                    <span className="estado-numero">
                        {bien}
                    </span>

                    <span className="estado-texto">
                        Bien
                    </span>

                </div>

            </div>

            <div className="estado-card obs">

                <div className="estado-icon">
                    🟡
                </div>

                <div className="estado-info">

                    <span className="estado-numero">
                        {observacion}
                    </span>

                    <span className="estado-texto">
                        Observación
                    </span>

                </div>

            </div>

            <div className="estado-card danada">

                <div className="estado-icon">
                    🔴
                </div>

                <div className="estado-info">

                    <span className="estado-numero">
                        {danada}
                    </span>

                    <span className="estado-texto">
                        Dañada
                    </span>

                </div>

            </div>

            <div className="estado-card total">

                <div className="estado-icon">
                    📋
                </div>

                <div className="estado-info">

                    <span className="estado-numero">
                        {total}
                    </span>

                    <span className="estado-texto">
                        Total
                    </span>

                </div>

            </div>

        </div>

    );

}

export default EstadoResumen;