import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
  //<React.StrictMode>
    <CookiesProvider>
    <App />
    </CookiesProvider>,
  //</React.StrictMode>,
  document.getElementById("root")
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);


