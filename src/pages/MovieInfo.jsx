import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Rating from '../components/ui/Rating';
import formatDate from '../js/formatDate';
import '../styles/movieInfo.css'
import { API_KEY } from '../js/requests';
const posterPath = `https://image.tmdb.org/t/p/original/` 

const MovieInfo = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([]);
    const [gotMovie, setGotMovie] = useState(false);
    const [gotMovieGenres, setGotMovieGenres] = useState(false)
    const [genreNames, setGenreNames] = useState();
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        async function getMovie(id) {
            setGotMovie(false);
            const {data} = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            );
            setMovie(data);
            setTimeout(() => {
                setGotMovie(true);
            }, 500)
        }
        getMovie(id)
    }, [id])

    if(gotMovie && !gotMovieGenres) {
        async function getMovieGenresById() {
            const {data: {genres}} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
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
        getMovieGenresById()
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
                                            <Rating rating={movie.vote_average}/>
                                        </div>
                                    </div>
                                    <div className="movie__summary">
                                        <h4 className="movie__selected--title">Release date: {formatDate(movie.release_date)}</h4>
                                        <div className='movie__selected--genres'>
                                            <b>Genres: &nbsp;</b>
                                            {genreNames.map((genre) => <div className='genre__name' key={genre.id}>{genre.name}</div>)}
                                        </div>
                                        <h3 className='movie__summary--title'>
                                            Summary
                                        </h3>
                                        <p className="movie__summary--para">
                                            {movie.overview}
                                        </p>
                                        <button className='btn'>
                                            <a href={`https://www.imdb.com/title/${movie.imdb_id}/?ref_=fn_al_tt_1`} className='imdb__link' target="_blank" rel="noreferrer">IMDB Link</a>
                                        </button>
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
                                <div className="movie__selected--figure-skeleton"></div>
                                <div className="movie__selected--description-skeleton">
                                    <div className="movie__selected--title-skeleton"></div>
                                    <div className='movie__summary--title-skeleton'></div>
                                    <div className="movie__summary--para-skeleton"></div>
                                    <div className="movie__summary--para-skeleton"></div>
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
