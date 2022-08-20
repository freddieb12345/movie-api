import React from 'react';
import MovieLogo from '../assets/MovieAPI-1.png'
import { Link } from "react-router-dom"
import '../styles/footer.css'

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
                        <a href="https://freddieb12345.github.io/" className='footer__link' target="_blank" rel="noreferrer">
                            Contact
                        </a>
                        <Link to="/books" className='footer__link'>Movies</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2022</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
