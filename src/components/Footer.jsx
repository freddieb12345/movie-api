import React from 'react';
import MovieLogo from '../assets/MovieAPI-1.png'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className='footer__logo'>
                            <img src={MovieLogo} alt="" className='footer__logo--img'/>
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className='footer__link'>Home</Link>
                        <span className='footer__link no-cursor'>About</span>
                        <Link to="/books" className='footer__link'>Movies</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2022</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
