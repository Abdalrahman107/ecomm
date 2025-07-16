import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'
import AuthContextProvider from './context/Auth/AuthContext'
import NotFound from './components/NotFound/NotFound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Payment from './components/Payment/Payment'
import RequiredLogin from './components/RequiredLogin/RequiredLogin'
import AllOrders from './components/AllOrders/AllOrders'
import ForgetPassword from './components/Forget Password/ForgetPassword'
import VerificationResetCode from './components/VerificationResetCode/VerificationResetCode'
import ResetPassword from './components/ResetPassword/ResetPassword'
import CategoryProducts from './components/CategoryProducts/CategoryProducts'
import WishList from './components/WishList/WishList'
import ProtectedRoute from './components/Protected Route/ProtectedRoute'


const App = () => {


  const router = createHashRouter ([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/signin", element: <Signin /> }, 
        { index:true , element: <Home /> },
        { path: "/cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: "/payment/:id", element: <ProtectedRoute><Payment /></ProtectedRoute> },
        { path: "/categories", element: <Categories /> },
        { path: "/categoryproducts/:id", element: <CategoryProducts /> },
        { path: "/brands", element: <Brands /> },
        { path: "/wishlist", element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: "/register", element: <Register /> },
        { path: "/forgetpassword", element: <ForgetPassword /> },
        { path: "/verificationresetcode", element: <VerificationResetCode /> },
        { path: "/resetpassword", element: <ResetPassword /> },
        { path: "/allorders", element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
        { path: "/productdetails/:id", element: <ProductDetails /> },
        { path: "/requiredlogin", element: <RequiredLogin/> },
        { path: "*", element: <NotFound /> }
      ]
    }
  ]);


  const queryClient = new QueryClient();




  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContextProvider>
  )
}

export default App
