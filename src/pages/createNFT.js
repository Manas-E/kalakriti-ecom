import React , { useRef, useState } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/dist/client/router'
import { doc, setDoc } from "firebase/firestore"; 
import {signIn,signOut,useSession} from "next-auth/client"
import firebase from "firebase"
import { db } from '../../firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';

function createNFT() {
    

    const [session] =useSession();

    const [loading,setloading]= useState(false);
    const router =useRouter();
    const name = useRef();
    const image = useRef();
    const description = useRef();
    const category = useRef();
    const price = useRef(0);
    const [url,seturl]=useState("");
    const addNFT = async ()=>{

        if(url.length > 1000){
            toast('Size matters! Please enter a short URL 😱', {
                position: "bottom-right",
                autoClose: 5000,
                theme:"dark"
                }) 

        }
        else{
        setloading(true);  
        const addnft = await db.collection('nft').add({
            title: name.current.value,
            description: description.current.value,
            price: price.current.value,
            imageURL : image.current.value,
            author: session.user.name,
            photoURL:session.user.image,
            uid: session.user.email,
            category:category.current.value,

        }).then((res)=>{
            setloading(false);  

            toast('Congrats!! Your NFT added 🥳', {
            position: "bottom-right",
            autoClose: 5000,
            theme:"dark"
            })

        }
        )
        
        }
    
    }

  
    return (
        <div>
            <Header />
            <div className="login  flex flex-col items-center p-5">
            <h1 className="font-extrabold text-3xl p-5 pb-5"> Add your NFT Details</h1>
         
            <div className="flex flex-col w-80 bg-amazon_blue-light items-center rounded-lg">

           
                 <input  className="bg-amazon_blue-light p-5 focus:border-white  focus:border-2 outline-none text-white" ref={name}  type="text" placeholder="Full Name " />   
                <input onChange={(e)=>{seturl(e.target.value)}} className="bg-amazon_blue-light p-5 focus:border-white focus:border-2 outline-none text-white" ref={image} type="text" placeholder="Pic URL" />
                 <input className="bg-amazon_blue-light p-5 focus:border-white  focus:border-2 outline-none text-white border-white" ref={description} type="text" placeholder="Description" />
                 <input className="bg-amazon_blue-light p-5 focus:border-white  focus:border-2 outline-none text-white" ref={price} type="number"  placeholder="Price" />
                 <select list="browsers"  className="bg-amazon_blue-light p-5 focus:border-white  focus:border-2 outline-none text-white w-70 " ref={category}   placeholder="Category" >
 
      
                  <option value="Abstract" >Abstract</option>
                  <option value="Anime" >Anime</option>
                  <option value="Gif" >Gif</option>
                  <option value="Portrait" >Portrait</option>
                 <option value="Other" >Other</option>
              
                </select>

                 <button className="button p-4 w-full rounded-md" onClick={addNFT}>Add</button>
            </div>
         </div>
     )
     <ToastContainer />
     {loading ?<Loader loaderType={"loader"}  />
: "" }

        </div>
    )
}

export default createNFT
