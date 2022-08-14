// import React, { useEffect, useState } from 'react';
// import axios from 'axios'

// const SliderItem = () => {
//     const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8";
//     const [genresMovies, setGenresMovies] = useState([]);

//     useEffect(() => {
//         async function getMovieByGenre() {
//             const {data: {results}} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`)
//             console.log(results)
//         }
//         getMovieByGenre();
//     }, [])

//     return (
//         <div>
//             <img src="https://via.placeholder.com/210/00FF00?text=1" alt="" />
//         </div>
//     );
// }

// export default SliderItem;
