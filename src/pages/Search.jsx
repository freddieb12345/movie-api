import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/ui/Movie';
import NoResultsImg from '../assets/undraw_questions.svg'

const Search = ({userSearch}) => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [noResults, setNoResults] = useState();
    const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8";
    const filmSearch ="harry potter";
    
    async function getMovies() {
        setLoading(true)
        const { data: {results} } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${userSearch || filmSearch}`)
        setMovies(results)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    function filterMovies(filter) {
        console.log(filter)
        if(filter === 'OLDEST') {
            setMovies(movies.slice().sort((a, b) => Date.parse(new Date(a.release_date)) - Date.parse(new Date(b.release_date))))
        }
        if (filter === 'MOST_RECENT') {
            setMovies(movies.slice().sort((a, b) => Date.parse(new Date(b.release_date)) - Date.parse(new Date(a.release_date))))
        }
        if (filter === 'RATING') {
            setMovies(movies.slice().sort((a, b) => (b.vote_average) - (a.vote_average)))
        }
        if (filter === 'RATING_NUMBER') {
            setMovies(movies.slice().sort((a, b) => (b.vote_count) - (a.vote_count)))
        }
    }

    useEffect(() => {
        console.log(movies)
    }, [movies])

    useEffect(() => {
        console.log(loading)
    },[loading])

    useEffect(() => {
        if(userSearch) {
            setNoResults(false)
            getMovies()
        }else {
            setNoResults(true)
        }
        // eslint-disable-next-line
    }, [])
    
    return (
        <div id='movies__body'>
            <main id='movies__main'>
                <section className='results__section'>
                    {!noResults ? (<div className="movies__container">
                        <div className="row">
                            <div className="movies__header">
                                <h2 className='section__title'>
                                    All Books
                                </h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="OLDEST">Oldest</option>
                                    <option value="MOST_RECENT">Most Recent</option>
                                    <option value="RATING">Rating</option>
                                    <option value="RATING_NUMBER">Number of Ratings</option>
                                </select>
                            </div>
                            <div className='movies'>
                                {loading ? 
                                (
                                    new Array(10).fill(0).map((_,index) => (
                                        <div className='movie' key={index}>
                                            <div className="movie__img--skeleton"></div>
                                            <div className="skeleton movie__title--skeleton"></div>
                                            <div className="skeleton movie__rating--skeleton"></div>
                                            <div className="skeleton movie__price--skeleton"></div>
                                        </div>
                                    ))
                                ) : (
                                    // new Array(10).fill(0).map((_, index) => ( <Movie key={index}/>))
                                    movies.map((movie) => (<Movie key={movie.id} movie={movie}/>))
                                )}
                            </div>
                        </div>
                    </div>) : (
                        <figure className='no__results--figure'>
                            <h1>No Results available</h1>
                            <img src={NoResultsImg} alt="" className='no__results--img'/>
                        </figure>
                    )}
                </section>
            </main>
        </div>
    );
}

export default Search;
