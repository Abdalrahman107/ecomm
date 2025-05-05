import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import ProductDetailsSlider from '../ProductDetailsSlider/ProductDetailsSlider'
import { cartContext } from '../../context/Cart/CartContext'

const ProductDetails = () => {
    const { id } = useParams();
    const { addProductToCart, isLoading } = useContext(cartContext);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const [product, setProduct] = useState([])

    async function getProduct() {
        setLoading(true);
       try{
        const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        
        setProduct(data.data);
        setLoading(false);
       }catch(err){
        navigate('/notfound')
        
       }
    }

    useEffect(()=>{
        getProduct()
    },[])

    if(loading){
        return (
          <div className='container row h-screen justify-center items-center text-3xl'>
            <ClimbingBoxLoader color="#0aad0a" />
          </div>
        )
      }

  return (
    <div className='container row items-center justify-center min-h-screen md:gap-y-0 gap-y-6'>

        <div className='w-full md:w-1/3  p-2'>
            <ProductDetailsSlider product={product}/>
        </div>

        <div className='w-full md:w-2/3 p-2'>
                <h3 className=''>{product.title}</h3>
                <p className='ml-3 mt-3 text-slate-500 text-sm'>{product.description}</p>
                <p className='mt-6 text-slate-600'>{product.category?.name}</p>
                <div className='row justify-between items-center text-slate-600 mt-2 font-bold'>
                    <span>{product.price} EGP</span>
                    <span>
                        <i className="fa-solid fa-star text-amber-400 mr-2"></i>
                        {product.ratingsAverage}
                    </span>
                </div>
                <button onClick={()=>addProductToCart(product._id)} className="block w-full mt-3 text-center px-6 py-1.5 text-sm font-medium !text-white bg-main-color rounded-md hover:bg-green-800 cursor-pointer">
                    {isLoading? <i className='fa-solid fa-spinner fa-spin'></i> : "Add To Cart"}
                </button>
        </div>
    </div>
  )
}

export default ProductDetails
