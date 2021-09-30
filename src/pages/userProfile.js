import React, { useState } from 'react'
import Header from '../components/Header'
import {signIn,signOut,useSession} from "next-auth/client"
import Image from "next/image"
import  MyCard from '../components/MyCard'
import Card from "@mui/material/Card";
import { db } from '../../firebase'
import Product from '../components/Product'


function UserProfile() {
    const [session] =useSession();
    const [list,setList]= useState([]);
    const [isSearch,setsearch]=useState(false);
  const search= async    (query)=>{
    await db.collection('nft').get().then(
        (snapshots)=>snapshots.forEach(
            (doc)=>{
                console.log(doc.data())

                if(doc.data().uid.toLowerCase() === query.toLowerCase() ) {
                    // this.state.list.push(doc.data())
                  setList( [...list,doc.data()])
                      
                }

            }
        )
        
    )

            setsearch(true);
    }

    return (
        <div className="flex flex-col ">
            <Header />
            <h1  className="font-extrabold text-3xl p-10">My Account</h1>

            

            {!isSearch ?  <div className="flex flex-col items-center">    
            
            <Card onClick={()=>{ search(session.user.email)}} className="flex flex-col items-center addeffect m-5 p-10"  sx={{ maxWidth: 480 }}>
    
            <Image  src={session?.user.photoURL? session?.user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEnpesBaz7Jeox6d48DYl9ZUljgIojFbspw&usqp=CAU"} width={100} height={100} 
             className="rounded-full" />                                      

            <MyCard 
            title={session?.user.name}
            description={session?.user.email}
            />  
           
           <div className=" hover:link">
                <h1 > My Art</h1>
            </div>
        </Card>
            
           

            </div>

            :   <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto ">
               
                { list.length > 0  ? list.map(({title,description,price,author,imageURL},id)=>(
                     
                     <Product key={id}
                     id={id}
                     title={title}
                     category={author}
                     description={description}
                     price={price}
                     image={imageURL}
                     showButton={false}
                     />
                    
             ))
                   : 
                     <div >
                         <img loading="lazy" className="object-contain" height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIe1I9792C6YblHeR967XxlpMMu5A-XaRZlQ&usqp=CAU" />
                     </div> 
             }


               
  
           

                </div> 

            }

           

           



        </div>
    )
}

export default  UserProfile

