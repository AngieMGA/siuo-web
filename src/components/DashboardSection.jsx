import CardSection from "./CardSection";

function DashboardSection({ historial }) {

  const totalChecklists = historial.length;

  const operadoresUnicos = [
    ...new Set(
      historial.map(
        item => item.nombreOperador
      )
    )
  ];

  const totalOperadores =
    operadoresUnicos.length;

  const totalRemolques =
    historial.filter(
      item => item.remolque1 || item.remolque2
    ).length;

  return (

    <CardSection title="DASHBOARD">

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h3>Total Checklists</h3>

          <p>{totalChecklists}</p>

        </div>

        <div className="dashboard-card">

          <h3>Operadores</h3>

          <p>{totalOperadores}</p>

        </div>

        <div className="dashboard-card">

          <h3>Remolques</h3>

          <p>{totalRemolques}</p>

        </div>

      </div>

    </CardSection>
  );
}

export default DashboardSection;