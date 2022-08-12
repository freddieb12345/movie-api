import React, {useState, useEffect} from 'react';
import Slider from '../components/NetflixSlider'
import axios from 'axios'

const Genres = () => {
    const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8";
    const [genres, setGenres] = useState([]);
    
    async function getMovieGenres() {
        const {data: {genres}} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        console.log(genres)
        setGenres(genres)
    }

    async function getMoviesByGenre() {
        const {data: {results}} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`)
        console.log(results)
    }
    
    useEffect(() => {
        getMovieGenres()
    }, [])

    useEffect(() => {
        console.log(genres)
    }, [genres])

    // getMovieGenres()
    // getMoviesByGenre()
    return (
        <div className="app">
        <Slider>
            <Slider.Item movie="movie1" key="1">item1</Slider.Item>
            <Slider.Item movie="movie1" key="2">item1</Slider.Item>
            <Slider.Item movie="movie1" key="3">item1</Slider.Item>
            <Slider.Item movie="movie1" key="4">item1</Slider.Item>
            <Slider.Item movie="movie1" key="5">item1</Slider.Item>
            <Slider.Item movie="movie1" key="6">item1</Slider.Item>
            <Slider.Item movie="movie1" key="7">item1</Slider.Item>
        </Slider>
      </div>
    );
}

export default Genres;
