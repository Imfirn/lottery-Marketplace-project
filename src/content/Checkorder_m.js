import React,{ useState } from "react";
import DetailProduct from "./DetailProduct";

export default function Checkorder_m() {
    const [modalOn, setModalOn] = useState(false);
    const clickDetail = () => {
        setModalOn(true)
      }
      console.log("modal ="+`${modalOn}`)
  return (
    <>
      <h1 className="mb-5  text-2xl font-semibold	 ">ตรวจสอบคำสั่งซื้อ</h1>
      {modalOn && < DetailProduct setModalOn={setModalOn} />}
      <div className=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  xl:w-[560px]  xl:h-[450px] md:w-[450px] sm:w-[400px]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                {/* <th class="w-30 text-sm tracking-wider font-medium text-center">
                  คำสั่งซื้อที่
                </th>
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
                  จำนวน
                </th>
                <th class="text-sm tracking-wider font-medium text-center">
                  ยืนยัน
                </th> */}
                 <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">
                  คำสั่งซื้อที่
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  วันที่
                </th>    
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  รายละเอียด
                </th>           
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>

              </tr>
            </thead>

            <tbody class="divide-y border-b border-t border-[#E54E3D]">
                {/* แบบแรก */}
              {/* <tr class=" border-b  border-[#E54E3D]">
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  26
                </td>
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <p class="">123456</p>
                </td>
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <span class="p-1.5 text-xs bg-[#D3FAFA] rounded-full">
                    ฉลากเดี่ยว
                  </span>
                </td>
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <div class="">
                    <p>งวดที่ : 12</p>
                  </div>
                </td>
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <p class="">1</p>
                </td>
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                </td>
              </tr> */}

<tr class=" border-b  border-[#E54E3D]">
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  26
                </td>
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <p class="">18-04-2022</p>
                </td>

                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  {/* <span class="p-1.5 text-xs bg-[#D3FAFA] rounded-full">
                    ฉลากเดี่ยว
                  </span> */}
                   <a href="#" class="font-bold text-blue-500 hover:underline"  onClick={clickDetail}>ดูรายละเอียด</a>
                </td>
                
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                </td>
              </tr>
              

            
            </tbody>
          </table>
        </div>
        
      </div>
     
    </>
  );
}
