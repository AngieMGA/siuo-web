function StatusButton({
  active,
  onClick
}) {

  return (

    <button
      type="button"
      onClick={onClick}
      style={{

        width: "34px",

        height: "34px",

        borderRadius: "10px",

        border: active
          ? "2px solid #2e7d32"
          : "2px solid #cfcfcf",

        backgroundColor: active
          ? "#2e7d32"
          : "#f5f5f5",

        color: active
          ? "white"
          : "transparent",

        fontWeight: "bold",

        fontSize: "16px",

        cursor: "pointer",

        transition: "0.2s"
      }}
    >

      ✔

    </button>

  );
}

export default StatusButton;