import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { db } from '../../firebase';


import GetSearchData from '../components/GetSearchData';
import Fuse from 'fuse.js'
import Header from '../components/Header';
import Product from '../components/Product';
import GetOrderData from '../components/GetOrderData';


function searchResults({dbRecords}) {
    const router =useRouter();
 
    console.log("I'm search results",dbRecords)
    return (
        <div>
            <Header />

            <h1  className="font-extrabold text-3xl p-10">Your Orders</h1>
            <GetOrderData searchResultsData={dbRecords}  />

        </div>
    )
}

export default searchResults


export async function getServerSideProps(context){
 
    var query=context.query.value
    
    var dbRecords = [];
  


 console.log(query)

 if(query!=undefined)
{
console.log(query,"-----------")

 await db.collection('order').doc(query).get().then(
  (snapshots)=>snapshots.forEach(
        (doc)=>{
            dbRecords=   Object.values(doc.data())
    }
    )

  
   
 ).catch((err)=>{
    console.log(err);

 })


}

    return {
        props:{
            dbRecords
        }
      }



}

