import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import noBackdropImg from "../assets/noBackdropAvailable.png";

const Slider = ({ genreId, genreName }) => {
  let navigate = useNavigate();
  const apiKey = "ac8e032ce18cd4b026afad6cd3298ad8";
  const [movies, setMovies] = useState([]);
  const [gotMovies, setGotMovies] = useState(false);
  async function getMovies(genreId) {
    setGotMovies(false);
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
    );
    setMovies(results);
    setGotMovies(true);
  }

  useEffect(() => {
    // console.log(genre.genreId)
    getMovies(genreId);
    // eslint-disable-next-line
  }, []);

  function setHandle(e) {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target;
    } else {
      handle = e.target.closest(".handle");
    }
    if (handle != null) onHandleClick(handle);
  }

  const throttledProgressBar = throttle(() => {
    document.querySelectorAll(".progress__bar").forEach(calculateProgressBar);
  }, 250);

  window.addEventListener("resize", throttledProgressBar);

  useEffect(() => {
    document.querySelectorAll(".progress__bar").forEach(calculateProgressBar);
    // eslint-disable-next-line
  }, []);

  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = "";
    const slider = progressBar.closest(".slider__row").querySelector(".slider");
    const itemCount = slider.children.length;
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    );
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1);
      sliderIndex = progressBarItemCount - 1;
    }

    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress__item");
      if (i === sliderIndex) {
        barItem.classList.add("active");
      }
      progressBar.append(barItem);
    }
  }

  function onHandleClick(handle) {
    //The slider const gets the slider that is within the container that is closest to the handle that was clicked
    const progressBar = handle
      .closest(".slider__row")
      .querySelector(".progress__bar");
    const slider = handle
      .closest(".slider__container")
      .querySelector(".slider");

    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = progressBar.children.length;

    if (handle.classList.contains("left-handle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[progressBarItemCount - 1].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex - 1].classList.add("active");
      }
    }

    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[0].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex + 1].classList.add("active");
      }
    }
  }

  function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }
  
  const posterPath = `https://image.tmdb.org/t/p/original/`;
  return (
    <>
        <div className="slider__row">
          <div className="slider__header">
            <h3 className="slider__title">{genreName}</h3>
            <div className="progress__bar">
              <div className="progress__item active"></div>
              <div className="progress__item"></div>
              <div className="progress__item"></div>
              <div className="progress__item"></div>
            </div>
          </div>
          <div className="slider__container">
            <button
              className="handle left-handle"
              onClick={(e) => setHandle(e)}
            >
              <div className="text">&#8249;</div>
            </button>
            
            <div className="slider">
              {gotMovies ? (movies.map((movie, index) =>
                  movie.backdrop_path ? (
                      <img
                      src={posterPath + movie.backdrop_path}
                      alt="img"
                      key={index}
                      className="slider__img cursor"
                      onClick={() => navigate(`/movie/${movie.id}`)}
                      />
                  ) : (
                      <img src={noBackdropImg} key={index} alt="img"/>
                  )
                )) : (
                  new Array(10).fill(0).map((_,index) => (
                    // <img
                    //   src="https://via.placeholder.com/210x200"
                    //   alt="img"
                    //   key={index}
                    //   className="slider__img cursor"
                    // />
                    <div className="skeleton slider__skeleton--img" key={index}>

                    </div>
                ))
                )}
            </div>
            
            <button
              className="handle right-handle"
              onClick={(e) => setHandle(e)}
            >
              <div className="text">&#8250;</div>
            </button>
          </div>
        </div>
    </>
  );
};

export default Slider;
