import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicator={false}
            showThumbs={false}
            interval={5000}
            className="w-full"
            > 
            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/61ocm7X057L._SX1500_.jpg"  />
            </div>

            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/5138i4uOXxL._SX3000_.jpg"  />

            </div>

            <div>
                <img loading="lazy" src="https://m.media-amazon.com/images/I/71Mda8Bc3iL._SX3000_.jpg"  />
            </div>
            </Carousel>
        </div>
    )
}

export default Banner
