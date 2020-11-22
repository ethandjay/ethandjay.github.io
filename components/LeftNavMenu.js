import React, { useEffect, useState, useContext } from 'react'
import NavItem from './NavItem'
import { AppContext } from './AppContext'

export default function LeftNavMenu(props) {
    const sections = ["About", "Experience"]
    const [state, setState] = useContext(AppContext)
    const [activeSection, setActiveSection] = useState();
    useEffect(() => {
        var minValue = Number.MAX_VALUE
        var minName = ""
        for (var section of sections) {
            var cleanSection = section.toLowerCase()
            if (state[cleanSection] < minValue) {
                minValue = state[cleanSection]
                minName = section
            }
        }
        setActiveSection(minName)
    }, [state])
    return(
        <nav className="nav flex-column">
            {sections.map((section) => <NavItem name={section} key={section} hovered={ activeSection == section } />)}
        </nav>
    )
}