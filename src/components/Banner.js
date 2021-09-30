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
                <img loading="lazy" height={400} src="./image1.gif"  />
            </div>

            <div>
                <img loading="lazy"  height={400} src="./image2.jpg"  />

            </div>

            <div>
                <img loading="lazy" height={400} src="./image3.jpg"  />
            </div>

            <div>
                <img loading="lazy" height={400} src="./image4.jpg"  />
            </div>
            </Carousel>
        </div>
    )
}

export default Banner
