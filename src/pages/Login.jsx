import { useState } from "react";

import "../styles/Login.css";

function Login({ onLogin }) {

  const [usuario, setUsuario] =
    useState("");

  const [password, setPassword] =
    useState("");

  const iniciarSesion = () => {

    if (
      usuario === "admin"
      &&
      password === "1234"
    ) {

      onLogin();

    } else {

      alert("Usuario o contraseña incorrectos");
    }
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>
          SIUO LOGIN
        </h1>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) =>
            setUsuario(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={iniciarSesion}>
          Ingresar
        </button>

      </div>

    </div>
  );
}

export default Login;