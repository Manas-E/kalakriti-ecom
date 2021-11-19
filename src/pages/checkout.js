import React, { useEffect } from 'react'
import Header from '../components/Header'
import Image from "next/image"
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Anim from "../components/Anim";
import { useRouter } from 'next/dist/client/router'
import cformat  from "currency-formatter" 
import {signIn,signOut,useSession} from "next-auth/client"
import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { route } from 'next/dist/server/router';
import { createRouteLoader } from 'next/dist/client/route-loader';
import { db } from '../../firebase';


function Checkout() {
    const items= useSelector(selectItems);
    const router =useRouter();
    const [session] =useSession();
    var total= useSelector(selectTotal);
    var paymentResponse = {}


const createOrder =  async ()=>{
    const order =  await db.collection('order').doc(session.user.email)

    order.set({...items});



}

function loadRazorpay(){

    const script = document.createElement("script");
    script.src="https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  
    script.onload=DisplayRazorpay();

    script.onerror=()=>{
      console.log("error");
    }

}


    
async function  DisplayRazorpay(){
    total = Math.floor( total)
    var paymentData={}
      await axios.post(`${process.env.NEXTAUTH_URL}/api/razorpay?price=${total}`)
      .then((response) => {
        console.log("===",response.data);
        paymentData=response.data;
      }, (error) => {
        console.log("=======",error.response.data);
    
      });
    
      console.log("this is data: ",paymentData);
      
     
      const options = {
        key:process.env.RAZOR_PAY_KEY,
        currency: paymentData.currency,
        amount: paymentData.amount,
        name: "Kalakriti",
        description: "NFT Marketplace",
        order_id: paymentData.id,
        handler: function (response) {
            paymentResponse = {"razorpay_payment_id": response.razorpay_payment_id,"razorpay_order_id": response.razorpay_order_id,"razorpay_signature": response.razorpay_signature}
            alert('Order successful 🥳')
            createOrder();

            router.push("/")    

        },
        prefill: {
          name: session.user.name,
          email: session.user.email,
        
        },
      };

    
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
    
    
    
    }
    

    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">

                {/* Left */}
                <div className="flex-grow m-5 shadow-sm ">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOXQM5VgY_zcNzuLPDPxipfRnSY9GlkuTXA&usqp=CAU"
                    width={1020}
                    height={250}
                    objectFit="contain" />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl pb-5 border-b">{items.length===0 ? <div className="flex">
                            <Anim />

                            <div className="p-10 ">
                                <h1 className="font-bold">Your Cart is Empty</h1>
                                <h2 className="text-sm link" onClick={()=>{router.push("/")}}>See Recommendations</h2>
                            </div>
                            

                        </div>  : 
                        "Your Shoping Basket" } </h1>

                        {items.map((item,i)=>(
                            <CheckoutProduct key={i}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        category={item.author}
                        image={item.image}
                        quantity={item.quantity} />
                        ))}
                        
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col p-10 bg-white shadow-md ">
                    {items.length!=0 &&  
                    <div>
                        <h2 className="whitespace-nowrap">Subtotal ({items.length} items): 

                        <span className="font-bold"> 
                            {cformat.format(total,{code: "USD"})}

                        </span>
                        </h2>
                        <button onClick={loadRazorpay}  className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed "}`}>
                            {!session ? "Sign in to Proceed" : "Proceed toCheckout"}
                        </button>
                    </div> }
                </div>
            </main>
                        
        
            <ToastContainer />

        </div>
    )
}

export default Checkout
