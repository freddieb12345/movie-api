import React from 'react';
import SliderItem from './ui/SliderItem';

const Slider = ({gendreId}) => {
    function setHandle(e) {
        let handle
        if(e.target.matches(".handle")) {
            handle = e.target
        } else {
            handle = e.target.closest(".handle")
        }
        if(handle != null) onHandleClick(handle)
    }

    const throttledProgressBar = throttle(() => {
        document.querySelectorAll(".progress__bar").forEach(calculateProgressBar)
    }, 250) 

    window.addEventListener("resize", throttledProgressBar)
    
    document.querySelectorAll(".progress__bar").forEach(calculateProgressBar)

    function calculateProgressBar(progressBar) {
        progressBar.innerHTML = ""
        const slider = progressBar.closest(".slider__row").querySelector(".slider")
        const itemCount = slider.children.length
        const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"))
        let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
        const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)

        if(sliderIndex >= progressBarItemCount) {
            slider.style.setProperty("--slider-index", progressBarItemCount - 1)
            sliderIndex = progressBarItemCount - 1
        }
        
        for(let i = 0 ; i < progressBarItemCount; i++) {
            const barItem = document.createElement("div")
            barItem.classList.add("progress__item")
            if(i === sliderIndex) {
                barItem.classList.add("active")
            }
            progressBar.append(barItem)
        }
    }

    function onHandleClick(handle) {
        //The slider const gets the slider that is within the container that is closest to the handle that was clicked 
        const progressBar = handle.closest(".slider__row").querySelector(".progress__bar")
        const slider = handle.closest(".slider__container").querySelector(".slider") 
        
        const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
        const progressBarItemCount = progressBar.children.length
        
        if(handle.classList.contains("left-handle")) {
            if(sliderIndex - 1 < 0) {
                slider.style.setProperty("--slider-index", progressBarItemCount - 1)
                progressBar.children[sliderIndex].classList.remove("active")
                progressBar.children[progressBarItemCount - 1].classList.add("active")
            } else {
                slider.style.setProperty("--slider-index", sliderIndex - 1)
                progressBar.children[sliderIndex].classList.remove("active")
                progressBar.children[sliderIndex - 1].classList.add("active")
            }
        }

        if(handle.classList.contains("right-handle")) {
            if(sliderIndex + 1 >= progressBarItemCount) {
                slider.style.setProperty("--slider-index", 0)
                progressBar.children[sliderIndex].classList.remove("active")
                progressBar.children[0].classList.add("active")
            } else {
                slider.style.setProperty("--slider-index", sliderIndex + 1)
                progressBar.children[sliderIndex].classList.remove("active")
                progressBar.children[sliderIndex + 1].classList.add("active")
            }
        }
    }

    function throttle(cb, delay = 1000) {
        let shouldWait = false
        let waitingArgs
        const timeoutFunc = () => {
            if(waitingArgs == null) {
                shouldWait = false
            } else {
                cb(...waitingArgs)
                waitingArgs = null
                setTimeout(timeoutFunc, delay)
            }
        }
        return (...args) => {
            if (shouldWait) {
                waitingArgs = args
                return
            }

            cb(...args)
            shouldWait = true
            setTimeout(timeoutFunc, delay)
        }
    }

    return (
        <>
            <div className='slider__row'>
                <div className='slider__header'>
                    <h3 className='slider__title'>Title</h3>
                    <div className="progress__bar">
                        <div className="progress__item active"></div>
                        <div className="progress__item"></div>
                        <div className="progress__item"></div>
                    </div>
                </div>
                <div className="slider__container">
                    <button className="handle left-handle" onClick={(e) => setHandle(e)}>
                        <div className="text">
                            &#8249;
                        </div>
                    </button>
                    <div className='slider'>
                        <img src="https://via.placeholder.com/210/00FF00?text=1" alt="" />
                        <img src="https://via.placeholder.com/220/00FF00?text=2" alt="" />
                        <img src="https://via.placeholder.com/230/00FF00?text=3" alt="" />
                        <img src="https://via.placeholder.com/240/00FF00?text=4" alt="" />
                        <img src="https://via.placeholder.com/250/00FF00?text=5" alt="" />
                        <img src="https://via.placeholder.com/260/00FF00?text=6" alt="" />
                        <img src="https://via.placeholder.com/270/00FF00?text=7" alt="" />
                        <img src="https://via.placeholder.com/280/00FF00?text=8" alt="" />
                        <img src="https://via.placeholder.com/290/00FF00?text=9" alt="" />
                        <img src="https://via.placeholder.com/300/00FF00?text=10" alt="" />
                        <img src="https://via.placeholder.com/310/00FF00?text=11" alt="" />
                        <img src="https://via.placeholder.com/320/00FF00?text=12" alt="" />
                    </div>
                    <button className="handle right-handle" onClick={(e) => setHandle(e)}>
                        <div className="text">
                            &#8250;
                        </div>
                    </button>
                </div>
            </div>
        </>
        
    );
}

export default Slider;

