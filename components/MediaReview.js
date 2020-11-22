import React from 'react'
import crit from '../img/crit.png'
import sweet from '../img/sweet.jpg'
import conform from '../img/conform.jpg'
import pile from '../img/pile.jpg'
import softfangs from '../img/softfangs.jpg'
import elder from '../img/elder.jpg'

export default function MediaReview(props) {

    if (props.title == "AUX Magazine") {
        return (
            <div className="reviews">
                <div className="review-thumb"><a target="_blank" href="https://issuu.com/auxmagazine16/docs/aux2final/8"><img src={crit} className="review-pic" alt="crit"/></a></div>
                <div className="review-thumb"><a target="_blank" href="https://issuu.com/auxmagazine16/docs/aux2final/14"><img src={sweet} className="review-pic" alt="sweet"/></a></div>
                <div className="review-thumb"><a target="_blank" href="https://issuu.com/auxmagazine16/docs/aux-18_final/22"><img src={conform} className="review-pic" alt="conform"/></a></div>
            </div>
        )
    } else if (props.title == "Post-Trash"){
        return (
            <div className="reviews">
                <div className="review-thumb"><a target="_blank" href="http://post-trash.com/news/2016/7/18/pile-youre-better-than-this-album-review"><img src={pile} className="review-pic" alt="pile"/></a></div>
                <div className="review-thumb"><a target="_blank" href="http://post-trash.com/news/2016/8/9/soft-fangs-the-light-album-review"><img src={softfangs} className="review-pic" alt="softfangs"/></a></div>
                <div className="review-thumb"><a target="_blank" href="http://post-trash.com/news/2017/6/30/elder-reflections-of-a-floating-world-album-review"><img src={elder} className="review-pic" alt="elder"/></a></div>
            </div>
        )
    } else {
        return null
    }
}