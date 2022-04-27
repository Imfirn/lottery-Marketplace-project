import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./content/Dropdown";
import Navbar from "./content/Navbar";
import {Routes,Route}from"react-router-dom";
import Account from "./page/account";
import Home from "./page/home";
import Register from "./content/Register";
import Account_merchant from "./page/account_merchant";
import Account_admin from "./page/account_admin";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 766 && isOpen) {
        setIsOpen(false);
        console.log("i resizeddd");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/account"  element={<Account/>}/>
      {/* <Route path="/account"  element={<Account_merchant/>}/> */}
      {/* <Route path="/account"  element={<Account_admin/>}/> */}
      <Route path="/register"  element={<Register/>}/>
     
      
    </Routes>
    </>
  );
}

export default App;
