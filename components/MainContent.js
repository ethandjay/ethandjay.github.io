import React from 'react'
import ExperienceBlock from "./ExperienceBlock";
import AboutBlock from './AboutBlock'
import Background from './Background'
import Butt from './Butt'

export default function MainContent(props) {

    return(
        <div className="main-content">
            <Background />
            <div style={{ position: "relative", maxWidth: "100vw" }}>
                <div className="bumper"></div>
                <AboutBlock />
                <ExperienceBlock />
                <Butt />
            </div>
        </div>
    )
}