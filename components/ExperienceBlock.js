import React, { useEffect, useState } from 'react'
import Experience from './Experience'
import experienceData from '../data/experienceData'
import Block from './Block';

export default function ExperienceBlock(props) {

    const [activeSection, setActiveSection] = useState(0);

    return (
        <Block name="experience">
            <nav className="nav flex-column section-nav">
                { experienceData.map((section, index) => 
                    <li className={"nav-item section-nav-item " + (activeSection == index ? "active-nav-item" : "")} key={section.shorthand}>
                        <a className="nav-link section-link" href={'#'+section.shorthand} onClick={() => setActiveSection(index)}>{section.name}</a>
                    </li>
                ) }
            </nav>
            <div className="togglebox">
                { experienceData.map((section, index) => 
                    <Experience 
                        section={section}
                        key={section.shorthand}
                        isActive={activeSection == index}/>
                ) }
            </div>
        </Block>
    )
}