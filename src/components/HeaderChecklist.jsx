function HeaderChecklist({
  codigo,
  titulo,
  subtitulo,
  children
}) {

  return (

    <div className="rhf-header">

      <div className="rhf-top">

        {children}

        <div className="rhf-header-content">

          <div className="rhf-codigo">
            {codigo}
          </div>

          <div className="rhf-titulo">
            {titulo}
          </div>

          <div className="rhf-subtitulo">
            {subtitulo}
          </div>

        </div>

      </div>

    </div>

  );

}

export default HeaderChecklist;