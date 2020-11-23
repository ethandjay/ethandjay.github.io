import React from 'react'

export default function CarouselIndicator(props) {
    return(
        <li data-target="#carouselControls" onClick={() => props.onSelectedChange(props.num)} className={props.selected ? "active" : ""}></li>
    )
}