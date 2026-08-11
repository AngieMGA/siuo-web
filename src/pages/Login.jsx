import { useState } from "react";

import "../styles/Login.css";

function Login({ onLogin }) {

  const [usuario, setUsuario] =
    useState("");

  const [password, setPassword] =
    useState("");
const iniciarSesion = async () => {

    try {

        const respuesta = await fetch(
            "http://localhost:5029/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    usuario,
                    password
                })
            }
        );

        const data = await respuesta.json();

        if (!respuesta.ok) {

            alert(
                data.mensaje ||
                "Usuario o contraseña incorrectos"
            );

            return;
        }

        // Guardamos la sesión
        sessionStorage.setItem(
            "usuario",
            JSON.stringify(data.usuario)
        );

        sessionStorage.setItem(
            "token",
            data.token
        );

        onLogin(data.usuario);

    } catch (error) {

        console.error(error);

        alert(
            "No se pudo conectar con el servidor."
        );

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