import React, { useState } from "react";

function Editprofile({ changeTofalse }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  console.log(lastName);
  const onsubmit = () => {};

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={() => changeTofalse()}>
        go back
      </div>
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
        <button onClick={onsubmit}>submit</button>
      </div>
    </div>
  );
}

export default Editprofile;
