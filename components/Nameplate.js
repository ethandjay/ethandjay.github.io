import React, { useState, useEffect } from 'react'

export default function Nameplate(props) {
    const [hovered, setHovered] = useState(true);
    const [fasterAnimation, setFasterAnimation] = useState(false)
    useEffect(() => {
        setTimeout(() => setHovered(false), 2000)
        setTimeout(() => setFasterAnimation(true), 3000)
    }, [])
    return (
        <div className="nameplate" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className={`flyer left-flyer ${hovered ? "" : "left-anim"} ${fasterAnimation ? "faster-animation" : ""}`} >&lt;/</div>
            <div style={{ margin: "0 auto" }}>Ethan Jaynes</div>
            <div className={`flyer right-flyer ${hovered ? "" : "right-anim"} ${fasterAnimation ? "faster-animation" : ""}`} >&gt;</div>
        </div>
    )
}