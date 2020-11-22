import React, { useState, useEffect } from 'react'

export default function Butt(props) {

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    useEffect(() => {
        const onResize = e => {
            setWindowHeight(window.innerHeight)
        };

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("scroll", onResize);
    }, [windowHeight])

    return(
        <div className="butt" style={{ height: `${windowHeight/2 - 192}px` }}></div>
    )
}