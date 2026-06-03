import CardSection from "./CardSection";

function SupervisorSection({
  historial,
  verDetalle
}) {

  return (

    <CardSection title="CONSULTA SUPERVISOR">

      {historial.map((item, index) => (

        <div
          key={index}
          className="historial-item"
        >

          <h3>
            Operador:
            {item.nombreOperador}
          </h3>

          <p>
            Inspector:
            {item.inspector}
          </p>

          <p>
            Placas:
            {item.placasTracto}
          </p>

          <p>
            Status:
            {item.status}
          </p>

          <button
            className="btn-editar"
            onClick={() =>
              verDetalle(item)
            }
          >
            Ver Checklist
          </button>

        </div>

      ))}

    </CardSection>
  );
}

export default SupervisorSection;