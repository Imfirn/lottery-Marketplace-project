import React from "react";

function DetailProduct({ setModalOn }) {
  const handleOKClick = () => {
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setModalOn(false);
  };

  return (
    <div className="    fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div class="relative rounded-lg shadow bg-white w-[500px] border">
          {/* Modal header */}
          <div class="flex justify-between items-start p-5 rounded-t border-b border-[#E54E3D]">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl ">
              รายละเอียด
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent  hover:text-[#E54E3D] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              onClick={handleCancelClick}
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
                    จำนวน
                  </th>
                  <th class="text-sm tracking-wider font-medium text-center">
                    ยืนยัน
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y border-b border-t border-[#E54E3D]">
                <tr class=" border-b  border-[#E54E3D]">
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    123456
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <span class="p-1.5 text-xs bg-[#D3FAFA] rounded-full">
                      ฉลากเดี่ยว
                    </span>
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <p class="">งวดที่ 12</p>
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
                </tr>
                <tr class=" border-b  border-[#E54E3D]">
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    123456
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <span class="p-1.5 text-xs bg-[#D3FAFA] rounded-full">
                      ฉลากเดี่ยว
                    </span>
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <p class="">งวดที่ 12</p>
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
                </tr>
                <tr class=" border-b  border-[#E54E3D]">
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    123456
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <span class="p-1.5 text-xs bg-[#D3FAFA] rounded-full">
                      ฉลากเดี่ยว
                    </span>
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <p class="">งวดที่ 12</p>
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
                </tr>
                <tr class=" border-b  border-[#E54E3D]">
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    123456
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <span class="p-1.5 text-xs bg-[#D3FAFA] rounded-full">
                      ฉลากเดี่ยว
                    </span>
                  </td>
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <p class="">งวดที่ 12</p>
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
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Modal footer --> */}
          <div class="flex items-center p-6 space-x-2 rounded-b border-t border-[#E54E3D] ">
            <button
              type="button"
              class="text-white bg-[#E54E3D] hover:bg-[#f93019]  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={handleOKClick}
            >
              ยืนยัน
            </button>
            <button
              type="button"
              class="text-[#E54E3D] bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 "
              onClick={handleCancelClick}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
