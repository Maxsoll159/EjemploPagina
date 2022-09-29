import React from "react";
import ReactDOM from "react-dom/client";
import { Principal } from "./Principal";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./assets/style.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import ScrollToTop from "./helpers/ScrollToTop";
import '../node_modules/aos/dist/aos.css';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DarkModeProvider>
      <ScrollToTop />
      <Principal />
    </DarkModeProvider>
  </BrowserRouter>
);
