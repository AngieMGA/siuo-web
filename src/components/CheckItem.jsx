function CheckItem({
  label,
  name,
  checked,
  onChange
}) {
  return (
    <div className="check-group">

      <label>

        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />

        {label}

      </label>

    </div>
  );
}

export default CheckItem;