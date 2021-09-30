import React from 'react'
import Product from './Product'

import  MyCard from './MyCard'
import LoginIcon from "@heroicons/react/outline"

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function ProductFeed({products}) {
  
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto ">
           
            {products.slice(0,4).map(({id,title,description,price,author="Unknown",image})=>(
                <Product key={id}
                        id={id}
                        title={title}
                        category={author}
                        description={description}
                        price={price}
                        image={image}
                        />
            ))}
            <div className="col-span-full items-center content-center object-contain ">
                {/* <img className="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Jupiter_21/Wave1/Newlaunches/AllHeaders/V1/AW-PC.jpg"/>  */}
              
                <h2 className="p-10 font-extrabold text-amazon_blue  md:text-3xl flex flex-col items-center content-center "> Buy and Sell NFTs at one Place</h2>
               <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
               <Card className="flex flex-col items-center addeffect m-5 p-5"  sx={{ maxWidth: 480 }}>

               <svg  xmlns="http://www.w3.org/2000/svg" className="text-yellow-400  flex flex-col h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
               <MyCard 
               title="Sign In"
               description="Sign in to buy and sell your own NFTs"

               />  

   
               </Card>
               <Card className="flex flex-col items-center addeffect m-5 p-5"  sx={{ maxWidth: 480 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-400  flex flex-col h-16 w-16"  viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
             
                <MyCard 
               title="Add your NFTs"
               description="Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."

               /> 
                </Card>
                
                <Card className="flex flex-col items-center addeffect m-5 p-5"  sx={{ maxWidth: 480 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-400  flex flex-col h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                
                <MyCard 
               title="Buy awesome NFTs"
               description="Make it yours the Unique and one of it's kind Art in whole world can be yours and only yours"

               /> 
                </Card>


               </div>
            </div>
          
            <div className="md:col-span-2">
            {products.slice(4,5).map(({id,title,description,price,author,image})=>(
                <Product  key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        category={author}
                        image={image}
                        />
            ))}
            </div>
         

            {products.slice(5,products.length).map(({id,title,description,price,author,image})=>(
                <Product key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        category={author}
                        image={image}
                        />
            ))}
        </div>
            
    )
}

export default ProductFeed
