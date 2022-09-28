export const buscarReclamo = async (datos) => {
    try {
    const fetchResponse = await fetch(
      `https://aula.desarrolloglobal.pe/api/reclamos`,
      {
          method: "POST",
          body: datos,
        }
      );
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error
    }
  };


  export const mandarReclamo = async (datos) => {
    try {
    const fetchResponse = await fetch(
      `https://aula.desarrolloglobal.pe/api/reclamos/setReclamo`,
      {
          method: "POST",
          body: datos,
        }
      );
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error
    }
  };
    


  