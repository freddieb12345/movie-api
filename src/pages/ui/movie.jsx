import React from 'react';

const Movie = () => {
    const isTrue = true
    return (
        <div className='movie'>
            {
                isTrue ? (
                    <>
                        <figure className="movie__img__wrapper">
                            <img src="https://image.tmdb.org/t/p/original/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg" alt="" className='movie__img'/>
                        </figure>
                        <div className='movie__title'>
                            book.title
                        </div>
                    </>
                ) : (
                    <>
                        <div className="movie__img--skeleton"></div>
                        <div className="skeleton movie__title--skeleton"></div>
                        <div className="skeleton movie__rating--skeleton"></div>
                        <div className="skeleton movie__price--skeleton"></div>
                    </>
                )
            }
        </div>
    );
}

export default Movie;
