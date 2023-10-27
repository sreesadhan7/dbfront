import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import Home from "./views/Home.js";
import Login from "./views/Login.js";
import Graph from "./views/Graph.js";
import Register from "./views/Register.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/Graph" exact element={<Graph />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);