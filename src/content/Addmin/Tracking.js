import React, { useState, useEffect } from "react";
import Detailtracking from "./Detailtracking";
import axios from "axios";
import { global_url_token } from "../../page/global_url_token";

function Tracking({ data,checkData }) {
  
  const [show, setShow] = useState(null);
  const [modalOn, setModalOn] = useState(false);
  const [trackStatus, setTrackStatus] = useState("");
  const [tracking, setTracking] = useState("");
  const [orderID, setOrderID] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [order, setOrder] = useState(() => {
    const saveOrder = localStorage.getItem("Trackingtus");

    if (saveOrder) {
      return JSON.parse(saveOrder);
    } else {
      return [];
    }
  });



  useEffect(() => {
    localStorage.setItem("Trackingtus", JSON.stringify(order));
  }, [order]);

  const handleFormSubmit = (e) => {
    if (tracking !== "") {
      
      setOrder([
        ...order,
        {
          orderID: orderID,
          customerID: customerID,
          tracking: tracking.trim(),
        },
      ]);
      setShow(null);
    }
   
    setTracking("");
  };

 
  const setState = (a) => {
    let tus = [];
    for (let i = 0; i < order.length; i++) {
      if (order[i].orderID === a) {
        tus.push(1);
      }
    }
    return tus;
  };
  const setCode = (a) => {
    let text = [];
    for (let i = 0; i < order.length; i++) {
      if (order[i].orderID === a) {
        text.push(order[i].tracking);
      }
    }
    return text;
  };
  const clickDetail = () => {
    setModalOn(true);
  };
  const [detail, setDetail] = useState([]);

  const changeContent = (d) => {
    setDetail([d]);
  };

  function handleDelete(id) {
    const removeItem = order.filter((a) => {
      return a.orderID === id;
    });

    setOrder(removeItem);
  }

  // console.log(isPopup)

  const putTracking=()=> {
    axios   
      .put(
        global_url_token.url+"/updateTracking/",
        {
          token: localStorage.getItem("token"),
          orderID: orderID,
          customerID: customerID,
          tracking: tracking,
        }
      )

      .then(function (response) {
        console.log( response);
        // console.log(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
       <div class="grid grid-cols-2  ">
      <h1 class="mb-5  text-2xl font-semibold	 ">
         แจ้งเลขพัสดุ
      </h1>
      
      <h2 class="m-1 ml-5  text-xl justify-self-end">ทั้งหมด {data.length} รายการ  </h2>
      </div>
      {/* {setComment(3)} */}
      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  xl:w-[560px]  xl:h-[450px] md:w-[450px] sm:w-[400px]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  ชื่อลูกค้า
                </th>

                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  ข้อมูลการจัดส่ง
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  เลขพัสดุ
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  แก้ไข
                </th>
              </tr>
            </thead>

            <tbody class="divide-y border-b border-t border-[#E54E3D]">
              {data.map((data) => (
                <tr class=" border-b  border-[#E54E3D]">
                  <td class="w-30 p-3 text-sm font-light whitespace-nowrap text-center">
                    <p class="">{data.FullName}</p>
                  </td>

                  <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                    <button
                      class="font-bold text-[#E54E3D] hover:underline"
                      onClick={() => {
                        changeContent(data);
                        clickDetail();
                      }}
                    >
                      ดูรายละเอียด
                    </button>
                  </td>

                  {/* <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
               <button onClick={()=>handleDelete(0)}>X</button>
             </td> */}

                  {show == data.OID ? (
                    <>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                        <input
                          class="w-[110px] border"
                          placeholder="ไม่มีใส่ -"
                          value={tracking}
                          onChange={(event) => setTracking(event.target.value)}
                        />
                      </td>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                        ยังไม่ตรวจสอบ
                      </td>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                        <button
                          class=" bg-[#E54E3D] text-white font-light p-2 text-center"
                          onClick={() => {
                            handleFormSubmit();
                            setOrderID(data.OID);
                            setCustomerID(data.CID);
                            putTracking();
                          }}
                        >
                          บันทึก
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      {/* {setCode(data.orderID)} */}
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                        {setState(data.OID)[0] === 1
                          ? setCode(data.OID)
                          : "ยังไม่ตรวจสอบ"}
                      </td>
                      <td
                        class={`p-3 text-sm font-light whitespace-nowrap text-center ${
                          setState(data.OID)[0] === 1
                            ? "text-green-500"
                            : "text-gray-500"
                        }`}
                      >
                        {setState(data.OID)[0] === 1
                          ? "สำเร็จ"
                          : "ยังไม่ตรวจสอบ"}
                      </td>
                      <td
                        class={`${
                          setState(data.OID)[0] === 1
                            ? "hidden"
                            : "p-3 text-sm font-light whitespace-nowrap text-center"
                        }`}
                      >
                        <button
                          class=" bg-[#E54E3D] text-white font-light p-2 text-center"
                          onClick={() => {
                            setShow(data.OID);
                          }}
                        >
                          เพิ่ม
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          
          {checkData==false&& <div class="w-full flex justify-center  p-5">
            <h1 class="text-center">ไม่มีรายการต้องตรวจสอบ</h1>
            </div>}
          {modalOn && <Detailtracking data={detail} setModalOn={setModalOn} />}
        </div>
      </div>
    </>
  );
}

export default Tracking;
