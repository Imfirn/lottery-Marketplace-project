import React, { useState } from "react";
import axios from "axios";

function DetailProduct({
  setModalOn,
  data, 
  orderID,
  num,
  setState,
  setDataput,
  dataPut
}) {
  const [confirm, setConfirm] = useState(false);
  // const [text, setText] = useState(null);
  // const [text, setText] = useState(null);
  

  const checkPipe = (a) => {
    const myArray = a.split("|");
    return myArray;
  };

  const handleOKClick = () => {
    setModalOn(false);
    setDataput([
      ...dataPut,
      {
        "orderID":orderID,
        lotteryList:data
      }
    ])
  };

  const handleCancelClick = () => {
    setModalOn(false);  
  };

  // const toggleButton = (index) => {
  //   // console.log(index);
  //   toggleState=index
    
  // };

  return (
    <div class=" fixed inset-0 z-50  bg-black  bg-opacity-50">  
    {/* <div class="bg-sky-500/80  inset-0 z-50">    */}
      <div class="flex h-screen justify-center items-center ">
        <div class="relative rounded-lg shadow bg-white w-[500px] border">
          {/* Modal header */}
          <div class="flex justify-between items-start p-5 rounded-t border-b border-[#E54E3D]">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
              รายละเอียด {orderID}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent  hover:text-[#E54E3D] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              onClick={() => setModalOn(false)}
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 
                  10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293
                   5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* table */}
          <div class="p-6 space-y-6  h-[218px] overflow-x-auto">
            <table class="w-full ">
              <thead class=" border-b border-t border-[#E54E3D]">
                <tr>
                  <th class="  text-sm tracking-wider font-medium text-center">
                    เลขสลาก
                  </th>
                  <th class="  text-sm tracking-wider font-medium text-center">
                    ประเภท
                  </th>
                  <th class="  text-sm tracking-wider font-medium text-center">
                    เพิ่มเติม
                  </th>
                  <th class=" text-sm tracking-wider font-medium text-center">
                    ยืนยันสถานะ
                  </th>
                </tr>
              </thead>
              {data.map((p) => (
                <tbody class="divide-y border-b border-t border-[#E54E3D]">
                  <tr class=" border-b  border-[#E54E3D]">
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                      {p.Number}
                    </td>
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                      <span
                        class={`p-1.5 text-xs ${
                          checkPipe(p.Lot).length > 1
                            ? "bg-[#D4FAAF]"
                            : "bg-[#D3FAFA]"
                        } rounded-full`}
                      >
                        {checkPipe(p.Lot).length > 1 ? "สลากชุด" : "สลากเดียว"}
                      </span>
                    </td>
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                      <p class="">งวดที่ {p.Draw}</p>
                      <p class="">ชุดที่ {p.Lot.replace("|", ",")}</p>
                    </td>
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center flex justify-center">
                      {/* <select
                                        // value={confirm}
                      onChange={(event) => p["approve"]=this.options[this.selectedIndex].value}
                    >
                    <option hidden>--สถานะ--</option>
                      <option value="Yes">มี</option>
                      <option value="No">ไม่มี</option>
                    </select> */}
                      {/* <button
                        class=" cursor-pointer focus:bg-[rgb(229,78,61)] focus:text-white text-[#E54E3D] border border-[#E54E3D] hover:bg-red-100 p-1"
                        onClick={() => {
                          p["approve"] = "Yes";
                          
                        }}
                      >
                        ยืนยัน
                      </button> */}
                      {/* <div
                        class={`cursor-pointer ${
                          toggleState === 2
                            ? "bg-[#E54E3D] text-white"
                            : "text-[#E54E3D] border border-[#E54E3D]"
                        } hover:bg-red-100 p-1`}
                        onClick={() => {
                          p["approve"] = "No";
                          toggleButton(2);
                        }}
                      >
                        ไม่ยืนยัน
                      </div> */}
                      {setState(orderID)==false?<input type="checkbox"                      
                      onChange={e=>{p["approve"] = "Yes";}}
                      ></input>:<>ยืนยันแล้ว</>}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          {/* <!-- Modal footer --> */}
          <div
            class="p-6 space-x-2 rounded-b border-t border-[#E54E3D]">
              <div class={`${setState(orderID) === true?"hidden":""}`}>
            <button
              type="submit"
              class="text-white bg-[#E54E3D] hover:bg-[#f93019]  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={() => handleOKClick()}
            >
              ยืนยัน
            </button>

            <button
              type="submit"
              class="text-[#E54E3D] bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  "
              onClick={() => {
                handleCancelClick();
              }}
            >
              ยกเลิก
            </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div>  */}
    </div>
  );
}

export default DetailProduct;
