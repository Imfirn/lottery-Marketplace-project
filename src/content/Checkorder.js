import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Checkorder({ checkTran, Order_ID }) {
  const navigate = useNavigate();
  const toPaymentMethod = useCallback(
    () => navigate("/paymentmethod", { replace: true }),
    [navigate]
  );

  const goRepending = (item) => {
    let sum = 0;
    for (let i = 0; i < item.LotteryList.length; i++) {
      if (item.LotteryList[i].PackFlag === "N") {
        sum += 80;
      } else if (item.LotteryList[i].PackFlag === "Y") {
        sum += 80 * Number(item.LotteryList[i].PackAmount);
      }
    }
    Order_ID([item.OID, sum + 40]);
    toPaymentMethod();
  };

  return (
    <>
      {/* bg-[#D3FAFA],bg-[#D4FAAF]*/}

      <h1 class="mb-5  text-2xl font-semibold	">ประวัติการสั่งซื้อ</h1>

      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-y-auto w-full h-[50vh]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                <th class="w-60  text-sm tracking-wider font-medium text-center">
                  คำสั่งซื้อที่
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  รายละเอียดสินค้า
                </th>

                {/* <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">
                  ประเภท
                </th>
                <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">
                  เพิ่มเติม
                </th> */}
                <th class="w-30  p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>
              </tr>
            </thead>
            {checkTran.map((p) => (
              <tbody class="divide-y border-b border-t border-[#E54E3D]">
                <tr class=" border-b  border-[#E54E3D]">
                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    {p.OID}
                  </td>

                  {p.LotteryList.map((k) => (
                    <tr class="text-center ">
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                        <p class="w-[55px] "> {k.Number} </p>
                      </td>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                        <span
                          class={`w-[55px] p-1.5 text-xs ${
                            k.PackFlag === "N" ? "bg-[#D3FAFA]" : "bg-[#D4FAAF]"
                          }  rounded-full`}
                        >
                          {k.PackFlag == "N" ? "สลากเดี่ยว" : "สลากชุด"}
                        </span>
                      </td>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                        {k.PackFlag == "N" ? (
                          <>
                            <p class="w-[75px]  ">งวดที่ : {k.Draw}</p>
                            <p class="w-[75px] "> ชุดที่ : {k.Lot}</p>{" "}
                          </>
                        ) : (
                          <p class="w-[75px]  ">จำนวน : {k.PackAmount}</p>
                        )}
                      </td>
                    </tr>
                  ))}

                  {p.Status == "RePending Payment" ? (
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                      <button
                        class=" bg-[#E54E3D] text-white font-light p-2 text-center"
                        onClick={() => goRepending(p)}
                      >
                        ชำระอีกครั้ง
                      </button>
                    </td>
                  ) : (
                    <td
                      class={`p-3 text-sm font-light whitespace-nowrap text-center ${
                        p.Status == "Completed"
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                     {p.Status=="Completed" ? "เสร็จสิ้น" : p.Status=="Seller Check Order" ? "รอแม่ค้าตรวจสอบ" : p.Status=="Order Packing" ? "รอจัดส่ง" : p.Status=="RePending Payment" ? "ชำระอีกครั้ง" : p.Status=="Audit Payment" ? "ตรวจสอบการชำระ":"ยกเลิกแล้ว"}
                    </td>
                  )}
                </tr>
              </tbody>
            ))}

            {/* <td class='p-3 text-sm font-light flex whitespace-nowrap'>
      <p> ยกเลิกแล้ว </p>
      <button class='ml-2 bg-[#E54E3D] text-white font-light p-1 '> ชำระอีกครั้ง </button>
        </td> */}
          </table>
        </div>
      </div>
    </>
  );
}

export default Checkorder;
