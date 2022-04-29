import React, { useEffect, useState,useRef } from 'react'
import AcceptDel from './component/AcceptDel';
import axios from 'axios';

function ProductStore({token}) {
    const [dataProduct,setDataProduct] = useState([{}]);
    const[dialog,setDialog]=useState({
        msg:"",
        isShow:false,
    });
   
    var randomArray = [
        'N','Y'
     ];

    const numProduct =useRef();
    
    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
      }

    function getlottery_m() {
        axios.get(
            "http://265f-2403-6200-88a4-4c62-c81f-324d-a5c2-fa5d.ngrok.io/getLotteryForSeller/" +"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY1MTI0OTQyMywiZXhwIjoxNjUxMjg1NDIzfQ.AM9tOsI7b1iIs-g3MoJV3LUlImr5JW3zFfysLx_GzwA"
          )
    
          .then(function (response) {
            console.log(response)

            setDataProduct(response.data.lottery)
           
          })
          .catch(function (error) {
              console.log(error);
          });
      }

    
      useEffect(()=>{
         
            getlottery_m()

    },[])

   
    const handleDelete =(num)=>{      
        setDialog({
            msg:"คุณยืนยันจะลบหรือไม่?",
            isShow:true,
        });

        numProduct.current = num;

       
    }

    const conFirmtodel =(c)=>{
        if(c==true){
            setDataProduct(dataProduct.filter((p)=>p.num !== numProduct.current));
            setDialog({
                msg:"คุณยืนยันจะลบหรือไม่?",
                isShow:false,
            });
            console.log("del it!!!")

        }else{
            setDialog({
                msg:"คุณยืนยันจะลบหรือไม่?",
                isShow:false,
            });

        }

    }
    

    console.log(dataProduct)
  return (
    <>
     {/* bg-[#D4FAAF]  */}
    <h1 class='mb-5  text-2xl font-semibold	 '>สินค้าภายในร้าน</h1> 
     
     <div class=" flex justify-center items-center bg-white  font-prompt">
   
   <div class='overflow-x-auto  xl:w-[560px] md:w-[450px] sm:w-[400px] h-[420px]'>
     <table class="w-full ">
         
 
   <thead class=" border-b border-t border-[#E54E3D]">
     <tr>
       {/* <th class="w-32 p-2 text-sm tracking-wider font-medium text-center">ชื่อร้านค้า</th> */}
       <th class=" p-2 text-sm tracking-wider font-medium text-center">เลขสลาก</th>
       <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">ประเภท</th>
       <th class="w-30 p-2 text-sm tracking-wider font-medium text-center">เพิ่มเติม</th>
       <th class="w-30  p-2 text-sm tracking-wider font-medium text-center"></th>
     
     </tr>
   </thead>
   {/* {dataProduct.map((data,i)=>(i))} */}
   {dataProduct.map((data)=>(

       <tbody class="divide-y border-b border-t border-[#E54E3D]">
       <tr class=' border-b  border-[#E54E3D]'>
         <td class='p-3 text-sm font-light whitespace-nowrap text-center'>{data.Number} </td>
         <td class='p-3 text-sm font-light whitespace-nowrap text-center' >
           <span class={`p-1.5 text-xs ${data.pack =="Y" ?"bg-[#D4FAAF] ":"bg-[#D3FAFA]"} rounded-full`}>{data.pack =="Y" ?"สลากชุด":"สลากเดี่ยว"}</span>
           </td>
         <td class='p-3 text-sm font-light whitespace-nowrap text-center'>
         {data.pack =="Y" ?
         <div class="">
         <p class="flex">งวดที่ : 
         {[...Array(Number(data.Draw.length))].map((_, i) => (
           <p >{data.Draw[i].replace("|",",")} </p> 
          ))}
          </p> 
          <p class="flex">งวดที่ : 
         {[...Array(Number(data.Draw.length))].map((_, i) => (
           <p >{data.Lot[i].replace("|",",")} </p> 
          ))}
          </p> 
          
          </div>:
          <div class="flex flex-col">
           <p >งวดที่ : {data.Draw}</p>
           <p >ชุดที่ : {data.Lot}</p>
           </div>}
           
         </td>
         <td class='p-3 text-sm font-light whitespace-nowrap text-center'>
         <button class=' bg-[#E54E3D] text-white font-light p-2 text-center' onClick={()=>handleDelete(data.Number)}> ลบ </button>
         
         </td>
         
       </tr>
       
       
       
     </tbody>
   ))}
   {dialog.isShow && <AcceptDel onShowing={conFirmtodel} text={dialog.msg} />  } 
 </table>
 </div>
 </div>
  
    
    </>
  )
}

export default ProductStore