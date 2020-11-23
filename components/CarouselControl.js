import React from 'react'

export default function CarouselControl(props) {

    const handleChange = () => {
        props.type == "next" ? 
        props.onSelectedChange(props.selected + 1) :
        props.onSelectedChange(props.selected - 1)
    }

    return(
        <a
            className={`carousel-overlay carousel-control-${props.type.toLowerCase()} control ${props.show ? "" : "fade-out"}`} 
            role="button" 
            // data-slide={props.type.toLowerCase()} 
            onClick={ handleChange }
        >
            <span className={`carousel-control-${props.type.toLowerCase()}-icon`} aria-hidden="true"></span>
            <span className="sr-only">{props.type}</span>
        </a>
    )
}