import React from 'react'
import { createBrowserRouter, createHashRouter, HashRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'
import AuthContextProvider from './context/Auth/AuthContext'
import NotFound from './components/NotFound/NotFound'
import ProtectedRoute from './components/Protected Route/ProtectedRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Payment from './components/Payment/Payment'
import AllOrders from './components/AllOrders/AllOrders'
import ForgetPassword from './components/Forget Password/ForgetPassword'
import VerificationResetCode from './components/VerificationResetCode/VerificationResetCode'
import ResetPassword from './components/ResetPassword/ResetPassword'
import CategoryProducts from './components/CategoryProducts/CategoryProducts'
import WishList from './components/WishList/WishList'



const App = () => {


  const router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/signin", element: <Signin /> }, 
        { path: "/ecomm", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "/", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "/cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: "/payment/:id", element: <ProtectedRoute><Payment /></ProtectedRoute> },
        { path: "/categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: "/categoryproducts/:id", element: <ProtectedRoute><CategoryProducts /></ProtectedRoute> },
        { path: "/brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: "/wishlist", element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: "/register", element: <Register /> },
        { path: "/signin", element: <Signin /> },
        { path: "/forgetpassword", element: <ForgetPassword /> },
        { path: "/verificationresetcode", element: <VerificationResetCode /> },
        { path: "/resetpassword", element: <ResetPassword /> },
        { path: "/allorders", element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
        { path: "/productdetails/:id", element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: "*", element: <NotFound /> }
      ]
    }
  ]);


  const queryClient = new QueryClient();


  QueryClientProvider

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        {/* <HashRouter> */}
          <RouterProvider router={router}/>  
        {/* </HashRouter>         */}
      </QueryClientProvider>
    </AuthContextProvider>
  )
}

export default App
