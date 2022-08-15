import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MovieLogo from '../assets/MovieAPI-1.png'

const Nav = () => {
    function openMenu() {
        document.body.classList += " menu--open"
    }
    
    function closeMenu() {
        document.body.classList.remove("menu--open")
    }
    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                <img src={MovieLogo} alt="" className='logo'/>
                </Link>
                <ul className='nav__links'>
                    <li className='nav__list'>
                        <Link to="/" className='nav__link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav__list'>
                        <Link to="/genres" className='nav__link'>
                            Movies
                        </Link>
                    </li>
                    <li className='nav__list'>
                        <a href="https://freddieb12345.github.io/" className='nav__link' target="_blank">
                            Contact
                        </a>
                    </li>
                    <li className='nav__list'>
                        <Link to="/" className='nav__link'>
                            Search
                        </Link>
                    </li>
                    <button className='btn__menu' onClick={openMenu}>
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </button>
                </ul>
                <div className='menu__backdrop'>
                    <button className='btn__menu btn__menu--close' onClick={closeMenu}>
                        <FontAwesomeIcon icon="fa-solid fa-x" />
                    </button>
                    <ul className='menu__links'>
                        <li className='menu__list'>
                            <Link to="/" className='menu__link' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='menu__list'>
                            <Link to="/genres" className='menu__link' onClick={closeMenu}>
                                Movies
                            </Link>
                        </li>
                        <li className='menu__list'>
                            <a href="https://freddieb12345.github.io/" className='menu__link' target="_blank">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
