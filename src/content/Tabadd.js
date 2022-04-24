import React, { useState} from "react";
import Pack from "./Pack";
import Single from "./Single";


function Tabadd() {
  const [tabState, setTabState] = useState(1);
  
  const clickTab = (i) => {
    setTabState(i);
    //  console.log("click");
  };
 


  return (
      
    <div className="m-4 xl:w-[530px] lg:w-[430px] sm:w-[400px]  min-w-[300px]">        
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`text-center ${
            tabState === 1 ? "border-b-4 border-[#E54E3D]" : " border-0"
          }`}
        >
          <a className=" cursor-pointer" role="tab" onClick={() => clickTab(1)}>
            สลากเดี่ยว
          </a>
        </div>
        <div
          className={`text-center ${
            tabState === 2 ? "border-b-4 border-[#E54E3D]" : " border-0"
          }`}
        >
          <a className="cursor-pointer" role="tab" onClick={() => clickTab(2)}>
            สลากชุด
          </a>
        </div>
      </div>
          <div className={
            tabState === 1 ? "" : "hidden"
          }>
              <Single />
          </div>
          <div className={
            tabState === 2 ? "" : "hidden"
          }>
              <Pack/>
              
          </div>
        

    </div>
  );
}

export default Tabadd;
