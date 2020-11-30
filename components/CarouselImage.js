import React, { useState, useEffect } from 'react'
import images from '../img/carousel/*.jpg'

export default function CarouselImage(props) { 
    const [imageSource, setImageSource] = useState(`${images[props.name + "-sm"]}`)
    const [isLoading, setIsLoading] = useState(true)

    // Lazy-load full res images
    useEffect(() => {
        var img = new Image();
        img.onload = function() {
            setImageSource(`${images[props.name]}`)
            setIsLoading(false)
        }
        img.src = `${images[props.name]}`
        console.log(images)
    },[])

    return (
        <div className={`carousel-item ${props.selected == props.id ? "active" : ""}`} id={`citem${props.num}`}>
            <img 
                src={imageSource}
                className={`carousel-img d-block img-fluid overfit ${isLoading ? "loading" : ""}`}
                alt="sixth" 
                id={`cimg-${props.num}`}
                // style={{ transform: `translateY(-${props.parallaxFactor}vh)`}}
            />
        </div>
    )
}