import React, { useState } from 'react';
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import Card from "./Card"
import Buttons from './Buttons';
const TopRest = () => {
    const [slide, setSlide] = useState(0);
    const imageWidth = 170; // width of each image
    const gap = 16; // gap between images
    const imagesPerView = 3; // number of images visible at a time

    const images = [
        
    ];

    const totalImages = images.length;
    const maxSlides = Math.max(totalImages - imagesPerView, 0);

    const nextSlide = () => {
        if (slide < maxSlides) {
            setSlide((prevSlide) => prevSlide + 1);
        }
    };

    const prevSlide = () => {
        if (slide > 0) {
            setSlide((prevSlide) => prevSlide - 1);
        }
    };

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='text-[25px] font-bold'>Top restaurant chains in Mangaluru</div>

                    <div className='flex items-center'>
                        <div 
                            className='w-[30px] h-[30px] bg-[rgba(129, 22, 22, 0.1)] rounded-full mx-2 cursor-pointer' 
                            onClick={prevSlide}
                        >
                            <HiArrowSmallLeft />
                        </div>
                        <div 
                            className='w-[30px] h-[30px] bg-[rgba(255, 255, 255, 0.9)] rounded-full mx-2 cursor-pointer' 
                            onClick={nextSlide}
                        >
                            <HiArrowSmallRight />
                        </div>
                    </div>
                </div>

             <div className="flex gap-3">
              <Card />
             
       

             </div>
            </div>
        </>
    );
}

export default TopRest;
