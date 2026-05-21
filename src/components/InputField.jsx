function InputField({
  label,
  name,
  value,
  onChange,
  type = "text"
}) {
  return (
    <div className="grupo">

      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}

export default InputField;