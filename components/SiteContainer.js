import React from 'react'
import MainContent from './MainContent'
import Left from './Left'

export default function SiteContainer(props) {
    return(
        <div style={{
            display: "flex"
        }}>
            <Left />
            <MainContent />
        </div>
    )
}