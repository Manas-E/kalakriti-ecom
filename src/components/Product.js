import { StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import cformat  from "currency-formatter" 
import Image from "next/image"

const MaxRating =5;
const MinRating=1;

function Product({id,title,description,price,category,image}) {
    const [rating] = useState(Math.floor(Math.random()*(MaxRating -MinRating +1)) +1 );
    return (
        <div className="relative flex flex-col bg-white z-30 p-10 m-5">
        <p className="absolute top-2 right-2 tet-xs italic text-gray-400 ">{category} </p>  

        <Image src={image} height={200} width={200} objectFit="contain" />  

        <h4 className="my-3">{title}</h4>

        <div className="flex">
            {Array(rating).fill().map((_,i)=>(
                <StarIcon className="h-5 text-yellow-500 " />
            )
            )}
        </div>
            
        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-5"> 
                {cformat.format(price,{code: "USD"})}
        </div>

                <button className=" mt-auto   button">Add to Basket</button>
        </div>
    )
}

export default Product;
