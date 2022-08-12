import React from 'react';
import UndrawImage from '../assets/undraw_movie.svg'
import { useNavigate} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = ({setUserSearch}) => {
    let navigate = useNavigate();
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
                            onChange={(event) =>setUserSearch(event.target.value)}
                            onKeyPress={(event => {event.key === 'Enter' && navigate('/search')})}/>
                        <button className='search__button' onClick={() => navigate('/search')}>Search</button>
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
