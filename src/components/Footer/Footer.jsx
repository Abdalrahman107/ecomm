import React from 'react'
import payImg1 from '../../assets/images/amazon pay.png'
import payImg2 from '../../assets/images/american-express.png'
import payImg3 from '../../assets/images/master-card.png'
import payImg4 from '../../assets/images/paypal.png'
import storeImg from '../../assets/images/store.jpg'
const Footer = () => {
  return (
    <footer className=' bg-slate-100   pb-6'>
       <div className="container">
        <h2>Get the FreshCart app</h2>
        <p className='text-gray-500 text-sm mt-2'>We will send you a link, open it on your phone to download the app</p>
        <div className='row flex-col lg:flex-row justify-between gap-4 p-4 border-b border-slate-200'>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full lg:w-9/12 py-1 px-4 focus:outline-0" placeholder="Email..." />
        <button className='bg-main-color text-white text-sm px-6 py-1 rounded-md min-w-fit w-2/12'>Share App Link</button>
        </div>
        <div className='row flex-col lg:flex-row justify-between gap-y-4 p-4 border-b border-slate-200'>
            <div className='row lg:justify-between items-center w-full lg:w-1/2 gap-4'>
                <p>Payment Partners:</p>
                <div className='w-1/10'><img src={payImg1} className='w-full' alt="" /></div>
                <div className='w-1/10'><img src={payImg2} className='w-full' alt="" /></div>
                <div className='w-1/10'><img src={payImg3} className='w-full' alt="" /></div>
                <div className='w-1/10'><img src={payImg4} className='w-full' alt="" /></div>
            </div>
            <div className='row lg:justify-end items-center w-full lg:w-1/2 gap-4'>
                <p className='text-gray-800 text-xs'>Get Delivers With fresh cart:</p>
                <div className='w-1/3'><img src={storeImg} className='w-full' alt="" /></div>
                
            </div>
        </div>
       </div>
        
    </footer>
  )
}

export default Footer

