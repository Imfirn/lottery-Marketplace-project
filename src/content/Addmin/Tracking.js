import React from 'react'

function Tracking() {
  return (
    <>
    <h1 class="mb-5  text-2xl font-semibold	 ">แจ้งเลขพัสดุ</h1>
     {/* {setComment(3)} */}
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

          <tbody class="divide-y border-b border-t border-[#E54E3D]">
              {/* {seller.map((data)=>
             
                    <tr class=" border-b  border-[#E54E3D]">
                    <td class="w-30 p-3 text-sm font-light whitespace-nowrap text-center">
                      <p class="">{data.Firstname}</p>
                    </td>
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                      <p class="">{data.Lastname}</p>
                    </td>
    
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center">
                      <button                         
                        class="font-bold text-[#E54E3D] hover:underline"
                        onClick={()=>{changeContent(data);clickDetail();changeID(data.SellerID); }}
                      >                   
                        ดูรายละเอียด
                      </button>
                    </td>
                    
                    <td class={`p-3 text-sm font-light whitespace-nowrap text-center ${setState(data.SellerID)[0]=== 1?"text-green-500":setState(data.SellerID)[0]=== 0?"text-red-500":"text-gray-500"}`}>
                      {setState(data.SellerID)[0]=== 1?"อนุมัติ":setState(data.SellerID)[0]=== 0?"ไม่อนุมัติ":"ยังไม่ตรวจสอบ"}
                    </td>
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                      {setComment(data.SellerID)!=""? setComment(data.SellerID):"-"}
                    </td>
                    <td class="p-3 text-sm font-light whitespace-nowrap text-center ">
                      <button onClick={()=>handleDelete(data.SellerID)}>X</button>
                    </td>
                   
    
                    
                  </tr>
              
                 
              )} */}
              
      
          
          </tbody>

          
        </table>
        
        {/* {modalOn && <DetailSeller setModalOn={setModalOn} data={detail} id={id} setApprove={setApprove} approve={approve} setState={setState}/>} */}
       
      </div>
    </div>
  
  
  </>
  )
}

export default Tracking