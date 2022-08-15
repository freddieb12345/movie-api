import React, {useEffect, useState} from 'react';
import axios from 'axios'
import "../styles/slider.css"
import Slider from '../components/Slider';

const Genres = () => {
    const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8";
    const [genresData, setGenresData] = useState([]);

    useEffect(() => {
        async function getMovieGenres() {
            const {data: {genres}} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            setGenresData(genres.map((genre) => (genre)))
        }
        getMovieGenres()
    }, [])

    return (
        <>
            {genresData.map((genre) => <Slider key={genre.id} genreId={genre.id} genreName={genre.name}/>)}
        </>
    );
}

export default Genres;
