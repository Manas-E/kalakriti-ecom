import React, { useRef } from 'react'

import { MenuIcon,SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import {signIn,signOut,useSession} from "next-auth/client"
import { useRouter } from 'next/dist/client/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import MenuBar from "./MenuBar"
import { useState } from 'react'

const headerConstants={

    HEADER_IMG : "/logo1.png",

}

function Header() {

    const [session] =useSession();
    const router =useRouter();
    const items= useSelector(selectItems);
    const [menu,setmenu]=useState(false);
    const qauery =useRef();

    return (
        <header>
            
            {/* Top div */}
            <div className="flex bg-amazon_blue p-1 flex-grow py-2 items-center">
                <div className=" w-20 h-1 md:w-20 md:h-10 mr-5  justify-self-start   z-5 mt-1 flex items-center flex-grow sm:flex-grow-0">
              

                <img  onClick={()=>router.push("/")} className="w-15 h-10  rounded-full -mt-2 cursor-pointer" src="/l1.PNG" alt="" />
                </div>

                <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow   bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
                    <input ref={qauery} className=" w-6 flex-grow flex-shrink p-2 rounded-l-md outline-none"  type="text" />
                        <svg onClick={()=>router.push({
                                pathname: '/searchResults',
                                query: {value:qauery.current.value},
                        })} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"  viewBox="0 10 50 10" stroke="currentColor" className="h-12 p-2" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg> 
                         
                </div>

                <div className="ml-10 flex text-white items-center space-x-6 text-xs whitespace-nowrap    ">

                    <div className="link">
                        <p> Hello, {session? session.user.name : "Stranger" } </p>
                        <p onClick={session?  signOut: signIn}  className="font-extrabold md:text-sm ">{!session? "Sign in" : "Sign Out" }</p>
                        
                    </div>
                    
                    <div className="link">
                        <p></p>
                        <p className="font-extrabold md:text-sm ">Orders </p>
                        
                    </div>
                    
                    <div   onClick={()=>router.push("/checkout")} className="relative link flex items-center">
                        <span className="absolute p-0.5 top-0 right-0 md:right-11 font-bold  bg-yellow-400 rounded-full text-black">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm ">Basket </p>
                        
                    </div>

                </div>
           
            </div> 


            {/* bottom div */}
            <div className="flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6  text-white ">
                <p className="link flex items-center" >
                    <MenuIcon onClick={()=>setmenu(!menu)} className="h-10"/>
                    <p>All</p>
                </p>
                <div className="absolute top-28 z-40" style={{display: menu? "" : "none"}}> <MenuBar /> </div>
                <p className="link">Anime</p>
                <p className="link">Abstract</p>
                <p className="link">Portrait</p>
                <p className="link">Gif's</p>
                <p className="link">Today'Special</p>
                <p className={`${!session && "cursor-not-allowed"} link hidden md:inline`} onClick={()=>(session && router.push("/createNFT"))}>Create NFT</p>
                <p className="link"></p>
                <p className="link"></p>

            </div>


        </header>
    )
}

export default Header