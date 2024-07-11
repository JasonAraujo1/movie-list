// components/MovieList.js
import React from 'react';
import MovieCard from './MovieCards.jsx';

const MovieList = ({ movies }) => {
    return (
        <div id="main" className="">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
