import { StarIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react'
import cformat  from "currency-formatter" 
import Image from "next/image"
import { addToBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
import {signIn,signOut,useSession} from "next-auth/client"
import { db } from '../../firebase'
import { useRouter } from 'next/dist/client/router'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MaxRating =5;
const MinRating=1;

function Product({id,title,description,price,category,image,showButton=true,setTrigger}) {
    const [rating] = useState(Math.floor(Math.random()*(MaxRating -MinRating +1)) +1 );
    const dispatch = useDispatch();
    const addItemToBasket= ()=>{
        dispatch(addToBasket({id,title,description,price,category,image}));
    }
    const [session] =useSession();
    const router =useRouter();
    const [updateClicked,setupdateClicked]=  useState(false)
    
    const [name,setname] = useState()
    const [desc,setdesc]   = useState()
    const [p,setp] = useState()
    
    
     
   
    const removeItem = async () =>{

       const nft =  await db.collection('nft').doc(id.toString())
       nft.delete().then((res)=>{
        console.log("Deleted Successsfully", id)
 
        toast('Item got deleted ❌', {
            position: "bottom-right",
            autoClose: 5000,
            theme:"dark"
            })
       })
       router.push('/userProfile')
       setTrigger((prev)=>!prev)
    

    }

    const updateItem = async (update=0) =>{
        
     
        if(update === 1)
        {
        const nft =  await db.collection('nft').doc(id.toString())
        toast('Update Success 🥳', {
            position: "bottom-right",
            autoClose: 5000,
            theme:"dark"
            })
        console.log(name)
        
            let data2update ={}
            if(name != undefined)
                data2update = {...data2update,  title: name?.target.value,}
            if(desc != undefined)
                data2update = {...data2update,  description:desc?.target.value,}
            if(p != undefined)
                data2update = {...data2update, price:p?.target.value,}
                
       
        nft.update(data2update)
        }


        setupdateClicked((prev)=>!prev)       
        router.push('/userProfile')

        setTrigger((prev)=>!prev)
    }


    return (
        <div className="relative flex flex-col bg-white z-30 p-10 m-5 addeffect select-none">
        <PencilAltIcon  onClick={updateItem} className="absolute bottom-2 right-2 text-xs italic text-gray-400 w-8 h-8 hover:text-green-500 hover:cursor-pointer" />
        <TrashIcon onClick={removeItem} className="absolute top-2 right-2 text-xs italic text-gray-400 w-8 h-8  hover:text-red-500 hover:cursor-pointer"/>
        <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJC7vsNyuLBgWhs6JnH29BbJHKOIB0lbcjxGvc705vV1V3kfAW_IwonqH1s_MzqYLHi7I&usqp=CAU" &&   `/api/imageProxy?url=${encodeURIComponent(image)}`} loading="lazy" height={200} width={200} objectFit="contain" />  

       
        { !updateClicked ? <div>

       <h4 className="my-3">{title}   </h4>

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

        <button onClick={addItemToBasket}  className={`${!showButton ? "hidden" : ""} mt-auto  button`}>Add to Basket</button>
        </div>

        : 
      
        <div>

        <input  className=" focus:border-white  focus:border-2 "  type="text" onChange={(t)=>setname(t)} placeholder={title} />   

        <div className="flex">
            {Array(rating).fill().map((_,i)=>(
                <StarIcon className="h-5 text-yellow-500 " />
            )
            )}
        </div>

        <input  className=" focus:border-white  focus:border-2 " onChange={(t)=>setdesc(t)}  type="text" placeholder={description} />   

        <div className="mb-5"> 
        <input  className=" focus:border-white  focus:border-2 "  onChange={(t)=>setp(t)} type="text" placeholder={price} />   

        </div>
        <button onClick={()=> updateItem(1) }  className={` mt-auto  button`}>Update</button>
        </div>
        }
        </div>

    )
}

export default Product;

