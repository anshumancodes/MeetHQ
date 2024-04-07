import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const CarouselSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex items-center justify-center ">
      <button onClick={handlePrevClick} className='text-gray-200'><ChevronLeft/></button>
      <img src={images[currentImageIndex]} alt="" className="w-80 h-64 object-cover rounded-full"  />
      <button onClick={handleNextClick} className='text-gray-200'><ChevronRight/></button>
    </div>
  );
};

export default CarouselSlider;