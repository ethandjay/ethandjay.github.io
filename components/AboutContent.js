import React from 'react'
import ContactCell from "./ContactCell";
import * as resume from "url:../doc/EthanJaynesResume.pdf";

export default function AboutContent(props) {

    return(
        <div className="section-text section-col">
            <h1>About</h1>
            <p>
                Senior Software Engineer at Visa and WashU Computer Science graduate. Avid music junkie interested in using innovative technology to build ethical and creative solutions to problems. 
            </p>
            <p>
                Want to know more? Check out my <a target="_blank" href="https://www.linkedin.com/in/ethanjaynes1/">LinkedIn</a> or <a target="_blank" href={resume}>resume</a>.
            </p>
            <div className="row contact-grid">
                <ContactCell name="email" link="mailto:ethandjay@gmail.com"/>
                <ContactCell name="linkedin" link="https://www.linkedin.com/in/ethanjaynes1/"/>
                <ContactCell name="github" link="https://github.com/ethandjay/"/>
                <ContactCell name="twitter" link="https://twitter.com/ethan_jaynes"/>
            </div>
        </div>
    )
}