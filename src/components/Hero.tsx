import { useState, useRef } from 'react';
import img1 from "../assets/hero/1fqvLna5hSToMZqBeatdY.jpg";
import img2 from "../assets/hero/BOIFNnS-VFqt1V1x2HnJ_.jpg";
import img3 from "../assets/hero/EW8H42ZWLqu-8e8XLHowZ.jpg";
import img4 from "../assets/hero/PpwkZhxSblOQ4oDYAviZP.jpg";
import img5 from "../assets/hero/qMTGbS88hEB3qQfJKztjN.jpg";
import img6 from "../assets/hero/ZxNo_X1yEnuPlSVRv_qPC.jpg";
import img7 from "../assets/hero/2GzuzcVcpUaBiPdx53Csh.jpg";
import img8 from "../assets/hero/ItSKv099TIzkxljVq3mgj.jpg";
import img9 from "../assets/hero/-S-AllYguf_aPAcRGWl5U.jpg";

import mgImage1 from "../assets/magazine/PT8EyZIGPvvJCo69u2d1I.jpg";
import mgImage2 from "../assets/magazine/Znb2wk86wZOnIF_iuntdA.jpg";
import mgImage3 from "../assets/magazine/cSJmFm3giEcKi1JqXCvxt.jpg";
import mgImage4 from "../assets/magazine/cpqAhjWqY-5jlMOwdKK3g.jpg";
import mgImage5 from "../assets/magazine/dO_mLB8GQ-52iR_U19Z56.jpg";
import mgImage6 from "../assets/magazine/n2MX_9Y4jVT-1XWHouB5p.jpg";
import mgImage7 from "../assets/magazine/svSL0BaL_1K2pLIXNGxJQ.jpg";
import mgImage8 from "../assets/magazine/yXrMnNOub_1AZSUYyHGtv.jpg";
import mgImage9 from "../assets/magazine/PT8EyZIGPvvJCo69u2d1I.jpg";


import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function Hero() {
  const [images] = useState([img1, img2, img3, img4, img5, img6, img7, img8, img9]);
  const [magazineImages] = useState([mgImage1, mgImage2, mgImage3, mgImage4, mgImage5, mgImage6, mgImage7, mgImage8, mgImage9]);
  const heroCarouselRef = useRef(null);
  const magazineCarouselRef = useRef(null);





  const handleNext = (carouselRef: React.RefObject<HTMLDivElement>) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200;
    }
  };





  const handlePrev = (carouselRef: React.RefObject<HTMLDivElement>) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200;
    }
  };

  return (
    <div>
      <div className="hero-carousel mt-10 relative">
        <button onClick={() => handlePrev(heroCarouselRef)} className="absolute left-0 top-1/3 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"><GrPrevious /></button>
        <div ref={heroCarouselRef} className="carousel flex items-center gap-4 overflow-x-auto">
          {images.map((img, index) => (
            <div className='rounded-xl flex-shrink-0' key={index} style={{ width: '180px', height: '170px' }}>
              <img className='w-full rounded-xl object-cover' src={img} alt={`img-${index}`} />
            </div>
          ))}
        </div>
        <button onClick={() => handleNext(heroCarouselRef)} className="absolute right-0 top-1/3 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"><GrNext /></button>
      </div>

      <div className='magazine mt-10'>
        <h1 className='text-4xl font-bold mb-10'>Магазины</h1>
        <div className="carousel-container relative">
          <button onClick={() => handlePrev(magazineCarouselRef)} className="absolute left-0 top-1/3 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"><GrPrevious /></button>
          <div ref={magazineCarouselRef} className="carousel flex items-center gap-4 overflow-x-auto">
            {magazineImages.map((img, index) => (
              <div className='carousel-image rounded-xl overflow-hidden flex-shrink-0' key={index} style={{ width: '200px', height: '200px' }}>
                <img className='w-full rounded-b-lg object-cover' src={img} alt={`magazine-img-${index}`} />
                <h3 className='font-semibold'>Full Cart</h3>
                <p className='text-sm text-gray-500 text-[12px]'>Продукты</p>
              </div>
            ))}
          </div>
          <button onClick={() => handleNext(magazineCarouselRef)} className="absolute right-0 top-1/3 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"><GrNext /></button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
