import React, { useState, useEffect, useRef } from 'react'
import Map from './Map'
import CarouselIndicator from './CarouselIndicator'
import CarouselImage from './CarouselImage';
import CarouselControl from './CarouselControl';
import _ from 'lodash'

export default function Background(props) {

    const images =  [
		"highway",
		"chairs",
		"roof",
		"wires",
		"blur",
		"rocks",
    ];
    const [selectedImg, setSelectedImg] = useState(0)
    const handleSelectedImgChange = (newSelectedImg) => {
        var fixedSelected = newSelectedImg
        if (newSelectedImg >= images.length) fixedSelected = images.length - 1
        else if (newSelectedImg < 0) fixedSelected = 0
        setSelectedImg(fixedSelected)
    }

    const [showControls, setShowControls] = useState(true)
    const handleControlChange = (controls) => {
        setShowControls(controls)
    }
    const [showOverlays, setShowOverlays] = useState(true)
    const throttledScrollEffects = useRef(_.throttle(() => {

        const onScroll = e => {
            var scrollTop = document.documentElement.scrollTop
            setShowOverlays(scrollTop < 50)
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, 500));
    useEffect(() => throttledScrollEffects.current(showOverlays), [showOverlays])

    return (
        <div style={{ position: "fixed" }}>
            <Map showControls={showControls} showOverlays={showOverlays} onControlChange={handleControlChange} selected={selectedImg} />
            <div id="carouselControls" className="carousel slide carousel-fade" data-ride="carousel" data-interval="false" style={{ pointerEvents: "auto" }}>
                <ol className={`carousel-overlay carousel-indicators control ${showOverlays ? "" : "fade-out"} `} >
                    {[...Array(6)].map((x, i) =>
                        <CarouselIndicator num={i} selected={selectedImg} key={i} onSelectedChange={handleSelectedImgChange}/>
                    )}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {images.map((name, index) => 
                        <CarouselImage name={name} num={index} selected={selectedImg} key={index} id={index} />
                    )}
                </div>
                <CarouselControl type="prev" show={showOverlays} selected={selectedImg} onSelectedChange={handleSelectedImgChange}/>
                <CarouselControl type="next" show={showOverlays} selected={selectedImg} onSelectedChange={handleSelectedImgChange}/>
            </div>
        </div>
    )
}