import React from 'react'

function Profile() {
  return (
      <>
    <div className='grid grid-cols-3 gap-9   '>
        <h1 className='mb-5  text-2xl font-semibold	 '>ข้อมูลส่วนตัว</h1>
        <div className='col-span-2  text-right m-2'>
        
        
        </div>
        
    </div>
        <div className='grid grid-cols-2 gap-7'>
            <div className='font-semibold text-[#E54E3D]'>
                <h5>ชื่อ</h5>
            </div>
            <div className=''>
                <h5>สมศรี</h5>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-7 ทะ-2'>
            <div className='font-semibold text-[#E54E3D]'>
                <h5>นามสกุล</h5>
            </div>
            <div className=''>
                <h5>แสงสว่าง</h5>
            </div>
        </div>
        
    </>
  )
}

export default Profile