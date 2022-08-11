import React, { useEffect } from 'react';
import axios from 'axios';
import Movie from './ui/movie';

const Search = () => {
    const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8"
    const filmSearch = "fast & furious"
    
    async function getMovies() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filmSearch}`)
        console.log(data)
    }

    useEffect(() => {
        getMovies()
    }, [])
    
    return (
        <div id='movies__body'>
            <main id='movies__main'>
                <section>
                    <div className="movies__container">
                        <div className="row">
                            <div className="movies__header">
                                <h2 className='section__title'>
                                    All Books
                                </h2>
                                <select id="filter" defaultValue="DEFAULT">
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Ascending price</option>
                                    <option value="HIGH_TO_LOW">Descending price</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className='movies'>
                                {new Array(10).fill(0).map((_, index) => ( <Movie/>))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Search;
