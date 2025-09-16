import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // stricter code warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// above is our boilerplate