import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto ">
           
            {products.slice(0,4).map(({id,title,description,price,category,image})=>(
                <Product key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        category={category}
                        image={image}
                        />
            ))}
            <div className="col-span-full items-center content-center">
                <img className="lg:ml-40" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Jupiter_21/Wave1/Newlaunches/AllHeaders/V1/AW-PC.jpg"/> 
            </div>
          
            <div className="md:col-span-2">
            {products.slice(4,5).map(({id,title,description,price,category,image})=>(
                <Product  key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        category={category}
                        image={image}
                        />
            ))}
            </div>
         

            {products.slice(5,products.length).map(({id,title,description,price,category,image})=>(
                <Product key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        category={category}
                        image={image}
                        />
            ))}
        </div>
    )
}

export default ProductFeed
