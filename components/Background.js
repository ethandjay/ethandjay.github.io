import React, { useState, useEffect, useRef } from 'react'
import Map from './Map'
import CarouselIndicator from './CarouselIndicator'
import CarouselImage from './CarouselImage';
import CarouselControl from './CarouselControl';
import _ from 'lodash'

export default function Background(props) {
    //const [selectedImg, setSelectedImg] = useState(0)
    const images =  [
		"highway",
		"chairs",
		"roof",
		"wires",
		"blur",
		"rocks",
    ];
    
    const [showOverlays, setShowOverlays] = useState(true)
    const [parallaxFactor, setParallaxFactor] = useState(0)
    const throttledScrollEffects = useRef(_.throttle(() => {

        const onScroll = e => {
            var scrollTop = document.documentElement.scrollTop
            var docHeight = window.document.body.offsetHeight
            setShowOverlays(scrollTop < 50)
            setParallaxFactor(9 - (1.5*((docHeight - scrollTop) / docHeight)-.5)*9)
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, 500));
    useEffect(() => throttledScrollEffects.current(showOverlays), [showOverlays])

    // const throttledScrollEffects = useRef(_.throttle(() => {
    //     const onScroll = e => {
    //         // var dist = calculateDistFromCenter()
    //         // console.log(state)
    //         // console.log()
    //         // console.log(setState({
    //         //     ...state,
    //         //     [props.name]: dist
    //         // }))
    //         // console.log(state)
    //         // setElemOffsetFromMid(dist)
    //         if (window.innerWidth > 1020) {
    //             var nodeOffsetTop = sectionNode.current.offsetTop
    //             var windowOffsetTop = document.documentElement.scrollTop
    //             var windowHeight = window.innerHeight
    //             var sectionHeight = sectionNode.current.clientHeight
    //             var newOpacity = 1.1 - 1.1*Math.abs((windowHeight/2 - (nodeOffsetTop - windowOffsetTop) - sectionHeight/2) / (windowHeight/2 + 800));
    //             setOpacity(newOpacity)
    //         } else {
    //             setOpacity(1)
    //         }
    //     };

    //     window.addEventListener("scroll", onScroll);

    //     return () => window.removeEventListener("scroll", onScroll);
    // }, 500))
    // useEffect(() => throttledScrollEffects.current(opacity), [opacity])


    return (
        <div style={{ position: "fixed" }}>
            <Map />
            <div id="carouselControls" className="carousel slide carousel-fade" data-ride="carousel" data-interval="false" style={{ pointerEvents: "auto" }}>
                <ol className={`carousel-overlay carousel-indicators control ${showOverlays ? "" : "fade-out"} `} >
                    {[...Array(6)].map((x, i) =>
                        <CarouselIndicator num={i} selected={0==i} key={i}/>
                    )}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {images.map((name, index) => 
                        <CarouselImage name={name} num={index} selected={0==index} key={index} parallaxFactor={parallaxFactor} />
                    )}
                </div>
                <CarouselControl type="prev" show={showOverlays}/>
                <CarouselControl type="next" show={showOverlays}/>
                <div className={`carousel-overlay where ${showOverlays ? "" : "fade-out" }`} >
                    <h3>Where was this taken?</h3>
                </div>
            </div>
        </div>
    )
}