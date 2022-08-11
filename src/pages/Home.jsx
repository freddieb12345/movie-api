import React, { useState } from 'react';
import UndrawImage from '../assets/undraw_movie.svg'

const Home = () => {
    const [userSearch, setUserSearch] = useState()

    function search() {
        console.log(userSearch)
    }
    return (
        <section id='home'>
            <header>
                <div className='header__container'>
                    <div className='header__description'>
                        <h1 className='homepage__header'>The UK's #1 Movie Streaming Service</h1>
                        <h2>Find all your favorite <b className='red'>Movies</b> using <b className='red'>MovieAPI</b></h2>
                    </div>
                    <div className='input__wrapper'>
                        <input 
                            type="text"
                            name="" 
                            id="" 
                            placeholder='Search for your favorite film here...' 
                            className='search__input' 
                            onChange={(event) =>setUserSearch(event.target.value)}/>
                        <button className='search__button' onClick={() => search()}>Search</button>
                    </div>
                    <figure>
                            <img src={UndrawImage} alt="" className='homescreen__logo'/>
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Home;
