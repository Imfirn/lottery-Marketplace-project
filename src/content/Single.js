import React,{useState,useEffect} from "react";

function Single() {
  const[lottery,setLottery] = useState(()=>{

    const saveLotto = localStorage.getItem("lottery")

    if(saveLotto){
        return JSON.parse(saveLotto);
    }else{
        return [];
    }


  });  
  const[number,setNumber]= useState("");
  const[draw,setDraw]= useState("");
  const[pack,setPack]= useState("");

  useEffect(()=>{
      localStorage.setItem("lottery",JSON.stringify(lottery))
  },[lottery])
 
  function handleInput(e){
      setNumber(e.target.value);
  }

  function handleFormSubmit(e){
      e.preventDefault();
      if(number !=="" && draw !=="" && pack !==""){
          setLottery(
              [
                  ...lottery,
                  {
                      id:lottery.length+1,
                      number: number.trim(),
                      pack:pack.trim(),
                      draw:draw.trim()
                      
                  }

              ]
          )
      }
      
      setNumber("");
      setDraw("");
      setPack("");
  }
function handleDelete(id){
    const removeItem = lottery.filter((lotto)=>{

        return lotto.id !== id

    })

    setLottery(removeItem);

}

console.log(lottery)
  return (
    <div>
      <div class="grid justify-items-center ">
        {/* <div class="bg-white text-center text-xs m-2 p-3 w-2/6 shadow-md rounded-md xl:w-[530px] lg:w-[430px] sm:w-[400px]  min-w-[300px]">
          <div class="flex justify-between space-x-4">
            <div class="flex justify-between space-x-4 ">
            <div class="flex justify-between">
                <h5 class="pl-2 p-2">เลขสลาก</h5>
                <h5 class="pl-2 p-2 bg-[#FFF8E6] ">123456</h5>
               
              </div>
              <div class="flex justify-between">
                <h5 class="pl-2 p-2">วันที่</h5>
                <h5 class="pl-2 p-2 bg-[#FFF8E6] ">1 เมษายน 2565</h5>
                
              </div>
              <div class="flex justify-between">
                <h5 class="pl-2 p-2">งวดที่</h5>
                <h5 class="pl-2 p-2 bg-[#FFF8E6] ">12</h5>
                
              </div>

              <div class="flex justify-between">
                <h5 class="pl-2 p-2">ชุดที่</h5>
                <h5 class="pl-2 p-2 bg-[#FFF8E6] ">01</h5>
               
              </div>
            </div>
            <button class="font-prompt text-sm underline underline-offset-1 text-[#ee6657] hover:text-[#ff2020]">
              ลบ
            </button>
          </div>
        </div> */}
       
        <div class="flex justify-center bg-[#FFF8E6]  m-2 p-3 w-2/6 shadow-md rounded-md xl:w-[530px] lg:w-[430px] sm:w-[400px]  min-w-[300px]">
          <form onSubmit={handleFormSubmit}>
            <div class="flex justify-between space-x-4 text-xs">
              <div class="flex justify-between">
                <h5 class="pl-2 p-2">เลขสลาก</h5>
                <input
                  maxLength={6}
                  placeholder="123456"
                  value={number}
                  onChange={handleInput}
                  type="text"
                  class="pl-2 p-2 rounded-md w-[57px] text-center"
                />
              </div>
              <div class="flex justify-between">
                <h5 class="pl-2 p-2">วันที่</h5>
                {/* <input
                  placeholder="1 เมษายน 2565"
                  type="text"
                  class="pl-2 p-2 rounded-md w-[100px] text-center"
                /> */}
              </div>
              <div class="flex justify-between">
                <h5 class="pl-2 p-2">งวดที่</h5>
                <input
                  placeholder="12"
                  type="text"
                  value={draw}
                  onChange={(event) => setDraw(event.target.value)}
                  class="pl-2 p-2 rounded-md w-[30px] text-center"
                />
              </div>
              <div class="flex justify-between">
                <h5 class="pl-2 p-2">ชุดที่</h5>
                <input
                  placeholder="12"
                  type="text"
                  value={pack}
                  onChange={(event) => setPack(event.target.value)}
                  class="pl-2 p-2 rounded-md w-[30px] text-center"
                />
              </div>
              <button
                type="submit"
                class="bg-[#E54E3D] hover:bg-[#ff2020] rounded-md text-white px-2"
                
              >
                เพิ่ม
              </button>
            </div>
          </form>
        </div>
            <ul >
                {lottery.map((lotto)=>(
                    <li key={lotto.id}>
                        {lotto.number}
                        {" "}
                        {lotto.draw}
                        {" "}
                        {lotto.pack}
                        {" "}
                        <button onClick={()=>handleDelete(lotto.id)}>ลบ</button>
                    </li>
                ))}
            </ul>

      </div>
    </div>
  );
}

export default Single;
