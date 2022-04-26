import React, { useState } from "react";
import DetailProduct from "./DetailProduct";

export default function Checkorder_m() {
  const [modalOn, setModalOn] = useState(false);
  const clickDetail = () => {
    setModalOn(true);
  };
  console.log("modal =" + `${modalOn}`);
  return (
    <>
      <h1 class="mb-5  text-2xl font-semibold	 ">ตรวจสอบคำสั่งซื้อ</h1>
      {modalOn && <DetailProduct setModalOn={setModalOn} />}
      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  xl:w-[560px]  xl:h-[450px] md:w-[450px] sm:w-[400px]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
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
              
              <tr class=" border-b  border-[#E54E3D]">
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  26
                </td>
                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <p class="">18-04-2022</p>
                </td>

                <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                  <a
                    href="#"
                    class="font-bold text-blue-500 hover:underline"
                    onClick={clickDetail}
                  >
                    ดูรายละเอียด
                  </a>
                </td>

                <td class="p-3 text-sm font-light whitespace-nowrap text-center text-green-600">
                  
                  ยืนยันแล้ว
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
