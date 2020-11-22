import React from 'react'
import Role from './Role'

export default function Experience(props) {

    return (
        <div className={"toggleable " + (props.isActive ? "active-content" : "")} id={props.section.shorthand}>
            <div className="section-text">
                <div className="row row-wrap">
                    { props.section.roles.map((role, index) => 
                        <Role 
                        role={role} 
                        key={role.title} 
                        extraClasses={props.section.roleExtraClasses[index]} 

                        />
                    )}
                </div>
            </div>
        </div>
    )
}