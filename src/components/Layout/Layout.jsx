import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import CartContextProvider from '../../context/Cart/CartContext'
import WishListContextProvider from '../../context/WishList/WishList'



const Layout = () => {
  return (
    <>
    <CartContextProvider>
      <WishListContextProvider>
        <ScrollToTop/>
        <Toaster/>
        <Navbar/>
          <main className='min-h-screen'>
            <Outlet></Outlet>
          </main>
        <Footer/>
      </WishListContextProvider>
    </CartContextProvider>
    </>
  )
}

export default Layout
