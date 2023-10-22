// src/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <MovieCard key={index} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;
