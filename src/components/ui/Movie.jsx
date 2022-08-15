import React from 'react';
import noPosterImg from "../../assets/NoPosterAvailable.jpg"
import Rating from './Rating';
import { useNavigate } from 'react-router-dom'
const Movie = ({movie}) => {
    const posterPath = `https://image.tmdb.org/t/p/original/`
    let navigate = useNavigate();
    return (
        <div className='movie'>
            <>
                <figure className="movie__img--wrapper">
                    {movie.poster_path ? 
                    (
                        <img 
                            src={posterPath + movie.poster_path} 
                            alt="" 
                            className='movie__img cursor'
                            onClick={() => navigate(`/movie/${movie.id}`)}
                        />
                    ) : (
                        <img src={noPosterImg} alt="" className='movie__img'/>
                    )}
                    <div className='movie__rating'>
                        <Rating rating={movie.vote_average}/>
                    </div>
                </figure>
                <div className='movie__title'>
                    {movie.title}
                </div>

            </>
        </div>
    );
}

export default Movie;
