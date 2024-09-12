import React, { useState } from 'react';
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const imageWidth = 170;
  const gap = 16;
  const imagesPerView = 3;

  // The index of the `lassi` image
  const lassiIndex = 16; // Assuming `lassi` is the 17th image (0-based index)

  // Calculate the total number of slides needed to stop exactly at `lassi`
  const maxSlides = lassiIndex - (imagesPerView - 1);

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
          <div className='text-[25px] font-bold'>What's on your mind?</div>

          <div className='flex items-center'>
            <div 
              className='w-[30px] h-[30px] bg-[rgba(129, 22, 22, 0.1)] rounded-full mx-2' 
              onClick={prevSlide}
            >
              <HiArrowSmallLeft />
            </div>
            <div 
              className='w-[30px] h-[30px] bg-[rgba(255, 255, 255, 0.9)] rounded-full mx-2' 
              onClick={nextSlide}
            >
              <HiArrowSmallRight />
            </div>
          </div>
        </div>

        <div 
          style={{ transform: `translateX(-${slide * (imageWidth + gap)}px)` }} 
          className="shrink-0 duration-500 flex space-x-4 items-center "
        >
          <img className='w-[170px] h-[170px]' src="/images/dosa.png" alt="dosa" />
          <img className='w-[170px] h-[170px]' src="/images/poori.png" alt="poori" />
          <img className='w-[170px] h-[170px]' src="/images/idli.png" alt="idli" />
          <img className='w-[170px] h-[170px]' src="/images/appam.png" alt="appam" />
          <img className='w-[170px] h-[170px]' src="/images/bath.png" alt="bath" />
          <img className='w-[170px] h-[170px]' src="/images/chole.png" alt="chole" />
          <img className='w-[170px] h-[170px]' src="/images/bonda.png" alt="bonda" />
          <img className='w-[170px] h-[170px]' src="/images/parotta.png" alt="parotta" />
          <img className='w-[170px] h-[170px]' src="/images/omelette.png" alt="omelette" />
          <img className='w-[170px] h-[170px]' src="/images/pure.png" alt="pure" />
          <img className='w-[170px] h-[170px]' src="/images/poha.png" alt="poha" />
          <img className='w-[170px] h-[170px]' src="/images/tea.png" alt="tea" />
          <img className='w-[170px] h-[170px]' src="/images/vada.png" alt="vada" />
          <img className='w-[170px] h-[170px]' src="/images/samosa.png" alt="samosa" />
          <img className='w-[170px] h-[170px]' src="/images/pav.png" alt="pav" />
          <img className='w-[170px] h-[170px]' src="/images/coffee.png" alt="coffee" />
          <img className='w-[170px] h-[170px]' src="/images/lassi.png" alt="lassi" />
        </div>
        <hr className="my-6 border-[1px] overflow-scroll" />
      </div>
    </>
  );
};

export default Category;
