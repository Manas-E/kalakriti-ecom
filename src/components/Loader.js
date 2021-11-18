import React from 'react'

function Loader({loaderType}) {
    return (
       
        <div className="loaderDiv">
            <span class={`${loaderType}`}></span> 
        </div>
        
    )
}

export default Loader
