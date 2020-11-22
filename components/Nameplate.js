import React, { useState } from 'react'

export default function Nameplate(props) {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    return (
        <div className="nameplate" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <div className={`flyer left-flyer ${hovered ? "" : "left-anim"}`} >&lt;/</div>
            <div style={{ margin: "0 auto" }}>Ethan Jaynes</div>
            <div className={`flyer right-flyer ${hovered ? "" : "right-anim"}`} >&gt;</div>
        </div>
    )
}