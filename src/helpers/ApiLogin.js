export const LoginUsuario = async (login) => {
  try {
    const fetchResponse = await fetch(
      `https://aula.desarrolloglobal.pe/v03/api/sesiones/login`,
      {
        method: "POST",
        body: login,
      }
    );
    const data = await fetchResponse.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const valirdarUsuario = async (token) => {
    try {
      const fetchResponse = await fetch(
        `https://aula.desarrolloglobal.pe/v03/api/sesiones/verificar`,
        {
          method: "POST",
          body: token,
        }
      );
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  

  export const CerrarSesion = async (tokenLogout) => {
    try {
      const fetchResponse = await fetch(
        `  https://aula.desarrolloglobal.pe/v03/api/sesiones/logout`,
        {
          method: "POST",
          body: tokenLogout,
        }
      );
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  

  export const registroAlumno = async (dataUsu) => {
    try {
      const fetchResponse = await fetch(
        ` https://aula.desarrolloglobal.pe/v03/api/sesiones/registrar`,
        {
          method: "POST",
          body: dataUsu,
        }
      );
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  



