import React from 'react'

function Profile() {
  return (
      <>
    <div className='grid grid-cols-3 gap-9 bg-slate-400  '>
        <h1 className='mb-5  text-2xl font-semibold	 '>ข้อมูลส่วนตัว</h1>
        <div className='col-span-2  text-right m-2'>
        <input type="submit" className='text-right bg-red-500' value="แก้ไขข้อมูล"/>
        
        </div>
        
    </div>
        <div className='grid grid-cols-2 gap-7'>
            <div className='font-semibold text-[#E54E3D]'>
                <h5>ชื่อ</h5>
            </div>
            <div className=''>
                <h5>f</h5>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-7 ทะ-2'>
            <div className='font-semibold text-[#E54E3D]'>
                <h5>นามสกุล</h5>
            </div>
            <div className=''>
                <h5>f</h5>
            </div>
        </div>
        
    </>
  )
}

export default Profile