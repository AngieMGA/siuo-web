function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  error = "",
  options = []
}) {

  return (

    <div className="grupo">

      <label>{label}</label>

      {type === "select" ? (

        <select
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "input-error" : ""}
        >

          <option value="">
            Seleccione...
          </option>

          {options.map((opcion) => (

            <option
              key={opcion}
              value={opcion}
            >
              {opcion}
            </option>

          ))}

        </select>

      ) : (

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "input-error" : ""}
        />

      )}

      {error && (

        <span className="error-text">
          {error}
        </span>

      )}

    </div>

  );

}

export default InputField;