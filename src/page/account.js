import React from "react";
import { useState, useEffect } from "react";
import Checkorder from "../content/Checkorder";
import Editprofile from "../content/Editpage/Editprofile";
import Header from "../content/component/Header";
import Profile from "../content/Profile";
import Pic from "../Assets/5fb952383d4b9b0cc0fd7d2e_800x0xcover_3aaaqsST.jpg";
import axios from "axios";

function Account() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxNTAwMzYxLCJleHAiOjE2NTE1MzYzNjF9.PnEI0MXfHSHyUZaDLlZmIM2tU76AqkcTV0a-jG47xWk";
  const [toggleState, setToggleState] = useState(1);  
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState();
  const [birthday, setBirthday] = useState("");
  const [lastName, setlastName] = useState();
  const [number, setnumber] = useState();
  const [mail, setmail] = useState();
  const [homeno, setHomeno] = useState();
  const [soi, setSoi] = useState();
  const [subdistrict, setsubDistrict] = useState();
  const [district, setDistrict] = useState();
  const [road, setRoad] = useState();
  const [zipcode, setZipcode] = useState();
  const [province, setProvince] = useState();
  const [dataTran, setdataTran] = useState([]);
  
  const changeTofalse = () => {
    setEditMode(false);

  };
  console.log(editMode);
  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };
 

  function getProfile() {

    axios
      .get(
        "http://b169-2403-6200-88a4-4c62-9496-55ba-1f0c-4d43.ngrok.io/getCustomerAccount/" + token
      )

      .then(function (response) {
        
        console.log(response.data);
        if(response.data.status =="200OK"){
        setFirstName(response.data.customerAccount.Firstname)
        setlastName(response.data.customerAccount.Lastname)
        setnumber(response.data.customerAccount.Tel)
        setBirthday(response.data.customerAccount.Birthday)
        setmail(response.data.customerAccount.Email)
        setHomeno(response.data.customerAccount.Address.HomeNo)
        setSoi(response.data.customerAccount.Address.Soi)
        setRoad(response.data.customerAccount.Address.Road)
        setsubDistrict(response.data.customerAccount.Address.Subdistrict)
        setDistrict(response.data.customerAccount.Address.District)
        setProvince(response.data.customerAccount.Address.Province)
        setZipcode(response.data.customerAccount.Address.ZipCode)
        }
       
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getOrder() {

    axios
      .get(
        "http://b169-2403-6200-88a4-4c62-9496-55ba-1f0c-4d43.ngrok.io/getTransaction/" + token
      )

      .then(function (response) {
        
        console.log(response.data);
        if(response.data.status =="200OK"){
        setdataTran(response.data.orderTransaction);
       }
         
       
      })
      .catch(function (error) {
        console.log(error);
      });
  }


 

  useEffect(() => {
    getProfile();
    getOrder();
  }, []);

  return (
    <>
    <div class="h-16">
      <div class=" flex justify-center  bg-[#FFE5A3] font-prompt">
        <div
          class="flex flex-col p-8 m-8 bg-white  min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%] h-[800px]  shadow-xl "
        >
         
          <h1 class="text-xl text-[#E54E3D] font-black ml-6">บัญชีของคุณ</h1>
          <Header
            name={"richman101"}
            undername={"กรุงเทพมหานคร"}
            picture={Pic}
          />
          <div class="flex">
            <div class=" min-w-[160px] h-[590px] border-r">
              <div
                class={`mt-4  cursor-pointer ${
                  toggleState === 1
                    ? "bg-red-100 border-l-4 border-[#E54E3D]"
                    : ""
                } hover:bg-red-100 h-[40px]`}
                onClick={() => toggleTab(1)}
              >
                <p class="pt-2 pl-4">ข้อมูลส่วนตัว</p>
              </div>

              <div
                class={`cursor-pointer ${
                  toggleState === 2
                    ? "bg-red-100 border-l-4 border-[#E54E3D]"
                    : ""
                } hover:bg-red-100 h-[40px]`}
                onClick={() => {
                  toggleTab(2);
                  changeTofalse();
                }}
              >
                <p class="pt-2 pl-4">ประวัติการสั่งซื้อ</p>
              </div>
            </div>
            <div class="p-7 ">
              <div class={toggleState === 1 ? "flex" : "hidden"}>
                <div>
                  {editMode ? (
                    <Editprofile
                      // data={dataProfile}
                      firstName={firstName}
                      lastName={lastName}
                      number={number}
                      birthday={birthday}
                      mail={mail}
                      homeno={homeno}
                      soi={soi}
                      subdistrict={subdistrict}
                      district={district}
                      province={province}
                      zipcode={zipcode}
                      road={road}
                      changeTofalse={changeTofalse}
                    />
                  ) : (
                    <Profile 
                      firstName={firstName}
                      lastName={lastName}
                      number={number}
                      birthday={birthday}
                      mail={mail}
                      homeno={homeno}
                      soi={soi}
                      subdistrict={subdistrict}
                      district={district}
                      province={province}
                      zipcode={zipcode}
                      road={road}
                      changeTofalse={changeTofalse}
                    
                    />
                  )} 
                </div>

                <div
                  class={editMode === false ? "" : "hidden"}
                  style={{ cursor: "pointer" }}
                  onClick={() => setEditMode(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
              </div>
              <div class={toggleState === 2 ? "" : "hidden"}>
                <Checkorder checkTran={dataTran}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Account;
