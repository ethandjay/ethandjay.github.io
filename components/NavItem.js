import React from 'react'
import Scroll from 'react-scroll'

export default function NavItem(props) {
    const lowerName = props.name.toLowerCase()
    const autoScroll = (e) => {
        e.preventDefault()
        history.pushState(null, null, `#${lowerName}`)
        const anchor = document.querySelector(`#${lowerName}`)
        anchor.scrollIntoView({ behavior: "smooth", block: "center"})
    }

    return(
        <li className={`nav-item nav-item-onpage ${props.hovered ? "hovered" : ""}`} onClick={(e) => autoScroll(e)}>
            <a className="nav-link sidebar" href={`#${lowerName}`}>{props.name}</a>
        </li>
    )
}