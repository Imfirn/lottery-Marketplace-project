import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./content/Dropdown";
import Navbar from "./content/Navbar";
import { Routes, Route } from "react-router-dom";
import Account from "./page/account";
import Home from "./page/home";
import Register from "./content/Register";
import Account_merchant from "./page/account_merchant";
import Account_admin from "./page/account_admin";
import Store from "./page/store";
import SingleLotteryInfo from "./page/singleLotteryInfo";
import PackLotteryInfo from "./page/packLotteryInfo";
import axios from "axios";
import Cart from "./page/cart";
import Payment from "./page/payment";
// import Store from "./page/store";
const url_ = 'http://a1f7-2403-6200-88a4-54b-eda0-294a-e446-b93.ngrok.io'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxMDcwMTYxLCJleHAiOjE2NTEwODA5NjF9.KmKrjDS012ivBmVFJ2_Bohs2SkcedVaXKq-V_kMJm-A'

function App() {
  const li_default_data = []
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [data_toShow, setData] = useState(li_default_data)
  const [checkFirstGet, setCheckGet] = useState(true)
  useEffect((event)=>{
    if(checkFirstGet === true){
      axios.post(url_+'/getSearch', 
      {SearchNumber: "xxxxxx"})
      .then(function (response) {
        setData(response.data.search_lottery)
      })
      .catch(function (error) {
        console.log(error);
      });
      setCheckGet(false)
    }
  })

  const sendSearchNumberToBase = (searchNum)=>{
    axios.post(url_+'/getSearch', 
      {SearchNumber: searchNum.number})
      .then(function (response) {
        setData(response.data.search_lottery)
        console.log("test4")
      })
      // const data_from_get = [...tempSingle,...tempPack]
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log("Home => App:",searchNum)
  }





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
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home li_dataToshow={data_toShow} searchNumApp={sendSearchNumberToBase}/>}/>
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/account" element={<Account_merchant/>} />


        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Home
              li_dataToshow={data_toShow}
              searchNumApp={sendSearchNumberToBase}
            />
          }
        />
        <Route path="/singlelotteryinfo" element={<SingleLotteryInfo />} />
        <Route path="/packlotteryinfo" element={<PackLotteryInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentmethod" element={<Payment />} />
        <Route path="/store" element={<Store />} />
            
        
      </Routes>
    </>
  );
}

export default App;
