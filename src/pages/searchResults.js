import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from "firebase"
import { db } from '../../firebase';
import Header from '../components/Header';


import GetSearchResults from '../components/GetSearchResults';


function searchResults() {
    const router =useRouter();

    // useEffect(() => {
        
    //     const [query,setquery] =  useState("");

    //    return setquery(router.query.value);
      
    // },[])
    const query = router.query.value
    console.log("I'm search results")
    return (
       <GetSearchResults query={query}  />
    )
}

export default searchResults
