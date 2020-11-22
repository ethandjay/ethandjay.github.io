import React, { useState, useEffect, useRef, useContext } from 'react'
import { AppContext } from "./AppContext"
import _ from 'lodash'
import { useDebouncedEffect } from './useDebouncedEffect'

export default function Block(props) {

    const sectionNode = useRef()

    const [elemOffsetFromMid, setElemOffsetFromMid] = useState(0)
    const [state, setState] = useContext(AppContext)
    const [opacity, setOpacity] = useState(1)

    // Set distance from midpoint on scroll event
    const throttledScrollEffects = useRef(_.throttle(() => {
        const onScroll = e => {
            // var dist = calculateDistFromCenter()
            // console.log(state)
            // console.log()
            // console.log(setState({
            //     ...state,
            //     [props.name]: dist
            // }))
            // console.log(state)
            // setElemOffsetFromMid(dist)
            if (window.innerWidth > 1020) {
                var nodeOffsetTop = sectionNode.current.offsetTop
                var windowOffsetTop = document.documentElement.scrollTop
                var windowHeight = window.innerHeight
                var sectionHeight = sectionNode.current.clientHeight
                var newOpacity = 1.1 - 1.1*Math.abs((windowHeight/2 - (nodeOffsetTop - windowOffsetTop) - sectionHeight/2) / (windowHeight/2 + 800));
                setOpacity(newOpacity)
            } else {
                setOpacity(1)
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, 500))
    useEffect(() => throttledScrollEffects.current(opacity), [opacity])

    // Calculate section distance from window vertical midpoint
    const calculateDistFromCenter = () => {
        var nodeOffsetTop = sectionNode.current.offsetTop
        var windowOffsetTop = document.documentElement.scrollTop
        var windowHeight = window.innerHeight
        var sectionHeight = sectionNode.current.clientHeight
        var elemOffsetFromMid = Math.abs(nodeOffsetTop - windowOffsetTop - windowHeight/2 + sectionHeight/2)
        return elemOffsetFromMid
    }

    return(
        <div className="section" id={props.name} ref={sectionNode} style={{ opacity: opacity }}>
            {props.children}
        </div>
    )
}