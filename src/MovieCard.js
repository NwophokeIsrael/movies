// src/MovieCard.js
import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
    const divStyle = {
        fontWeight: 'bolder',
        fontFamily: 'sans serif',
    };
    
    return (
        <div className="movie-card">
            <div className="movies">
            <img className='image' src={posterURL} alt={title} />
            <h2 style={divStyle}>{title}</h2>
            <p>{description}</p>
            <p>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;
