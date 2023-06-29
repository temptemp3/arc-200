import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Mint from "./pages/Mint";
import Address from "./pages/Address";
import Token from "./pages/Token";
import Transaction from "./pages/Transaction";
import reportWebVitals from "./reportWebVitals";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/token/:id" element={<Token />} />
        <Route path="/address/:id" element={<Address />} />
        <Route path="/transaction/:id" element={<Transaction />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
