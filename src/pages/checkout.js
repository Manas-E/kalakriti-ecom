import React from 'react'
import Header from '../components/Header'
import Image from "next/image"
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Anim from "../components/Anim";
import { useRouter } from 'next/dist/client/router'
import cformat  from "currency-formatter" 
import {signIn,signOut,useSession} from "next-auth/client"


function Checkout() {
    const items= useSelector(selectItems);
    const router =useRouter();
    const [session] =useSession();
    const total=useSelector(selectTotal);

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
                        image={item.image} />
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
                        <button  onClick={()=>router.push("/contact")}  className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed "}`}>
                            {!session ? "Sign in to Proceed" : "Proceed toCheckout"}
                        </button>
                    </div> }
                </div>
            </main>
        </div>
    )
}

export default Checkout
