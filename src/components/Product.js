import { StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import cformat  from "currency-formatter" 
import Image from "next/image"
import { addToBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MaxRating =5;
const MinRating=1;

function Product({id,title,description,price,category,image,showButton=true}) {
    const [rating] = useState(Math.floor(Math.random()*(MaxRating -MinRating +1)) +1 );
    const dispatch = useDispatch();


    const randomQuote = ()=>{
    const randomQuoteList = ["Yay you made the right choice🥳","Awesome possum lovely blossom🐻","You are on a streak⚡","Smash that Add Button⚡🤩","Love the way you buy buddy"]
    return randomQuoteList[Math.floor(Math.random(randomQuoteList.length)*10)]
    }

    const addItemToBasket= ()=>{
        dispatch(addToBasket({id,title,description,price,category,image}));
        const rt = randomQuote()
       
        toast(randomQuote(), {
            position: "bottom-right",
            autoClose: 5000,
            theme:"dark"
            }) 
    }

    return (
        <div className="relative flex flex-col bg-white z-30 p-10 m-5 addeffect">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{category}  </p>  

        <Image src={`/api/imageProxy?url=${encodeURIComponent(image)}`} loading="lazy" height={200} width={200} objectFit="contain" />  

        <h4 className="my-3">{title}</h4>

        <div className="flex">
            {Array(rating).fill().map((_,i)=>(
                <StarIcon className="h-5 text-yellow-500 " />
            )
            )}
        </div>
            
        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-5"> 
                {cformat.format(price,{code: "INR"})}
        </div>

                <button onClick={addItemToBasket} className={`${!showButton ? "hidden" : ""} active:animate-bounce  mt-auto  button shadow-lg border-b-8 border-yellow-500`}>Add to Basket</button>
        </div>
    )
}

export default Product;
