import React from 'react'

export default function CarouselControl(props) {
    return(
        <a
            className={`carousel-overlay carousel-control-${props.type.toLowerCase()} control ${props.show ? "" : "fade-out"}`} 
            href="#carouselControls" 
            role="button" 
            data-slide={props.type.toLowerCase()} 
        >
            <span className={`carousel-control-${props.type.toLowerCase()}-icon`} aria-hidden="true"></span>
            <span className="sr-only">{props.type}</span>
        </a>
    )
}