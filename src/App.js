import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./views/Home.js";
import LoginPage from "./views/LoginPage.js";
import GlobalTemp from "./views/GlobalTemp.js";
import CO2 from "./views/CO2.js";
import Energy from "./views/Energy.js";
import GDP from "./views/GDP.js";
import Internet from "./views/Internet.js";
import Register from "./views/Register.js";
import DatabaseCount from "./views/DatabaseCount.js";
import UnAuth from "./views/UnAuth.js"
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();


  if(!token) {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/Login" exact element={<LoginPage setToken={setToken}/>} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/" exact element={<LoginPage setToken={setToken}/>} />
        <Route path="/404" exact element={<UnAuth />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Login" exact element={<LoginPage setToken={setToken}/>} />
      <Route path="/GlobalTemp" exact element={<GlobalTemp />} />
      <Route path="/CO2" exact element={<CO2 />} />
      <Route path="/Energy" exact element={<Energy />} />
      <Route path="/GDP" exact element={<GDP />} />
      <Route path="/Internet" exact element={<Internet />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/DatabaseCount" exact element={<DatabaseCount />} />
      <Route path="/404" exact element={<UnAuth />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
