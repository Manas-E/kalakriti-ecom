import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { db } from '../../firebase';


import GetSearchData from '../components/GetSearchData';
import Fuse from 'fuse.js'
import Header from '../components/Header';


function searchResults({searchResultsData}) {
    const router =useRouter();
   
    // useEffect(() => {}
        
    //     const [query,setquery] =  useState("");

    //    return setquery(router.query.value);
      
    // },[])
    const query = router.query.value
    const category = router.query.category
    console.log("I'm search results",searchResultsData)
    return (
        <div>

        <Header />

       <GetSearchData query={query} category={category} searchResultsData={searchResultsData}  />
       </div>

    )
}

export default searchResults


export async function getServerSideProps(context){
 
    var query=context.query.value
    const category = context.query.category
    var list = [];
    var artList = [];
    var authorList=[];
    var dbRecords = [];
    const options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['author', 'title']
      }
    var searchResultsData={};


 console.log(query)

 if(query!=undefined)
{
console.log(query,"-----------")

 await db.collection('nft').get().then(
  (snapshots)=>snapshots.forEach(
        (doc)=>{
            dbRecords= [...dbRecords,doc.data()]
    }
    )

    
   
 ).catch((err)=>{
    console.log(err);

 })
 const fuse = new Fuse(dbRecords, options)
  
 const result = fuse.search(query);
console.log(result,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
searchResultsData = [ result[0].item ];
console.log(searchResultsData)



}
else
if(category!=undefined)
{
    await db.collection('nft').get().then(
        (snapshots)=>snapshots.forEach(
            (doc)=>{
            
              
                   // this.state.list.push(doc.data())
                   if(doc.data()?.category?.toLowerCase() == category?.toLowerCase() )
                    list= [...list,doc.data()]
                      
             
                

            }
        )
    )
     searchResultsData = list;

}

    return {
        props:{
          searchResultsData
        }
      }



}

