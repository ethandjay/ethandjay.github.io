import React, { useRef, useContext, useEffect } from 'react'
import { AppContext } from './AppContext'
import Badge from './Badge'
import AboutContent from './AboutContent'
import Block from './Block'

export default function AboutBlock(props) {

    return(
        <Block name="about">
            <Badge />
            <AboutContent />
        </Block>
    )
}