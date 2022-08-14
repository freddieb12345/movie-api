import React, {useEffect, useState} from 'react';
import axios from 'axios'
import "../styles/slider.css"
import Slider from '../components/Slider';

const Genres = () => {
    const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8";
    const [genresData, setGenresData] = useState([]);
    const [movies, setMovies] = useState([])
    let moviesArray = []
    async function getMovies(genre) { 
        const {data: {results}} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`)
        moviesArray.push(results)
        setTimeout(() => {
            setMovies(moviesArray)
        },2000)
    }

    useEffect(() => {
        async function getMovieGenres() {
            const {data: {genres}} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            setGenresData(genres.map((genre) => (genre.id)))
        }
        getMovieGenres()
    }, [])

    useEffect(() => {
        if(genresData.length > 0) {
            genresData.map((genre) => getMovies(genre))
        }
    }, [genresData])

    useEffect(() => {
        console.log(movies)
    }, [movies])
    
    return (
        <>
            {movies.map((movie,index) => <div key={index}>hello</div>)}
        </>
    );
}

export default Genres;
