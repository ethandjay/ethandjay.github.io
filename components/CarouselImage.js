import React from 'react'

export default function CarouselImage(props) { 
    return (
        <div className={`carousel-item ${props.selected ? "active" : ""}`} id={`citem${props.num}`}>
            <img 
                src={"img"}
                className="carousel-img d-block img-fluid overfit" 
                alt="sixth" 
                id={`cimg-${props.num}`}
                // style={{ transform: `translateY(-${props.parallaxFactor}vh)`}}
            />
        </div>
    )
}