import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import axios from '../js/axios';
import noBackdropImg from "../assets/noBackdropAvailable.png";
import setHandle from '../js/setHandle'
import { throttledProgressBar } from "../js/throttleProgressBar";
import calculateProgressBar from "../js/calculateProgressBar";
import Rating from '../components/ui/Rating'
const posterPath = `https://image.tmdb.org/t/p/original/`;

const Slider = ({ title, fetchUrl }) => {
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [gotMovies, setGotMovies] = useState(false);
  const progressBarRef = useRef()
  const sliderRef = useRef()

  useEffect(() => {
    document.querySelectorAll(".progress__bar").forEach(calculateProgressBar);
    setGotMovies(false)
    async function fetchData() {
      const { data: {results }} = await axios.get(fetchUrl)
      console.log(results)
      setMovies(results)
      setGotMovies(true)
    }
    fetchData()
  }, [fetchUrl]);

  window.addEventListener("resize", throttledProgressBar);

  return (
    <>
      <div className="slider__row">
        <div className="slider__header">
          <h3 className="slider__title">{title}</h3>
          <div className="progress__bar" ref={progressBarRef}>
            <div className="progress__item active"></div>
            <div className="progress__item"></div>
            <div className="progress__item"></div>
            <div className="progress__item"></div>
          </div>
        </div>
        <div className="slider__container">
          <button
            className="handle left-handle"
            onClick={(e) => setHandle(e, progressBarRef, sliderRef)}
          >
            <div className="text">&#8249;</div>
          </button>
          
          <div className="slider" ref={sliderRef}>
            {gotMovies ? (movies.map((movie, index) =>
                movie.backdrop_path ? (
                  <div className="slider__img--wrapper" key={index}>
                    <img
                    src={posterPath + movie.backdrop_path}
                    alt="img"
                    className="slider__img"
                    
                    />
                    <div className="movie__backdrop cursor" onClick={() => navigate(`/movie/${movie.id}`)}>
                        <div className="movie__backdrop--content">
                          <h3>{movie.title}</h3>
                          <div className="movie__backdrop--rating">
                            <Rating rating={movie.vote_average}/>
                          </div>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="slider__img--wrapper" key={index}>
                    <img src={noBackdropImg} key={index} alt="img" className="slider__img"/>
                    <div className="movie__backdrop cursor" onClick={() => navigate(`/movie/${movie.id}`)}>
                        <div className="movie__backdrop--content">
                          <h3>{movie.title}</h3>
                          <div className="movie__backdrop--rating">
                            <Rating rating={movie.vote_average}/>
                          </div>
                        </div>
                    </div>
                  </div>
                )
              )) : (
                new Array(10).fill(0).map((_,index) => (
                  <div className="skeleton slider__skeleton--img" key={index}>

                  </div>
              ))
              )}
          </div>
          
          <button
            className="handle right-handle"
            onClick={(e) => setHandle(e, progressBarRef, sliderRef)}
          >
            <div className="text">&#8250;</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
