import React, { useContext, useState } from 'react'
import { cartContext } from '../../context/Cart/CartContext'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { noOfCartItems, productsTotalPrice, cartProducts, removeCartItem, updateCartItemQty, clearCart } = useContext(cartContext);

  const [clickedProductId, setClickedProductId] = useState({ id: null, type: null });
  
  
  return (
      <div className='container my-20  bg-slate-100' >
        <h2 className='text-2xl font-semibold'>Shop Cart:</h2>
        <div className='flex flex-col md:flex-row justify-between px-6 gap-x-4 gap-y-2 my-4'>
        <p className='font-medium'>Total Cart Price: <span className=' main-color'>{productsTotalPrice} EGP</span></p>
        <p className='font-medium'>Number of Products:: <span className=' main-color'>{noOfCartItems}</span></p>
        </div>

        {cartProducts.products?.map((product)=>{
        return (
          <div key={product.product.id}  className='flex-col sm:flex-row row items-center p-3 border-b border-b-slate-200'>
            <div className='w-1/2 sm:w-2/12 p-3'><img src={product.product.imageCover} className='w-full' alt="" /></div>
            <div className='w-full sm:w-7/12 p-3 order-2 sm:order-1 text-center sm:text-left'>
              <h3>{product.product.title}</h3>
              <p className=' main-color mt-2'>Price: {product.price} EGP</p>
              <button onClick={async()=>{
                setClickedProductId({id: product.product._id, type: 'remove'});
                await removeCartItem(product.product._id)
                setClickedProductId({id: null, type: null});
              }} className="px-4 py-1.5 text-sm font-medium !text-white rounded-lg bg-red-600 hover:bg-red-700 cursor-pointer mt-3">
              {(clickedProductId.id === product.product.id && clickedProductId.type === 'remove')? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                <>
                <i className="fa-solid fa-trash-can mr-2"></i>
                Remove
                </>
              )}
              </button>
            </div>
            <div className='w-full sm:w-3/12 row sm:justify-center items-center justify-center order-1 sm:order-2'>
              <button onClick={async()=>{
                setClickedProductId({id: product.product.id, type: 'dec'});
                await updateCartItemQty(product.product.id, product.count - 1)
                setClickedProductId({id: null, type: null});
              }} className='border border-red-500 py-1 px-2 cursor-pointer rounded-lg'>
                {(clickedProductId.id === product.product.id && clickedProductId.type === 'dec') ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "-"
                )}
              </button>
              <span className='mx-4 text-lg'>{product.count}</span>
              <button onClick={async()=>{
                setClickedProductId({id: product.product._id, type: 'inc'});
                await updateCartItemQty(product.product.id, product.count + 1)
                setClickedProductId({id: null, type: null});
              }} className='border border-lime-500 py-1 px-2 cursor-pointer rounded-lg'>
              {(clickedProductId.id === product.product.id && clickedProductId.type === 'inc') ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                "+"
              )}
              </button>
            </div>
            
          </div>
          
        )})}

        {cartProducts.products?.length === 0 ? <>
        <div className='text-center'>
          <h2 className='p-10 text-3xl main-color'>Your cart is Empty!!</h2>
        </div>
        </>:
        <div className='flex px-6 justify-between sm:justify-end items-center gap-5 my-6'>
        <button onClick={async()=>{
          setClickedProductId({id: true, type: 'clear'});
          await clearCart()
          setClickedProductId({id: null, type: null});
          }} className="px-6 py-2 text-sm font-medium !text-white rounded-lg bg-red-600 hover:bg-red-700 cursor-pointer text-center">
        {(clickedProductId.id && clickedProductId.type === 'clear' ) ? (
          <i className="fa-solid fa-spinner fa-spin"></i>
        ) : (
          "Clear Cart"
        )}
        </button>
        <Link to={`/payment/${cartProducts._id}`} className="w-fit px-6 py-2 text-sm font-medium !text-white rounded-lg bg-sky-600 hover:bg-sky-700 text-center">
        Check Out
        </Link>
        </div>}


      </div>

      

  )
}

export default Cart
