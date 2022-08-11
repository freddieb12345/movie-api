import React, { useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8"
    
    async function getMovies() {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
        console.log(response)
    }

    useEffect(() => {
        getMovies()
    }, [])
    
    return (
        <div>
            Hello
        </div>
    );
}

export default Search;
