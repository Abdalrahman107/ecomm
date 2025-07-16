// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
// import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
// import ProductDetailsSlider from '../ProductDetailsSlider/ProductDetailsSlider'
// import { cartContext } from '../../context/Cart/CartContext'
// import { authContext } from '../../context/Auth/AuthContext'

// const ProductDetails = () => {
//     const {token} = useContext(authContext);
//     const { id } = useParams();
//     const { addProductToCart, isLoading } = useContext(cartContext);
//     const navigate = useNavigate();

//     const [loading, setLoading] = useState(false)

//     const [product, setProduct] = useState([])

//     async function getProduct() {
//         setLoading(true);
//        try{
//         const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        
//         setProduct(data.data);
//         setLoading(false);
//        }catch(err){
//         navigate('/notfound')
        
//        }
//     }

//     useEffect(()=>{
//         getProduct()
//     },[])

//     if(loading){
//         return (
//           <div className='container row h-screen justify-center items-center text-3xl'>
//             <ClimbingBoxLoader color="#0aad0a" />
//           </div>
//         )
//       }

//   return (
//     <div className='container row items-center justify-center min-h-screen md:gap-y-0 gap-y-6'>

//         <div className='w-full md:w-1/3  p-2'>
//             <ProductDetailsSlider product={product}/>
//         </div>

//         <div className='w-full md:w-2/3 p-2'>
//                 <h3 className=''>{product.title}</h3>
//                 <p className='ml-3 mt-3 text-slate-500 text-sm'>{product.description}</p>
//                 <p className='mt-6 text-slate-600'>{product.category?.name}</p>
//                 <div className='row justify-between items-center text-slate-600 mt-2 font-bold'>
//                     <span>{product.price} EGP</span>
//                     <span>
//                         <i className="fa-solid fa-star text-amber-400 mr-2"></i>
//                         {product.ratingsAverage}
//                     </span>
//                 </div>
//                 <button onClick={()=>{
//                   if(token){
//                   addProductToCart(product._id);
//                   }else{
//                     navigate('/requiredlogin')
//                   }
//                 }} className="block w-full mt-3 text-center px-6 py-1.5 text-sm font-medium !text-white bg-main-color rounded-md hover:bg-green-800 cursor-pointer">
//                     {isLoading? <i className='fa-solid fa-spinner fa-spin'></i> : "Add To Cart"}
//                 </button>
//         </div>
//     </div>
//   )
// }

// export default ProductDetails


import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import ProductDetailsSlider from '../ProductDetailsSlider/ProductDetailsSlider';
import { cartContext } from '../../context/Cart/CartContext';
import { authContext } from '../../context/Auth/AuthContext';

const ProductDetails = () => {
  const { token } = useContext(authContext);
  const { id } = useParams();
  const { addProductToCart, isLoading } = useContext(cartContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  async function getProduct() {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      setProduct(data.data);
      setLoading(false);
    } catch (err) {
      navigate('/notfound');
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return (
      <div className="container flex h-screen justify-center items-center">
        <ClimbingBoxLoader color="#0aad0a" />
      </div>
    );
  }

  return (
    <div className="mt-20 container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start min-h-screen">
      {/* Left: Image Slider */}
      <div className="rounded-xl shadow-sm border border-gray-200 p-4">
        <ProductDetailsSlider product={product} />
      </div>

      {/* Right: Product Info */}
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h1>

        <p className="text-gray-600 text-sm">{product.description}</p>

        <p className="text-sm text-gray-500 font-medium">Category: <span className="text-gray-700">{product.category?.name}</span></p>

        <div className="flex items-center justify-between text-gray-700 font-semibold">
          <span className="text-xl text-green-600">{product.price} EGP</span>
          <span className="flex items-center">
            <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
            {product.ratingsAverage}
          </span>
        </div>

        <button
          onClick={() => {
            if (token) {
              addProductToCart(product._id);
            } else {
              navigate('/requiredlogin');
            }
          }}
          className="w-full bg-[#0aad0a] hover:bg-green-700 text-white py-2 rounded-lg font-medium text-sm transition duration-200"
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner fa-spin"></i>
          ) : (
            'Add To Cart'
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
