/**
 * @author Nicolás Tutor
 * Se realizó una aplicación en React utilizando Hooks, props y JSS en la que se simula
 * una WebApp de reserva y compra de paquetes turísticos. Se eliminó el StrictMode para 
 * evitar la doble impresión en consola.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
