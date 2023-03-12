import React from 'react';

export default function Card(props) {
    return (
        <div className='card-container'>
                <img class = 'card--img' src={props.coverimg}/>
            <div className = 'card--stats'>
                <span class='card--marker'><i class="fas fa-map-marker-alt"></i></span>
                <span>{props.location.location_name}</span>
                <span><a href={props.location.map} class='card--map' target='_blank'>View on Google Maps</a></span>
            <h2>{props.title}</h2>
            <b>{props.duration}</b>
            <p>{props.description}</p>
            </div>
        </div>
    )
}