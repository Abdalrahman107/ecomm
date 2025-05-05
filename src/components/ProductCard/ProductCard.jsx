import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ products, addtocart, wishListProducts, addToWishList }) => {

    const [clickedProductId, setClickedProductId] = useState(null);
    const [wishProductId, setwishProductId] = useState(null);

    let favourites = new Array(wishListProducts.data);
  return (
    <div className='home row'>
    {products?.map((product)=>{
      return (
        <div key={product.id} className="card w-full md:w-1/2 lg:w-1/3 xl:w-1/4  p-3 rounded">
          <div className="inner p-3 bg-slate-100">
            <Link to={`/productdetails/${product._id}`}>                  
              <img className="w-full" src={product.imageCover} alt="" /> 

              <h6 className="mt-3 main-color">{product.category.name}</h6>
              <h5 className="mb-6 font-medium text-gray-900">{product.title.split(' ', 2).join(' ')}</h5>
              
              <div className='row justify-between items-center font-light'>
                <span>{product.price} EGP</span>
                  <span><i className="fa-solid fa-star text-amber-400 mr-2"></i>
                  {product.ratingsAverage}
                </span>
              </div>
            </Link>
            <div className="text-center mt-6 mb-2 flex items-center gap-3">

              <button onClick={async()=>{
                setClickedProductId(product.id);
                await addtocart(product.id);
                setClickedProductId(null);
              }} className="link relative top-24 opacity-0 p-2.5 text-sm !text-white bg-main-color rounded-lg hover:bg-green-800 cursor-pointer">
                {clickedProductId === product.id ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "Add To Cart"
                )}
              </button>

              <button onClick={async()=>{
                setwishProductId(product.id);
                await addToWishList(product.id);
                setwishProductId(null);
              }} type="button" className="link relative top-24 opacity-0 p-2.5 text-sm !text-white bg-blue-500 rounded-lg hover:bg-blue-800 cursor-pointer">
              {wishProductId === product.id ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "WishList"
                )}
              </button>

              {favourites[0] ? favourites[0].map(function (item, index) {
                if (item.id.includes(product.id)) {
                  return <i key={index} className={`ml-auto fa-solid fa-heart text-3xl text-red-600 hover:text-red-800 transition duration-500`}></i>
                }
              }) : ""}

            </div>
          </div>
        </div>
      )
      
    })}
    </div>
  )
}

export default ProductCard

