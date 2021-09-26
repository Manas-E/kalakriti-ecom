import React, { useState } from 'react'
import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid';
import cformat  from "currency-formatter" 

import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';


const MaxRating =5;
const MinRating=1;

function CheckoutProduct({id,title,description,price,category,image=""}) {
    const [rating] = useState(Math.floor(Math.random()*(MaxRating -MinRating +1)) +1 );
    const dispatch = useDispatch();

    const addItemToBasket =()=>{
        dispatch(addToBasket({id,title,description,price,category,image}));
    }

    const removeItemFromBasket =()=>{

        dispatch(removeFromBasket({id}));

    }
 
    return (
        <div className="grid grid-flow-col grid-col-5">     
            <Image className="col-span-1" src={image} loading="lazy" width={200} height={200} object-fit="contain"/>

            {/* middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i)=>(
                    <StarIcon className="h-5 text-yellow-500 " />
                    )
                    )}
                </div>
                

                <p className="text-xs line-clamp-2 my-2">{description}</p> 

                <div className="mb-5"> 
                {cformat.format(price,{code: "USD"})}
                </div>



            </div>
            
            {/* Right Add and remove button */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
