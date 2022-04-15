import React from 'react'

function Editprofile({changeTofalse}) {
  return (
    <div>
        <div style={{cursor:"pointer"}} onClick={()=>changeTofalse()}>go back</div>
        <input value="First name"/>
        <input value="last name"/>
        <button>submit</button>

    </div>
  )
}

export default Editprofile