import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { db } from '../../firebase';


import GetSearchData from '../components/GetSearchData';


function searchResults({searchResultsData}) {
    const router =useRouter();

    // useEffect(() => {
        
    //     const [query,setquery] =  useState("");

    //    return setquery(router.query.value);
      
    // },[])
    const query = router.query.value
    const category = router.query.category
    console.log("I'm search results",searchResultsData)
    return (
       <GetSearchData query={query} category={category} searchResultsData={searchResultsData}  />
    )
}

export default searchResults


export async function getServerSideProps(context){
 
    var query=context.query.value
    const category = context.query.category
    var list = [];
 console.log(context.query.value)
    await db.collection('nft').get().then(
        (snapshots)=>snapshots.forEach(
            (doc)=>{
            
                if( query != undefined &&  doc.data().title.toLowerCase() === query.toLowerCase() ) {
                    console.log(doc.data(),doc,"<<<")
                    // this.state.list.push(doc.data())
                    list= [...list,doc.data()]
                      
                }

                if( category != undefined &&  doc.data()?.category?.toLowerCase() === category.toLowerCase() ) {
                    // this.state.list.push(doc.data())
                    list= [...list,doc.data()]
                      
                }
                

            }
        )
    )

    const searchResultsData = list;

    return {
        props:{
          searchResultsData
        }
      }



}

