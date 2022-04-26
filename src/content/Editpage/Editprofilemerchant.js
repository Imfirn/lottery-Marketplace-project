import React, { useState } from "react";


function Editprofile({ changeTofalse }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [number, setnumber] = useState("");
  const [mail, setmail] = useState("");
  const [address, setAddress] = useState("");

  console.log(lastName);
  const onsubmit = () => {};

  return (
    <div class=" h-[530px] overflow-x-auto">
      <div class="grid grid-cols-2 mb-5">
      <h1 class="mb-5  text-2xl font-semibold ">
        แก้ไขข้อมูลส่วนตัว
      </h1>
      <div class="grid justify-self-end">
      <div class="flex ">
        <button
          style={{ cursor: "pointer" }}
          onClick={() => changeTofalse()}
          type="button"
          class="text-[#E54E3D] bg-white border  border-[#E54E3D] hover:bg-white  font-medium  
        text-sm px-3 py-1.5 text-center inline-flex items-center  mr-2 mb-2 h-[35px]"
        >
          ยกเลิก
        </button>
        <button
          onClick={onsubmit}
          type="button"
          class="text-white bg-[#E54E3D] hover:bg-[#E54E3D]/80 font-medium 
        text-sm px-4 py-2 text-center inline-flex items-center   mb-2 h-[35px]"
        >
          บันทึก
        </button>
      </div>
      </div>
      
      </div>

      <div class="grid grid-cols-2 gap-7">
        <div class="font-semibold text-[#E54E3D]">
          <h5>ชื่อ</h5>
        </div>
        <input
          class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div class="grid grid-cols-2 gap-7 mt-2">
        <div class="font-semibold text-[#E54E3D]">
          <h5>นามสกุล</h5>
        </div>
        <input
          class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
          value={lastName}
          onChange={(event) => setlastName(event.target.value)}
        />
      </div>
      <div class="grid grid-cols-2 gap-7 mt-2">
        <div class="font-semibold text-[#E54E3D]">
          <h5>เบอร์โทรศัพท์</h5>
        </div>
        <div class="">
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            value={number}
            onChange={(event) => setnumber(event.target.value)}
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-7 mt-2">
        <div class="font-semibold text-[#E54E3D]">
          <h5>วัน/เดือน/ปีเกิด</h5>
        </div>
        <div class="">
         f
        </div>
      </div>

      <div class="grid grid-cols-2 gap-7 mt-2">
        <div class="font-semibold text-[#E54E3D]">
          <h5>Email</h5>
        </div>
        <div class="">
        <input
            class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            value={mail}
            onChange={(event) => setmail(event.target.value)}
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-7 mt-2">
        <div class="font-semibold text-[#E54E3D]">
          <h5>ที่อยู่</h5>
        </div>
        <div class="">
        <input
            class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
      </div>
      <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>เลขบัญชีธนาคาร</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>ธนาคาร</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
        <div class='grid grid-cols-2 gap-7 mt-2'>
            <div class='font-semibold text-[#E54E3D]'>
                <h5>ชื่อบัญชี</h5>
            </div>
            <div class=''>
                <h5>f</h5>
            </div>
        </div>
       

      
     
    </div>
  );
}

export default Editprofile;
