function FuelGauge({
  titulo,
  valor,
  name,
  handleChange
}) {

  return (

    <div className="fuel-card">

      <h3>{titulo}</h3>

      <div className="fuel-scale">

  <div className="fuel-mark">
    <span>E</span>
    <div className="fuel-line"></div>
  </div>

  <div className="fuel-mark">
    <span>1/4</span>
    <div className="fuel-line"></div>
  </div>

  <div className="fuel-mark">
    <span>1/2</span>
    <div className="fuel-line"></div>
  </div>

  <div className="fuel-mark">
    <span>3/4</span>
    <div className="fuel-line"></div>
  </div>

  <div className="fuel-mark">
    <span>F</span>
    <div className="fuel-line"></div>
  </div>

</div>

      <div className="fuel-container">

        <span className="fuel-label">
          E
        </span>

        <input
          type="range"
          min="0"
          max="100"
          name={name}
          value={valor || 50}
          onChange={handleChange}
          className="fuel-slider"
        />

        <span className="fuel-label">
          F
        </span>

      </div>

      <div className="fuel-value">

  {valor || 50}%

</div>

<div
  className={
    Number(valor || 50) >= 51
      ? "fuel-ok"
      : "fuel-bad"
  }
>

  {Number(valor || 50) >= 51
    ? "✅ Mayor a 1/2 tanque"
    : "❌ Menor a 1/2 tanque"}

</div>

      <div
        className={
          Number(valor || 50) >= 51
            ? "fuel-ok"
            : "fuel-bad"
        }
      >

        {Number(valor || 50) >= 51
          ? "✅ Mayor a 1/2 tanque"
          : "❌ Menor a 1/2 tanque"}

      </div>

    </div>

  );

}

export default FuelGauge;