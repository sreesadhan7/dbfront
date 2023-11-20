import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import Home from "./views/Home.js";
import LoginPage from "./views/LoginPage.js";
import GlobalTemp from "./views/GlobalTemp.js";
import CO2 from "./views/CO2.js";
import Energy from "./views/Energy.js";
import GDP from "./views/GDP.js";
import Internet from "./views/Internet.js";
import Register from "./views/Register.js";
import DatabaseCount from "./views/DatabaseCount.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Login" exact element={<LoginPage />} />
      <Route path="/GlobalTemp" exact element={<GlobalTemp />} />
      <Route path="/CO2" exact element={<CO2 />} />
      <Route path="/Energy" exact element={<Energy />} />
      <Route path="/GDP" exact element={<GDP />} />
      <Route path="/Internet" exact element={<Internet />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/DatabaseCount" exact element={<DatabaseCount />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);