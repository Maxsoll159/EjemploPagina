import axios from "axios";
  
export const ApiInHouse = () =>{
    return axios.get(`https://www.desarrolloglobal.pe/v03/api/inhouses`)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
export const postInHouse = async (dataInhouse) => {
  const fetchResponse = await fetch(
    `https://www.desarrolloglobal.pe/v03/api/inhouse/setProspecto`,
    {
        method: "POST",
        body: dataInhouse,
      }
    );
    const data = await fetchResponse.json();
    return data;
};
  


export const buscarCerti = async (valor) => {
  try {
  const fetchResponse = await fetch(
    `https://www.desarrolloglobal.pe/v03/api/certificados`,
    {
        method: "POST",
        body: valor,
      }
    );
    const data = await fetchResponse.json();
    return data;
  } catch (error) {
    return error
  }
};
  