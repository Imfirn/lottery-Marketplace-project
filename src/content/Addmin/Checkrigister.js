import React, { useEffect, useState,useRef } from "react";
import DetailSeller from "./DetailSeller";


function Checkrigister() {
  const [modalOn, setModalOn] = useState(false);
  const[approve,setApprove] = useState(
    {
       "token": " ",
       "approve":"",
       "coment":"",
       "sellerID":""
    },
  )
 
  const [detail,setDetail] = useState([]);
  const changeContent=(d)=>{
        setDetail([d])
  }
  const clickDetail = () => {
    setModalOn(true);
   
  };
  
 

  const [seller, setSeller] = useState([
    {
        SellerID: 3,
        Firstname: "สวัสดี",
        Lastname: "อีก",
        Tel: "0625555522",
        Birthday: "25600203",
        Email: "B4@gmail.com",
        Address: {
          HomeNo: "20/1",
          Soi: "พัฒนาการ58",
          Road: "พัฒนาการ",
          Subdistrict: "สวนหลวง",
          District: "สวนหลวง",
          Province: "กรุงเทพมหานคร",
          ZipCode: "10250",
        },
        Storename: "สวัสดี",
        URLImage: "",
      },
      {
        SellerID: 4,
        Firstname: "ใจดี",
        Lastname: "สุดสุด",
        Tel: "0625555522",
        Birthday: "25600203",
        Email: "BB@gmail.com",
        Address: {
          HomeNo: "20/1",
          Soi: "พัฒนาการ58",
          Road: "พัฒนาการ",
          Subdistrict: "สวนหลวง",
          District: "สวนหลวง",
          Province: "กรุงเทพมหานคร",
          ZipCode: "10250",
        },
        Storename: "ใจดี",
        URLImage: "",
      },
      {
        SellerID: 5,
        Firstname: "ซู่ซู่",
        Lastname: "ซ่าซ่า",
        Tel: "0625555522",
        Birthday: "25600203",
        Email: "susu@gmail.com",
        Address: {
          HomeNo: "20/1",
          Soi: "พัฒนาการ58",
          Road: "พัฒนาการ",
          Subdistrict: "สวนหลวง",
          District: "สวนหลวง",
          Province: "กรุงเทพมหานคร",
          ZipCode: "10250",
        },
        Storename: "ซู่ซู่",
        URLImage: "",
      },
      {
        SellerID: 6,
        Firstname: "ดิว",
        Lastname: "ร่าน",
        Tel: "0625555522",
        Birthday: "25600203",
        Email: "dewza@gmail.com",
        Address: {
          HomeNo: "20/1",
          Soi: "พัฒนาการ58",
          Road: "พัฒนาการ",
          Subdistrict: "สวนหลวง",
          District: "สวนหลวง",
          Province: "กรุงเทพมหานคร",
          ZipCode: "10250",
        },
        Storename: "ดิว",
        URLImage: "",
      },
      {
        SellerID: 8,
        Firstname: "แหลมเจริญ",
        Lastname: "ร่าน",
        Tel: "0625555522",
        Birthday: "25600203",
        Email: "dewza1@gmail.com",
        Address: {
          HomeNo: "20/1",
          Soi: "พัฒนาการ58",
          Road: "พัฒนาการ",
          Subdistrict: "สวนหลวง",
          District: "สวนหลวง",
          Province: "กรุงเทพมหานคร",
          ZipCode: "10250",
        },
        Storename: "ดิว",
        URLImage: "",
      },
  ]);
  
  console.log("modal =" + `${modalOn}`);
  return (
    <>
      <h1 class="mb-5  text-2xl font-semibold	 ">คำของลงทะเบียนผู้ขาย</h1>
     
      <div class=" flex justify-center items-center bg-white  font-prompt">
        <div class="overflow-x-auto  xl:w-[560px]  xl:h-[450px] md:w-[450px] sm:w-[400px]">
          <table class="w-full ">
            <thead class=" border-b border-t border-[#E54E3D]">
              <tr>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  ชื่อ
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  นามสกุล
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  ข้อมูลการสมัคร
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  สถานะ
                </th>
                <th class=" p-2 text-sm tracking-wider font-medium text-center">
                  หมายเหตุ
                </th>
              </tr>
            </thead>

            
                {seller.map((data)=>
                <tbody class="divide-y border-b border-t border-[#E54E3D]">
                      <tr class=" border-b  border-[#E54E3D]">
                      <td class="w-30 p-3 text-sm font-light whitespace-nowrap text-center">
                        <p class="">{data.Firstname}</p>
                      </td>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                        <p class="">{data.Lastname}</p>
                      </td>
      
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                        <button                         
                          class="font-bold text-blue-500 hover:underline"
                          onClick={()=>{changeContent(data);clickDetail() }}
                        >                   
                          ดูรายละเอียด
                        </button>
                      </td>
                      
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center text-green-600">
                        ยืนยันแล้ว
                      </td>
                      <td class="p-3 text-sm font-light whitespace-nowrap text-center text-green-600">
                        -
                      </td>
      
                      
                    </tr>
                
                    </tbody>
                )}
            
           

            
          </table>
          {modalOn && <DetailSeller setModalOn={setModalOn} data={detail} />}
        
        </div>
      </div>
    </>
  );
}

export default Checkrigister;
