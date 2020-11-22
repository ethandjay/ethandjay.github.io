import React from 'react'
import contactImages from '../img/contact/*.png'

export default function ContactCell(props) {

    return(
        <div className="col contact-cell">
            <a target="_blank" href={props.link}>
                <img className="contact-img" src={contactImages[props.name]} alt={props.name}/>
            </a>
        </div>
    )
}