import axios from "axios";

export const ApiDiplomas = () => {
  return axios
    .get("https://aula.desarrolloglobal.pe/v03/api/diplomas")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ApiDiplomasEtiqueta = (etiqueta) => {
  return axios
    .get(`https://aula.desarrolloglobal.pe/v03/api/diplomas/${etiqueta}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ApiDiplomasLimit = () => {
  /*Antes*/
  /*https://aula.desarrolloglobal.pe/v03/api/diplomas/?offset=0&limit=8*/
  return axios
    .get(`https://aula.desarrolloglobal.pe/v03/api/diplomas`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ApiCursos = () => {
  return axios
    .get(`https://aula.desarrolloglobal.pe/v03/api/cursos`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ApiCursosEtiqueta = (etiqueta) => {
  return axios
    .get(`https://aula.desarrolloglobal.pe/v03/api/cursos/${etiqueta}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ApiCursosLimit = () => {
  /*Antes*/
  /*https://aula.desarrolloglobal.pe/v03/api/cursos/?offset=0&limit=8*/
  return axios
    .get(`https://aula.desarrolloglobal.pe/v03/api/cursos`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ApiInformacion = async (dataPagina) => {
  if (dataPagina.get("curso") === null) {
    const fetchResponse = await fetch(
      `https://aula.desarrolloglobal.pe/v03/api/diplomas/setProspecto`,
      {
        method: "POST",
        body: dataPagina,
      }
    );
    const data = await fetchResponse.json();
    return data;
  } else {
    const fetchResponse = await fetch(
      `https://aula.desarrolloglobal.pe/v03/api/cursos/setProspecto`,
      {
        method: "POST",
        body: dataPagina,
      }
    );
    const data = await fetchResponse.json();
    return data;
  }
};

export const getLocalizacion = () => {
  return axios
    .get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=5439d75ced19410c865a3d67a41f04d6`
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};



export const ApiDiplomados = () => {
  return axios
    .get("https://aula.desarrolloglobal.pe/v03/api/diplomados")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const ApiDiplomadosEtiqueta = (etiqueta) => {
  return axios
    .get(`https://aula.desarrolloglobal.pe/v03/api/diplomados/${etiqueta}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};