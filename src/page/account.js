import React from "react";
import { useState } from "react";
import Checkorder from "../content/Checkorder";
import Editprofile from "../content/Editprofile";
import Profile from "../content/Profile";
function Account() {
  const [toggleState, setToggleState] = useState(1);
  const [editMode,setEditMode]=useState(false);
  const changeTofalse =() =>{
        setEditMode(false);
  }

  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
  };
  return (
    <div className="h-screen flex justify-center  bg-[#FFE5A3] font-prompt">
      <div
        className="flex flex-col p-8 m-8 bg-white  md:min-w-[800px] 
     sm:min-w-[600px] min-w-[400px]  rounded-xl shadow-xl "
      >
        <h1 className="text-9xs uppercase font-black">Account</h1>
        <div className="flex">
          <div className={" w-52 bg-yellow-300"}>
            content bar
            <ul>
              <div
                className="mt-2 cursor-pointer hover:bg-yellow-500 "
                onClick={() => toggleTab(1)}
              >
                <a>ข้อมูลส่วนตัว</a>
              </div>
              <li
                className="mt-2 cursor-pointer hover:bg-yellow-500"
                onClick={() => toggleTab(2)}
              >
                ตรวจสอบการสั่งซื้อ
              </li>
              <li
                className="mt-2 cursor-pointer hover:bg-yellow-500"
                onClick={() => toggleTab(3)}
              >
                เพิ่มสินค้า
              </li>
              <li
                className="mt-2 cursor-pointer hover:bg-yellow-500"
                onClick={() => toggleTab(4)}
              >
                สินค้าภายในร้าน
              </li>
            </ul>
          </div>
          <div className="p-7">
            <div className={toggleState === 1 ? "" : "hidden"}>
              <h1>table1</h1>
              <div className={editMode === false ? " " : "hidden"} style={{cursor:"pointer"}} onClick={()=>setEditMode(true)}>
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
              <div>
               {editMode?<Editprofile changeTofalse={changeTofalse}/>:<Profile />}
              </div>
             
            </div>
            <div className={toggleState === 2 ? "text-amber-500" : "hidden"}>
              <h1>table2</h1>
             
              <Checkorder />
            </div>
            <div className={toggleState === 3 ? "text-amber-500" : "hidden"}>
              <h1>table3</h1>
            </div>
            <div className={toggleState === 4 ? "text-amber-500" : "hidden"}>
              <h1>table4</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
