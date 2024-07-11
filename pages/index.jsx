// pages/index.js
import React, { useState, useEffect } from 'react';
import { APIURL, SEARCHAPI, getMovies } from '../utils/api.jsx';
import MovieList from '../componentes/MovieList.jsx';
import SearchBar from '../componentes/SearchBar.jsx';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMovies(APIURL);
            setMovies(moviesData);
        };

        fetchMovies();
    }, []);

    const handleSearch = async (searchTerm) => {
        const url = searchTerm ? `${SEARCHAPI}${searchTerm}` : APIURL;
        const moviesData = await getMovies(url);
        setMovies(moviesData);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
