import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route path="/" />
    <Route path="seminarios" />
    <Route path="diplomas/:etiqueta" />
    <Route path="cursos/:etiqueta" />
    <Route path="cursos" />
    <Route path="diplomas" />
    <Route path="diplomados/:etiqueta" />
    <Route path="InHouse" />
    <Route path="nosotros" />
    <Route path="seminarios/:id" />
    <Route path="seminariosInfo/:name" />
    <Route path="politicas-de-privacidad/">
      <Route path="proteccion-datos" />
      <Route path="terminos-servicios" />
      <Route path="politicas-cookies" />
      <Route path="politicas-calidad" />
      <Route path="libro-reclamaciones" />
    </Route>
    <Route path="buscar_certificado"></Route>
    <Route path="registro"></Route>
    <Route path="/*"></Route>
  </Route>
);
