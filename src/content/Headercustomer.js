import React from "react";
import pic from "../Assets/5fb952383d4b9b0cc0fd7d2e_800x0xcover_3aaaqsST.jpg"

function Headercustomer() {
  return (
    <>
      <div class="flex font-prompt ">
          <div >
          {/* <p>Headercustomer</p> */}
          <img src={pic} class="w-[110px] h-[110px] rounded-full m-5 " alt=""/>

          </div>
          <div class="mt-10 ml-2">
              <p class=" font-semibold">richman101</p>
              <p class=" font-light">กรุงเทพมหานคร</p>
          </div>

    </div>
    <span class="bg-[#E54E3D] h-[0.5px]  "/>
       
    </>
  );
}

export default Headercustomer;
