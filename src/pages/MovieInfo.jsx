import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Rating from '../components/ui/Rating';

const MovieInfo = () => {
    const { id } = useParams()

    const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8";
    const [movie, setMovie] = useState([]);
    const [gotMovie, setGotMovie] = useState(false);
    const [gotMovieGenres, setGotMovieGenres] = useState(false)
    const [genreNames, setGenreNames] = useState();
    
    async function getMovies(id) {
        setGotMovie(false);
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        // console.log(data)
        setMovie(data);
        setGotMovie(true);
    }

    if(gotMovie && !gotMovieGenres) {
        getMovieGenresById()
    }

    async function getMovieGenresById() {
        const {data: {genres}} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        console.log(genres)
        let matchingGenres = []
        // eslint-disable-next-line
        movie.genres.map((movieGenre) => {
            // eslint-disable-next-line
            genres.map((genre) => {
                if(JSON.stringify(genre) === JSON.stringify(movieGenre)) {
                    matchingGenres.push(genre)
                    return matchingGenres
                }
            })
        })
        setGenreNames(matchingGenres)
        setGotMovieGenres(true)
    }

    useEffect(() => {
        getMovies(id)
        formatDate()
        // eslint-disable-next-line
    }, [])

    const posterPath = `https://image.tmdb.org/t/p/original/`  

    function formatDate(date) {
        return date ? (date.split("-").reverse().join("/")) : ("n/a")
    }

    return (
        <>
        {gotMovie && gotMovieGenres ? (
            <div id='movies__body'>
                <main id='movies__main' className='movies__main--background' style={{ backgroundImage: `url(${posterPath + movie.backdrop_path})` }}>
                    <div className='movies__container'>
                        <div className='row'>
                            <div className='movie__selected--top'>
                                <Link to="/genres" className='movie__link'>
                                    <FontAwesomeIcon icon="arrow-left"/>
                                </Link>
                                <Link to="/genres" className='movie__link'>
                                    <h2 className='movie__selected--title--top'>
                                        Movies
                                    </h2>
                                </Link>
                            </div>
                            <div className="movie__selected">
                                <figure className="movie__selected--figure">
                                    <img src={posterPath + movie.poster_path} alt="" className='movie__selected--img'/>
                                </figure>
                                <div className="movie__selected--description">
                                    <div className='movie__info--row'>
                                        <h2 className="movie__selected--title">{movie.title}</h2>
                                    
                                        <div className='movie__info--rating'>
                                            <Rating rating={movie.vote_average} className="movie__info--rating"/>
                                        </div>
                                    </div>
                                    <div className="movie__summary">
                                        <h4 className="movie__selected--title">Release date: {formatDate(movie.release_date)}</h4>
                                        <div className='movie__selected--genres'>
                                            <b>Genres: &nbsp;</b>
                                            {genreNames.map((genre) => <div className='genre__name' key={genre.id}>{genre.name},</div>)}
                                        </div>
                                        <h3 className='movie__summary--title'>
                                            Summary
                                        </h3>
                                        <p className="movie__summary--para">
                                            {movie.overview}
                                        </p>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        ) : (
            <div id='movies__body'>
                <main id='movies__main' className='movies__main--background'>
                    <div className='movies__container'>
                        <div className='row'>
                            <div className='movie__selected--top'>
                                <Link to="/genres" className='movie__link'>
                                    <FontAwesomeIcon icon="arrow-left"/>
                                </Link>
                                <Link to="/genres" className='movie__link'>
                                    <h2 className='movie__selected--title--top'>
                                        Movies
                                    </h2>
                                </Link>
                            </div>
                            <div className="movie__selected">
                                <figure className="movie__selected--figure">
                                    <img src="https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" alt="" className='movie__selected--img'/>
                                </figure>
                                <div className="movie__selected--description">
                                    <h2 className="movie__selected--title">movie title</h2>
                                    {/* <Rating rating={movie.rating}/> */}
                                    <div className="movie__summary">
                                        <h3 className='movie__summary--title'>
                                            Summary
                                        </h3>
                                        <p className="movie__summary--para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla quae amet iste, eum doloremque fuga, minima pariatur similique voluptates ducimus. Harum temporibus ex a ullam voluptatem quae repellat iste?
                                        </p>
                                        <p className="movie__summary--para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla quae amet iste, eum doloremque fuga, minima pariatur similique voluptates ducimus. Harum temporibus ex a ullam voluptatem quae repellat iste?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )}
        </>
        
    );
}

export default MovieInfo;
