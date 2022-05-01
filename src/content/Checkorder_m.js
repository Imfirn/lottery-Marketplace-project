import React, { useState, useEffect } from "react";
import DetailProduct from "./DetailProduct";
import axios from "axios";

export default function Checkorder_m({ data }) {
  const [modalOn, setModalOn] = useState(false);
  const [checkEdit, setcheckEdit] = useState(false);
  const [approve, setApprove] = useState(() => {
    const saveStatus = localStorage.getItem("CheckOrderSeller");

    if (saveStatus) {
      return JSON.parse(saveStatus);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("CheckOrderSeller", JSON.stringify(approve));
  }, [approve]);

  // function putUpdateorder() {
  //   axios
  //     .post("http://78f7-2403-6200-88a4-4c62-e120-da6f-d695-867a.ngrok.io//updateSellerCheckOrder", {
  //       token:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY1MTMzNjY3OSwiZXhwIjoxNjUxMzcyNjc5fQ.J7TZ1x5ODync9ZXYR_feHn_wCu2VVXqhox3cnc33dT4",
  //       lotteryList: [
  //         {
  //           Number:  number.trim(),
  //           Lot: pack.trim(),
  //           Draw:  draw.trim(),
  //           DrawDate: drawDate,
  //         },
  //       ],
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       // console.log(data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  const [detail, setDetail] = useState([]);
  const [number, setNum] = useState(null);
  const [lot, setLot] = useState("");
  const [orderid, setOrderid] = useState("");
  const [dataMap, setDataamp] = useState([]);

  const changeLot = (d) => {
    setLot(d);
  };

  const changeNum = (d) => {
    setNum(d);
  };

  const changeContent = (d) => {
    setDetail(d);
  };

  const clickDetail = () => {
    setModalOn(true);
  };

  const changeOrder = (d) => {
    setOrderid(d);
  };

  const Testdata = [
    {
      orderID: "29",
      customerID: "1",
      nameCustomer: "เป็ดย่างเจ้าเก่า เยาวราช",
      Number: "444445",
      Lot: "01",
      Draw: "20",
      OrderDate: "20220417232222+0700",
    },
    {
      orderID: "29",
      customerID: "1",
      nameCustomer: "เป็ดย่างเจ้าเก่า เยาวราช",
      Number: "123459",
      Lot: "95",
      Draw: "20",
      OrderDate: "20220417232222+0700",
    },
    {
      orderID: "86",
      customerID: "1",
      nameCustomer: "เป็ดย่างเจ้าเก่า เยาวราช",
      Number: "950159",
      Lot: "45",
      Draw: "20",
      OrderDate: "20220426235103+0700",
    },
    {
      orderID: "86",
      customerID: "1",
      nameCustomer: "เป็ดย่างเจ้าเก่า เยาวราช",
      Number: "121231",
      Lot: "04|07",
      Draw: "20",
      OrderDate: "20220426235103+0700",
    },
  ];

  const setState = (a, d) => {
    let tus = [];
    if (approve !== null) {
      for (let i = 0; i < approve.length; i++) {
        if (approve[i].orderID === a && approve[i].Number === d) {
          tus.push(1);
        }
      }
      return tus;
    } else {
      return tus;
    }
  };

  function handleDelete(id) {
    const removeItem = approve.filter((a) => {
      return a.orderID == id;
    });

    setApprove(removeItem);
  }

  const mapOrder = (list_) => {
    let orderMap = new Map();
    for (let element of list_) {
      let lottery = [];
      if (orderMap.has(element.orderID)) {
        lottery = orderMap.get(element.orderID);
        lottery.push({
          Number: element.Number,
          Lot: element.Lot,
          Draw: element.Draw,
          approve: "No",
        });
        orderMap.set(element.orderID, lottery);
        // console.log(orderMap);
        // console.log("map",orderMap);
      } else {
        lottery.push({
          Number: element.Number,
          Lot: element.Lot,
          Draw: element.Draw,
          approve: "No",
        });
        orderMap.set(element.orderID, lottery);
        // console.log(orderMap);
        // console.log("map",orderMap);
      }
    }
    // setDataamp(orderMap)
    return orderMap;
  };

  // console.log("outside",mapOrder(approve));
  // console.log("outside",mapOrder(Testdata));
  // console.log("outside2");
  // console.log("outside+>",data);
  const test = [];
  for (const [key, value] of mapOrder(Testdata).entries()) {
    test.push({ key, value });
  }

  console.log("outside2", test[0].value);
  console.log("Detail", detail);
  // console.log("TEST")
  return (
    <>
      <div class="grid grid-cols-2">
        <h1 class="mb-5  text-2xl font-semibold	 ">ตรวจสอบคำสั่งซื้อ</h1>
        {/* {checkEdit ?
      <button onClick={()=>{console.log("กดเเล้ว");mapOrder(approve);setcheckEdit(false);}} 
      class="text-[#E54E3D] bg-white hover:bg-gray-100  rounded-lg border 
      border-gray-200 text-sm font-medium px-5 py-2.5 ">บันทึก</button>:  
      <button onClick={()=>{console.log("กดเเล้ว");setcheckEdit(true);}} 
      class="text-[#E54E3D] bg-white hover:bg-gray-100  rounded-lg border 
      border-gray-200 text-sm font-medium px-5 py-2.5 ">แก้ไข</button>} */}
      </div>
      {modalOn && (
        <DetailProduct
          setModalOn={setModalOn}
          setApprove={setApprove}
          approve={approve}
          data={detail}
          setState={setState}
          lot={lot}
          Id={orderid}
          num={number}
        />
      )}
      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  xl:w-[560px]  xl:h-[450px] md:w-[450px] sm:w-[400px]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">
                  คำสั่งซื้อที่
                </th>
                {/* <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  วันที่
                </th> */}
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  รายละเอียด
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>
              </tr>
            </thead>
            <tbody>
             
                {/* <>{test[0].value[0].Number}</> */}
                {[...Array(test.length)].map((_, i) => (
                  <tr class="border-b  border-[#E54E3D] text-center">
                        <td>{test[i].key}</td>
                        <td>
                        <a
                    href="#"
                    class="font-bold text-[#E54E3D] hover:underline"
                    onClick={()=>{clickDetail();changeContent(test[i].value);}}
                  >
                    ดูรายละเอียด
                  </a>
                          </td>
                  </tr>
                ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
