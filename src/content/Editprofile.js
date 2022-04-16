import React, { useState } from "react";
import DatePicker from "react-date-picker";

function Editprofile({ changeTofalse }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [number, setnumber] = useState("");
  const [date, setDate] = useState("");






  console.log(lastName);
  const onsubmit = () => {};

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={() => changeTofalse()}>
        go back
      </div>
      <h1 className='mb-5  text-2xl font-semibold	 '>แก้ไขข้อมูลส่วนตัว</h1>
      <div className="grid grid-cols-2 gap-7">
        <div className="font-semibold text-[#E54E3D]">
          <h5>ชื่อ</h5>
        </div>
        <input
          className="bg-violet-100"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-7 mt-2">
        <div className="font-semibold text-[#E54E3D]">
          <h5>นามสกุล</h5>
        </div>
        <input
          className="bg-violet-100"
          value={lastName}
          onChange={(event) => setlastName(event.target.value)}
        />
       
      </div>
      <div className='grid grid-cols-2 gap-7 mt-2'>
            <div className='font-semibold text-[#E54E3D]'>
                <h5>เบอร์โทรศัพท์</h5>
            </div>
            <div className=''>
            <input
          className="bg-violet-100"
          value={number}
          onChange={(event) => setnumber(event.target.value)}
        />
            </div>
        </div>
        <div className='grid grid-cols-2 gap-7 mt-2'>
            <div className='font-semibold text-[#E54E3D]'>
                <h5>วัน/เดือน/ปีเกิด</h5>
            </div>
            <div className=''>
            <input
            type="date"
          className="bg-violet-100"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          
        />
        {/* <DatePicker locale="th"  value={date}
          onChange={(event) => setDate(event.target.value)}/> */}
            </div>
        </div>
        <button onClick={onsubmit}>submit</button>
    </div>
  );
}

export default Editprofile;
