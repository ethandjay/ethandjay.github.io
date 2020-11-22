import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import MediaReview from './MediaReview'

export default function Role(props) {
    const description = props.role.descriptionList.map((descriptor, index) =>
        <li key={index}>{ReactHtmlParser(descriptor)}</li>
    )

    return (
        <div className={`col section-col ${props.extraClasses}`}>
            <h1 className="role-title">{props.role.title}</h1>
            <h3>{ReactHtmlParser(props.role.timespan)}</h3>
            <h2>{props.role.subTitle}</h2>
            <ul>
                {description}
            </ul>
            <MediaReview title={props.role.title} />
        </div>
    );
}