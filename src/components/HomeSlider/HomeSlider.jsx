import React from 'react'
import Slider from "react-slick";
import img1 from '../../assets/images/slider-image-1.jpeg'
import img2 from '../../assets/images/slider-image-2.jpeg'
import img3 from '../../assets/images/slider-image-3.jpeg'
import img4 from '../../assets/images/slider-2.jpeg'

const HomeSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

  return (
    <div className='row p-3'>
    <div className="slider-container w-2/3">
      <Slider {...settings}>
        <img src={img1} className='w-full h-full' alt="" />
        <img src={img3} className='w-full h-full' alt="" />
      </Slider>
    </div>
    <div className="images w-1/3 row flex-col">
      <img src={img4} className='w-full h-1/2' alt="" />
      <img src={img2} className='w-full h-1/2' alt="" />
    </div>
    </div>
  )
}

export default HomeSlider