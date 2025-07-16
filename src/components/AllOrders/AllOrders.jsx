import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { jwtDecode } from "jwt-decode"
import NotFound from '../NotFound/NotFound';

const AllOrders = () => {
    
  const { id } = jwtDecode(localStorage.getItem("tkn"));

  const getAllOrders = async ()=>{
     
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }

  const { isError , isLoading, data } = useQuery({
    queryKey:['AllOrders'],
    queryFn: getAllOrders,
  })

      if(isLoading){
        return(
          <>
        <div className='container row h-screen justify-center items-center text-3xl'>
        <ClimbingBoxLoader color="#0aad0a" />
        </div>
          </>
        )
      }
      
      if(isError){
        return(
          <>
            <NotFound error='Can not Load Orders'/>
          </>
        )
      }

  if (data?.data?.length < 1) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl text-green-500">There is no orders yet!</h2>
      </div>
    );
  }

    

  return (

    <div className='container mt-14'>
            <h1 className='text-5xl font-semibold main-color text-center py-5'>Your Orders</h1>
        {data? data?.data.map((order, idx)=>{
            return <div key={idx} className='mt-5 bg-slate-200 p-5 my-2'>
                <h4>Total Card Price: <span className='ml-1 main-color font-medium'>{order.totalOrderPrice} EGP</span></h4>
                <h4>Payment Method: <span className='ml-1 main-color font-medium'>{order.paymentMethodType}</span></h4>
                <div className='flex flex-wrap justify-center items-center'>
                    {order.cartItems.map((item, idx)=>{
                        return <img key={idx} src={item.product.imageCover} className='w-1/6 p-3' alt="" />
                    })}
                </div>
            </div>
        }):""}
    </div>
  )
}

export default AllOrders


