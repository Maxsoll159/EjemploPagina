export const ApiCulqi = (info) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer sk_test_e045ZdBtncmKBQzy",
      "Content-Type": "application/json",
    },
    body:
      '{"amount":1000,"currency_code":"PEN","email":"' + info.email + '","source_id":"' + info.id +'"}',
  };
  fetch(
    "https://api.culqi.com/v2/charges?limit=50&before=sk_test_e045ZdBtncmKBQzy",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
