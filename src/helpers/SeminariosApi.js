import axios from "axios";

export const seminariosLive = () => {
  return axios
    .get(
      "https://aula.desarrolloglobal.pe/api/seminarios/?offset=0&limit=12"
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const seminarioId = (id) => {
  return axios
    .get(`https://aula.desarrolloglobal.pe/api/seminarios/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const postSeminario = async (dataSeminario) => {
  const fetchResponse = await fetch(
    `https://aula.desarrolloglobal.pe/api/seminarios/setProspecto`,
    {
      method: "POST",
      body: dataSeminario,
    }
  );
  const data = await fetchResponse.json();
  return data;
};
