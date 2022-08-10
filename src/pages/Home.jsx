import React from 'react';
import UndrawImage from '../assets/undraw_movie.svg'

const Home = () => {
    return (
        <section>
            <header>
                <div className='header__container'>
                    <div className='header__description'>
                        <h1>The UK's #1 Movie Streaming Service</h1>
                        <h2>Find all your favorite <b className='red'>Movies</b> using <b className='red'>MovieAPI</b></h2>
                        <figure>
                            <img src={UndrawImage} alt="" className='homescreen__logo'/>
                            <div className='input__wrapper'>
                                <input type="text" name="" id="" placeholder='Search for your favorite film here' className='search__input'/>
                            </div>
                        </figure>
                        
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Home;
