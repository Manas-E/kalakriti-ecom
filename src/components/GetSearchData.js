import React from 'react'
import Header from './Header'
import Product from './Product'

function GetSearchData({searchResultsData,category,query}) {

  const searchResult =  <div className="flex">
                            <h1 className="font-extrabold text-3xl p-10"> Found "{searchResultsData.length }" Results  </h1>
                        </div>
  const nothingFound = <div className="flex items-center justify-center h-1/2"> 
                        <h1 className="font-extrabold text-3xl p-10 items-center self-items-center">Sorry Nothing Found</h1>
                    </div>                      

    const renderThis= <div >
        { searchResultsData.length > 0  ?  <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto ">
             {searchResultsData.map(({title,description,price,author,imageURL},id)=>(
                     <Product key={id}
                     id={id}
                     title={title}
                     description={description}
                     price={price}
                     category={author}
                     image={imageURL}
                     />
             ))}
           
         </div>  : nothingFound }
    
         </div>
    return (
        <div className="flex flex-col">
        
        
        { category !== undefined ? "" : searchResult   }
        
        
        {renderThis}
        
        </div>
    )
}

export default GetSearchData
