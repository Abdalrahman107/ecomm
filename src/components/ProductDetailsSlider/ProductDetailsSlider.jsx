import React from 'react'
import Slider from 'react-slick'

const ProductDetailsSlider = ({ product }) => {

    function NextArrow(props) {
        const { className, onClick, style } = props;
        return (
        <div
            className={className}
            style={{ ...style, position: "absolute", right: "7%", top:"50%", zIndex: "1", scale:"1.3", backgroundColor:"#1f1f1f66", borderRadius:"50%"}}
            onClick={onClick}
        >
        </div>
        );
      }
      
      function PrevArrow(props) {
        const { className, onClick, style } = props;
        return (
          <div
            className={className}
            style={{ ...style, position: "absolute", left: "7%", top:"50%", zIndex: "1", scale:"1.3", backgroundColor:"#1f1f1f66", borderRadius:"50%"}}
            onClick={onClick}
          >
          </div>
        );
      }

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };


  return (
    <div className='slider-container'>    
        <Slider {...settings}>
            {product.images?.map((image)=>{
                return <img src={image} className='w-full relative' alt="" />
            })}
        </Slider>
    </div>
  )
}

export default ProductDetailsSlider
