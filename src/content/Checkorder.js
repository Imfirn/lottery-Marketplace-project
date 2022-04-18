import React from 'react'

function Checkorder() {
  return (
    <>   
      <h1 className='mb-5  text-2xl font-semibold	 '>ประวัติการสั่งซื้อ</h1> 
     
    <div className=" flex justify-center items-center bg-white  font-prompt">
  
  <div class='overflow-x-auto  xl:w-[560px] md:w-[450px] sm:w-[400px]'>
    <table class="w-full ">

  <thead class=" border-b border-t border-[#E54E3D]">
    <tr>
      <th class="w-32 p-2 text-sm tracking-wider font-medium text-center">ชื่อร้านค้า</th>
      <th class=" p-2 text-sm tracking-wider font-medium text-center">เลขสลาก</th>
      <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">ประเภท</th>
      <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">เพิ่มเติม</th>
      <th class="w-30  p-2 text-sm tracking-wider font-medium text-center">สถานะ</th>
    
    </tr>
  </thead>

  <tbody class="divide-y border-b border-t border-[#E54E3D]">
    <tr class=' border-b  border-[#E54E3D]'>
      <td class='p-3 text-sm font-light whitespace-nowrap'>ร้านสำรีขายหวย </td>
      <td class='p-3 text-sm font-light whitespace-nowrap'>123456 </td>
      <td class='p-3 text-sm font-light whitespace-nowrap' >
        <span class="p-1.5 text-xs bg-[#D3FAFA] rounded-full">ฉลากเดี่ยว</span>
        </td>
      <td class='p-3 text-sm font-light whitespace-nowrap'>
        <p>งวดที่ : 12</p>
        <p>ชุดที่ : 11</p>
      </td>
      <td class='p-3 text-sm font-light whitespace-nowrap text-center'>เสร็จสิ้น</td>
      
    </tr>
    <tr>
    <td class='p-3 text-sm font-light whitespace-nowrap'>ร้านสำรีขายหวย </td>
      <td class='p-3 text-sm font-light'>123456 </td>
      <td class='p-3 text-sm font-light' >
        <span class="p-1.5 text-xs bg-[#D4FAAF] rounded-full">ฉลากชุด</span>
        </td>
      <td class='p-3 text-sm font-light whitespace-nowrap'>
        <p>จำนวนใบ : 3</p>
        
      </td>
      <td class='p-3 text-sm font-light whitespace-nowrap  text-center'>เสร็จสิ้น</td>
    </tr>
    <tr class='border-b  border-[#E54E3D]'>
    <td class='p-3 text-sm font-light whitespace-nowrap'>ร้านสำรีขายหวย </td>
      <td class='p-3 text-sm font-light whitespace-nowrap'>123456 </td>
      <td class='p-3 text-sm font-light whitespace-nowrap' >
        <span class="p-1.5 text-xs bg-[#D3FAFA] rounded-full">ฉลากเดี่ยว</span>
        </td>
      <td class='p-3 text-sm font-light whitespace-nowrap '>
        <p>งวดที่ : 12</p>
        <p>ชุดที่ : 11</p>
      </td>
      <td class='p-3 text-sm font-light flex whitespace-nowrap'>
      <p> ยกเลิกแล้ว </p>
      <button class='ml-2 bg-[#E54E3D] text-white font-light p-1 '> ชำระอีกครั้ง </button>
        </td>
    </tr>


    
  </tbody>
</table>
</div>
</div>
 
   
   
 
  </>
  )
}

export default Checkorder