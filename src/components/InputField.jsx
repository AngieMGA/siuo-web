function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  error = ""
}) {

  return (

    <div className="grupo">

      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "input-error" : ""}
      />

      {error && (
        <span className="error-text">
          {error}
        </span>
      )}

    </div>
  );
}

export default InputField;