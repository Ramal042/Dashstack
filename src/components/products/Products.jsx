import React, { useState, useEffect } from 'react';
import ImgMediaCard from '../cards/Cards';

const slides = [
    {
        date: 'September 12-22',
        title: 'Enjoy free home delivery in this summer',
        subtitle: 'Designer Dresses - Pick from trendy Designer Dress.',
        buttonText: 'Get Started',
    },
    {
        date: 'October 5-15',
        title: 'Autumn Collection is here!',
        subtitle: 'Discover our new styles for the season.',
        buttonText: 'Shop Now',
    },
    {
        date: 'November 1-10',
        title: 'Holiday Sale - Up to 50% off',
        subtitle: 'Get the best deals on our products.',
        buttonText: 'Explore Offers',
    }
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animateClass, setAnimateClass] = useState('animate-in');

    const handleNext = () => {
        setAnimateClass('animate-out');
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setAnimateClass('animate-in');
        }, 500); // Duration should match CSS transition
    };

    const handlePrev = () => {
        setAnimateClass('animate-out');
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
            setAnimateClass('animate-in');
        }, 500); // Duration should match CSS transition
    };

    return (
        <>
            <div className="banner">
                <button className="nav-button left" onClick={handlePrev}>{'<'}</button>
                <div style={{ marginLeft: '50px' }} className={`banner-content ${animateClass}`}>
                    <p className="date">{slides[currentSlide].date}</p>
                    <h2 className="title">{slides[currentSlide].title}</h2>
                    <p className="subtitle">{slides[currentSlide].subtitle}</p>
                    <button className="get-started-button">{slides[currentSlide].buttonText}</button>
                </div>
                <button className="nav-button right" onClick={handleNext}>{'>'}</button>
            </div>
            <div className='Ali'>
                <div className='Ali1'>
                    <ImgMediaCard />
                </div>
                <div className='Ali2'>
                    <ImgMediaCard />
                </div>
                <div className='Ali3'>
                    <ImgMediaCard />
                </div>
            </div>
        </>
    );
}
