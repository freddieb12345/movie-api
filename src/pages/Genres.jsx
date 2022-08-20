import React from 'react';
import "../styles/slider.css"
import Slider from '../components/Slider';
import requests from '../js/requests'

const Genres = () => {
    return (
        <div>
            <Slider title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
            <Slider title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Slider title="Action" fetchUrl={requests.fetchActionMovies}/>
            <Slider title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
            <Slider title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
            <Slider title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
            <Slider title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}

export default Genres;
