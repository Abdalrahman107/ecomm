import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const CategorySlider = ({ data:categories }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots:false,
        }
      }
    ],
  };

  return (
    <>
    <h2 className='mt-6 p-3 text-2xl font-semibold'>Shop Popular Categories</h2>
    <div className="slider-container p-3 mb-10">
      <Slider {...settings}>
            {categories?.map((category)=>{
              return (
              <Link key={category._id} to={`/categoryproducts/${category._id}`} className='outline-0'>
                <img src={category.image} className='w-full h-[200px] object-cover' alt="" />
                <h2 className='my-3 font-medium text-center'>{category.name}</h2>
              </Link>
            )})}
      </Slider>
    </div>
    </>

  )
}

export default CategorySlider

