import { useState, useEffect } from 'react';
import './carousel.css';

import banner1 from '../../assets/carousel/banner01.webp';
import banner2 from '../../assets/carousel/banner02.webp';
import banner3 from '../../assets/carousel/banner03.webp';
import banner4 from '../../assets/carousel/banner04.webp';
import banner5 from '../../assets/carousel/banner05.webp';
import banner6 from '../../assets/carousel/banner06.webp';
import banner7 from '../../assets/carousel/banner07.webp';
import banner8 from '../../assets/carousel/banner08.webp';

export const Carousel = () => {
    
    const slides = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => 
                prev === slides.length - 1 ? 0 : prev + 1)
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return(
    <div>
        <div className='carousel'>
            <div className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                
                {slides.map((slide, index) => (
                    <div className='carousel-slide' key={index}>
                        <img src={slide} alt={`slide-${index}`}/>
                    </div>
                ))}
            </div>
        </div>

            <div className="carousel-progress">
                {slides.map((_, index) => (
                    <div key={index}
                        className='progress-container'
                        onClick={() => setCurrentIndex(index)}>

                        <div key={currentIndex}
                            className={`progress-bar ${
                                currentIndex === index ? 'active' : "" }`}
                        />
                        
                    </div>
                ))}
            </div>  
    </div>    
)}
