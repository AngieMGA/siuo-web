function CardSection({ title, children }) {
  return (
    <div className="card-section">

      <h2 className="subtitulo">
        {title}
      </h2>

      {children}

    </div>
  );
}

export default CardSection;