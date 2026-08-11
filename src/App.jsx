import { useState } from "react";

import RegistroInicial from "./pages/RegistroInicial";
import Login from "./pages/Login";

function App() {

  const [usuario, setUsuario] = useState(() => {

    const sesionGuardada =
      sessionStorage.getItem("usuario");

    return sesionGuardada
      ? JSON.parse(sesionGuardada)
      : null;
  });

  const handleLogin = (usuarioLogueado) => {

    setUsuario(usuarioLogueado);

  };

  const cerrarSesion = () => {

    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("token");

    setUsuario(null);

  };

  /*
if (!usuario) {
  return (
    <Login
      onLogin={handleLogin}
    />
  );
}
*/

  return (
    <RegistroInicial
      usuario={usuario}
      onLogout={cerrarSesion}
    />
  );
}

export default App;