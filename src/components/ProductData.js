import { StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import cformat  from "currency-formatter" 
import Image from "next/image"
import { addToBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductData({id,title,description,price,paymentResponse,author,date,image,quantity,showButton=true}) {
    return (
        <div className="relative flex flex-col bg-white z-30 p-10 m-5 addeffect">

        <div className="absolute flex items-center top-2 right-2 w-10 h-10 italic text-gray-400 rounded-full bg-yellow-400">
        <h2 className="ml-4 font-bold text-lg text-black"> {quantity}</h2>
       
        </div>
       
        <Image src={`/api/imageProxy?url=${encodeURIComponent(image)}`} loading="lazy" height={200} width={200} objectFit="contain" />  

        <h4 className="my-3">{title}</h4>

       
            
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div className="flex flex-col">
        <p className="text-xs my-1 ">Date : {date.substring(0,10)} </p> 

          <p className="text-xs my-1 ">Author : {author} </p> 
          <p className="text-xs my-1 "> Order ID: {paymentResponse.razorpay_order_id  }</p> 
          <p className="text-xs my-1 "> Payment ID: {paymentResponse.razorpay_payment_id}</p> 
        </div>
        <div className="mb-5"> 
                {cformat.format(price,{code: "INR"})}
        </div>

        </div>
    )
}

export default ProductData
