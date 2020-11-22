import React from 'react'
import Nameplate from './Nameplate'
import LeftNavMenu from './LeftNavMenu'

export default function Left(props) {

    return (
        <div className="lefty" style={{
            flexShrink: "0",
            minHeight: "100vh"
        }}>
            <div style={{ 
                position: "sticky",
                float: "left",
                top: "0",
                verticalAlign: "top",
                width: "100%"
            }}>
                <div className="nav-text text-center">
                    <Nameplate />
                    <LeftNavMenu />
                </div>
            </div>
        </div>
    )
}