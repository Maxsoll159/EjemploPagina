import JSConfetti from "js-confetti";
import { useLocation } from "react-router-dom";

const jsConfetti = new JSConfetti();

export const parsearFecha = (fecha) => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let fechaNumero = fecha.split("-");
  let fechaParas = meses.find((mes, index) => {
    return index === parseInt(fechaNumero[1]) - 1;
  });
  return <>{fechaParas}</>;
};

export const parsearHora = (valor) => {
  let date = new Date(`February 04, 2011 ${valor}`);
  let options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  let timeString = date.toLocaleString("en-US", options);
  return <>{timeString}</>;
};

export const recortarTitulo = (titulo) => {
  let tituloFiltrado = titulo.replace("<br>", "");
  let puntosSuspensivos = "...";
  if (tituloFiltrado.length > 75) {
    tituloFiltrado = tituloFiltrado.substring(0, 72) + puntosSuspensivos;
  } else {
    return tituloFiltrado;
  }
  return tituloFiltrado;
};

export const recortarTituloDiplomas = (titulo) => {
  let tituloFiltrado = titulo.replace("<br>", "");
  let puntosSuspensivos = "...";
  if (tituloFiltrado.length > 40) {
    tituloFiltrado = tituloFiltrado.substring(0, 35) + puntosSuspensivos;
  } else {
    return tituloFiltrado;
  }
  return tituloFiltrado;
};

export const confeti = () => {
  jsConfetti.addConfetti({
    emojis: ["🏦", "🎓", "🎊", "🎉", "🎁", "🎖"],
    confettiRadius: 10,
    emojiSize: 50,
    confettiNumber: 170,
  });
};

export const recortarDescripcion = (descipcion) => {
  let tituloFiltrado = descipcion.replace("<br>", "");
  let puntosSuspensivos = "...";
  if (tituloFiltrado.length > 188) {
    tituloFiltrado = tituloFiltrado.substring(0, 185) + puntosSuspensivos;
  } else {
    return tituloFiltrado;
  }
  return tituloFiltrado;
};

export const ChatBurbuja = () => {
  const script = document.createElement("script");
  script.id = " ze-snippet";
  script.src ="https://static.zdassets.com/ekr/snippet.js?key=7088efca-5208-4c12-9f33-fb617b40144e";
  document.body.appendChild(script);
};
