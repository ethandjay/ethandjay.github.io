import React, { useState, useRef } from 'react'

export default function Map(props) {

    const [showMap, setShowMap] = useState(false)
    const [mapData, setMapData] = useState({
        locations: [
            {lat: 35.456481, lng: -112.169454},
            {lat: 31.7666771, lng: 35.1526975},
            {lat: 9.4047389, lng: -84.1606367},
            {lat: 29.965577, lng: 35.02962},
            {lat: 36.0529925, lng: -112.1409521},
            {lat: 9.3814053, lng: -84.134413}
        ], 
        zoom: [10, 12, 15, 13, 14, 15]
    })
    const [map, setMap] = useState()

    const initMap = function (image_num) {
        setMap(new google.maps.Map(mapShell.current, {
            center: mapData.locations[image_num],
            zoom: mapData.zoom[image_num]
        }));
    }

    const mapShell = useRef()
    const handleWhereClick = () => {
        setShowMap(!showMap)
        resolveMap()
        props.onControlChange(!props.showControls)
    }
    const resolveMap = () => {
        if (mapShell.current.children.length == 0) {
            initMap(props.selected)
        } else {
            map.setCenter(mapData.locations[props.selected]);
	        map.setZoom(mapData.zoom[props.selected]);
        }
    }
    // var currPicID = $('.carousel-item.active').attr('id').slice(-1);
	// if (mapShell.children.length == 0){
	// 	initMap(currPicID);
	// } else {
	// 	map.setCenter(locations[currPicID]);
	// 	map.setZoom(zoom[currPicID]);
	// }

    return(
        <div className={`map-overlay`}>
            <div onClick={handleWhereClick} className={`carousel-overlay where ${props.showOverlays ? "" : "fade-out" }`} >
                <h3>{ showMap ? "Go back to image" :
                                    "Where was this taken?"
                }</h3>
            </div>
            <div id="map-shell" className={`map-shell ${showMap ? "" : "hide-map"}`} ref={mapShell}></div>
        </div>
    )
}