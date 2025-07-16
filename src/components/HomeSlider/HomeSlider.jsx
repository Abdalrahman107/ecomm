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
  <div className="flex p-3 gap-4 ">
    <div className="w-full sm:w-2/3 overflow-hidden rounded-lg">
      <Slider {...settings}>
        <img src={img1} className="w-full h-[300px] object-cover rounded-lg" alt="" />
        <img src={img3} className="w-full h-[300px] object-cover rounded-lg" alt="" />
      </Slider>
    </div>

    <div className="w-1/3 flex-col gap-4 hidden sm:flex">
      <img src={img4} className="w-full h-[150px] object-cover rounded-lg" alt="" />
      <img src={img2} className="w-full h-[150px] object-cover rounded-lg" alt="" />
    </div>
  </div>
  )
}

export default HomeSlider