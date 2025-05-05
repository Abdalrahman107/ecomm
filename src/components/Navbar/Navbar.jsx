import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/freshcart-logo.svg'
import { useContext } from 'react';
import { authContext } from '../../context/Auth/AuthContext';
import { cartContext } from '../../context/Cart/CartContext';



export function Navbar() { 
  
    const { noOfCartItems } = useContext(cartContext);
    

    
    const {token, setToken} = useContext(authContext);
    const navigate = useNavigate();

    function signout(){
        localStorage.removeItem('tkn');
        setToken(null);
        navigate('/signin');
    }
  
    return (


<nav className=" bg-slate-100 fixed top-0 left-0 right-0 z-20">
   
  <div className="container row justify-between  items-center">
    <Link to="/" className="lg:w-[15%]">
      <img src={logo} className="w-full" alt="Flowbite Logo" />
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden cursor-pointer  focus:shadow" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full lg:block lg:w-[85%]" id="navbar-default">
      <ul className="text-gray-600 font-medium flex flex-col p-4 lg:p-0 mt-4 border ml-3 border-gray-100 lg:flex-row lg:mt-0 lg:border-0">

        {token? 
        <>
          <li className="text-center mx-2 hover:[color:#0aad0a] transition-colors">
          <NavLink to="/" className="block" aria-current="page">Home</NavLink>
          </li>
          <li className="text-center mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/cart" className="block">
            <span className='relative'>
              <i className="fa-solid fa-cart-shopping mr-4 text-xl"></i>
              <span className="absolute flex justify-center items-center -top-3/4 mt-1 left-1/4 w-5 h-5 bg-green-500 text-white text-xs rounded-full">{noOfCartItems}</span>
            </span>
              Cart
            </NavLink>
          </li>
          <li className="text-center mx-2 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/categories" className="block ">Categories</NavLink>
          </li>
          <li className="text-center mx-2 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/allorders" className="block">All Orders</NavLink>
          </li>
          <li className="text-center mx-2 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/brands" className="block">Brands</NavLink>
          </li>
          <li className="text-center mx-2 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/wishlist" className="block">Wish List</NavLink>
          </li>
          <li className="text-center  lg:ml-auto lg:mr-3">
              <Link target='_blank' to="https://www.instagram.com/" className="mx-3"><i className="fa-brands fa-instagram hover:text-green-400"></i></Link>
              <Link target='_blank' to="https://www.facebook.com/" className="mx-3"><i className="fa-brands fa-facebook hover:[color:#0aad0a] transition-colors"></i></Link>
              <Link target='_blank' to="https://x.com/" className="mx-3"><i className="fa-brands fa-twitter hover:[color:#0aad0a] transition-colors"></i></Link>
          </li>
            <li className=" text-center mx-auto lg:mx-2 hover:[color:#0aad0a] transition-colors">
                <button onClick={signout}  className="block cursor-pointer">Log out</button>
            </li> 
        </>:
        <>
            <li className="ml-auto text-center mx-2 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/register" className="block">Register</NavLink>
            </li>
            <li className=" text-center mx-2 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/signin" className="block">Log in</NavLink>
            </li>
        </>}
        
      </ul>

    </div>
  </div>
</nav>
  );
}
