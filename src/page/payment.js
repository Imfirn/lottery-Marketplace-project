import React, {useCallback} from "react";
import { useLocation,Link,useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import OrderID_API from "./components/orderID_API";
import axios from "axios";
import './cart.css';
import Logo from './imgComponents/howtopay.png';
import './payment.css';
import { global_url_token } from "./global_url_token";

const Payment = (card_props)=>{

    const [temp_id="", totalCost=0] = useContext(OrderID_API)
    console.log("temp_id",temp_id)
    console.log("totalCost",totalCost)

    const [images, setImages] = useState([]);
	const [imageURLs, setImageURLs] = useState([])
    const [imageNames, setImageName] = useState([])

    const navigate  = useNavigate();

    useEffect(()=>{
        if (images.length < 1)return;
        const newImageURL = [];
        const newImageName = [];
        // console.log("images",images)
        images.forEach((image)=> newImageURL.push(URL.createObjectURL(image)));
        images.forEach((image)=> newImageName.push(image.name))
        // console.log("newImageURL",newImageURL)
        setImageURLs(newImageURL);
        setImageName(newImageName);
    },[images])

    function onImageChange(e){
        e.preventDefault()
        // console.log("onImageChange",images)
        setImages([...e.target.files]);
    }

    const toPaymentSuccess = useCallback(() => navigate('/paymentsuccess', {replace: true}), [navigate]);
    const toHome = useCallback(() => navigate("/home", {replace: true}), [navigate]);

    const sendImageURL = (event) =>{
        event.preventDefault()
        axios.put(global_url_token.url+'/updateOrderSlip',
           {
                token:localStorage.getItem("token"),
                URLSlip:imageNames[0],
                OrderID:String(temp_id)
            })
        .then(function (response) {
            console.log("temp_id", temp_id)
            console.log("response payment img",response)
            console.log("check data sending",{
                token:localStorage.getItem("token"),
                URLSlip:imageNames[0],
                OrderID:String(temp_id)
            })
            if(response.data.status === "200OK"){
                toPaymentSuccess()
            }
            else{
                toHome()
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log("check data sending",{
            token:localStorage.getItem("token"),
            URLSlip:imageNames[0],
            OrderID:String(temp_id)
        })
    }

    return (
        <div className="font-prompt justify-center h-screen" style={{backgroundColor:"#FFE5A3"}}>
            <div className="h-16"/>
            <div className="font-prompt flex justify-center" style={{backgroundColor:"#FFE5A3"}}>
                <div class="flex flex-col p-8 m-8 bg-white rounded-xl shadow-xl min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%]" style={{}}>
                    <div>
                        <h1 class="text-xl font-semibold mb-2" style={{color:"#E54E3D"}}>การชำระเงิน</h1>
                        <div className="justify-left" style={{marginTop:"0vw"}}></div>
                        <div style={{height:"1vw"}}></div>
                        <div style={{marginBottom:"0vw",paddingTop:"1vw",paddingBottom:"0.8vw", borderTopWidth:"0.1vw", borderColor:"#999191"}}>
                            <p style={{display:"flex", justifyContent:"space-between", paddingBottom:"0vw", color:"#000000"}}>ยอดเงินที่ต้องชำระ<span class="text-2xl font-semibold" style={{color:"#E54E3D"}}>{totalCost}&ensp; บาท</span></p>
                        </div>
                        <div className="flex" style={{justifyContent:"center", marginBottom:"1vw",paddingTop:"1vw",paddingBottom:"0.8vw", borderTopWidth:"0.1vw", borderColor:"#999191", justifyItems:"center"}}>
                            <img style={{maxWidth:"70%",justifySelf:"center"}} src={Logo} />
                        </div>
                    </div>
                    <div className="" style={{display:"flex",justifyContent:"center"}}>
                        <input className="custom-file-input" type="file" access="image/*" style={{justifyItems:"center"}} onChange={onImageChange}/>
                    </div>
                    <div className="" style={{display:"flex",justifyContent:"center", width:"100%"}}>
                        {imageURLs.map(imageSrc => <img style={{maxWidth:"50%",justifySelf:"center"}} src={imageSrc}/>)}
                    </div>
                    <div>
                        <form>
                            <button id="goToPaymentMethod" className="flex goToPaymentMethod" disabled={images.length < 1 ? true: false} onClick={sendImageURL}>
                                <p>ดำเนินการชำระเงิน</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Payment