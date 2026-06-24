function SelectionCard({
  titulo,
  icono,
  seleccionado,
  tipo = "success",
  onClick
}) {

  return (

    <div
      className={`
        selection-card
        ${seleccionado ? "active" : ""}
        ${tipo}
      `}
      onClick={onClick}
    >

      <div className="selection-icon">

        {icono}

      </div>

      <div className="selection-title">

        {titulo}

      </div>

    </div>

  );

}

export default SelectionCard;