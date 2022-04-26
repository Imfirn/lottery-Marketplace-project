import React from "react";
import { useState } from "react";
import Header from "../content/component/Header";
import Pic from "../Assets/5fb952383d4b9b0cc0fd7d2e_800x0xcover_3aaaqsST.jpg";
import Checkrigis from "../content/Addmin/Checkregis";
import CheckPayment from "../content/Addmin/CheckPayment";
import Tracking from "../content/Addmin/Tracking";

function Account_admin() {
  const [toggleState, setToggleState] = useState(1);
  
  const [editMode,setEditMode]=useState(false);
  const changeTofalse =() =>{
        setEditMode(false);
  }
 

 

  console.log(editMode);
  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };

  return (
    <>
    <div class="h-screen flex justify-center  bg-[#FFE5A3] overflow-hidden	 font-prompt ">
      <div
        class="flex flex-col p-8 m-8 bg-white  xl:w-[820px] 
     md:w-[700px] min-w-[650px] h-[800px] shadow-xl "
      >
        <h1 class="text-xl text-[#E54E3D] font-black ml-6">บัญชีของคุณ</h1>
        <Header name={"แอดมิน123"} undername={"แอดมิน"} picture={Pic}/>
        <div class="flex">
          <div class=" min-w-[160px] h-[590px] border-r">
                  
             
              
              <div
                class={`mt-4 cursor-pointer ${toggleState === 1 ? "bg-red-100 border-l-4 border-[#E54E3D]" : ""} hover:bg-red-100 h-[40px]`}
                onClick={() => {toggleTab(1);}}
              >               
                <p class="pt-2 pl-4">การลงทะเบียน</p>
              </div>

              <div
                class={`cursor-pointer ${toggleState === 2 ? "bg-red-100 border-l-4 border-[#E54E3D]" : ""} hover:bg-red-100 h-[40px]`}
                onClick={() => {toggleTab(2);}}
              >               
                <p class="pt-2 pl-4">ตรวจสอบการชำระ</p>
              </div>

              <div
                class={`cursor-pointer ${toggleState === 3 ? "bg-red-100 border-l-4 border-[#E54E3D]" : ""} hover:bg-red-100 h-[40px]`}
                onClick={() => {toggleTab(3);}}
              >               
                <p class="pt-2 pl-4">แจ้งเลขพัสดุ</p>
              </div>
           
          </div>
          <div class="p-7 ">
           
            <div class={toggleState === 1 ? "" : "hidden"}>
              
              <Checkrigis/>
              
            </div>

            <div class={toggleState === 2 ? "flex-initial	" : "hidden"}>
            
              <CheckPayment/>     
             
            </div>

            <div class={toggleState === 3 ? "" : "hidden"}>
             
             <Tracking/>
                         
              
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Account_admin;