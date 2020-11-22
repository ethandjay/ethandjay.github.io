import React from 'react'

export default function CarouselIndicator(props) {
    return(
        <li data-target="#carouselControls" data-slide-to={props.num} className={props.selected ? "active" : ""}></li>
    )
}