import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { useContext, useState } from "react";
import { authContext } from "../../context/Auth/AuthContext";
import { cartContext } from "../../context/Cart/CartContext";

export function Navbar() {
  const { noOfCartItems } = useContext(cartContext);
  const { token, setToken } = useContext(authContext);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  function signout() {
    localStorage.removeItem("tkn");
    setToken(null);
    navigate("/signin");
    setMenuOpen(false);
  }

  return (
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="w-32 sm:w-36" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </Link>

        <button className="lg:hidden text-gray-600 text-xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-[#0aad0a]! transition">
            Home
          </NavLink>
          <NavLink to="/categories" className="hover:text-[#0aad0a]! transition">
            Categories
          </NavLink>
          <NavLink to="/brands" className="hover:text-[#0aad0a]! transition">
            Brands
          </NavLink>

          {token && (
            <>
              <NavLink to="/cart" className="relative hover:text-[#0aad0a]! transition">
                <i className="fa-solid fa-cart-shopping mr-1"></i>
                <span className="absolute -top-2 -right-3 bg-[#0aad0a]! text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {noOfCartItems}
                </span>
                Cart
              </NavLink>
              <NavLink to="/allorders" className="hover:text-[#0aad0a]! transition">
                Orders
              </NavLink>
              <NavLink to="/wishlist" className="hover:text-[#0aad0a]! transition">
                Wishlist
              </NavLink>
            </>
          )}
        </div>

        {/* Social + Auth Group */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="https://www.instagram.com/" target="_blank" className="hover:text-[#0aad0a]! text-lg">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="https://www.facebook.com/" target="_blank" className="hover:text-[#0aad0a]! text-lg">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="https://x.com/" target="_blank" className="hover:text-[#0aad0a]! text-lg">
            <i className="fa-brands fa-twitter"></i>
          </Link>

          {token ? (
            <button
              onClick={signout}
              className="cursor-pointer px-3 py-1 rounded-lg bg-red-200 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition">
              Logout
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink
                to="/register"
                className="cursor-pointer px-3 py-1 rounded-lg border border-[#0aad0a] text-[#0aad0a] hover:bg-[#0aad0a] hover:text-white! transition font-medium">
                Register
              </NavLink>
              <NavLink
                to="/signin"
                className="cursor-pointer px-3 py-1 rounded-lg bg-[#0aad0a] text-white! hover:bg-green-500 transition font-medium">
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="text-center lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3 text-gray-700 font-medium">
          <NavLink to="/" className="block hover:text-[#0aad0a]" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/categories" className="block hover:text-[#0aad0a]" onClick={() => setMenuOpen(false)}>
            Categories
          </NavLink>
          <NavLink to="/brands" className="block hover:text-[#0aad0a]" onClick={() => setMenuOpen(false)}>
            Brands
          </NavLink>

          {token && (
            <>
              <NavLink to="/cart" className="block hover:text-[#0aad0a]" onClick={() => setMenuOpen(false)}>
                Cart
              </NavLink>
              <NavLink to="/allorders" className="block hover:text-[#0aad0a]" onClick={() => setMenuOpen(false)}>
                Orders
              </NavLink>
              <NavLink to="/wishlist" className="block hover:text-[#0aad0a]" onClick={() => setMenuOpen(false)}>
                Wishlist
              </NavLink>
            </>
          )}

          {/* Social + Auth */}
          <div className="flex items-center space-x-4 mt-4 justify-center">
            <Link to="https://www.instagram.com/" target="_blank" className="hover:text-[#0aad0a] text-lg">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="https://www.facebook.com/" target="_blank" className="hover:text-[#0aad0a] text-lg">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="https://x.com/" target="_blank" className="hover:text-[#0aad0a] text-lg">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </div>

          {token ? (
            <button onClick={signout} className="mt-3 text-red-600 hover:text-red-700 font-semibold">
              Logout
            </button>
          ) : (
            <div className="mt-3 space-y-2">
              <NavLink to="/register" className="block hover:text-[#0aad0a]" onClick={() => setMenuOpen(false)}>
                Register
              </NavLink>
              <NavLink to="/signin" className="block hover:text-[#0aad0a]" onClick={() => setMenuOpen(false)}>
                Login
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

{
  /* <nav className=" bg-slate-100 fixed top-0 left-0 right-0 z-20">
   
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

      <li className="text-center mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
        <NavLink to="/" className="block" aria-current="page">Home</NavLink>
      </li>
      <li className="text-center mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
        <NavLink to="/categories" className="block ">Categories</NavLink>
      </li>
      <li className="text-center mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
        <NavLink to="/brands" className="block">Brands</NavLink>
      </li>
        {token? 
        <>

          <li className="text-center mx-2 mt-2 lg:mt-0 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/cart" className="block">
            <span className='relative'>
              <i className="fa-solid fa-cart-shopping mr-4 text-xl"></i>
              <span className="absolute flex justify-center items-center -top-3/4 mt-1 left-1/4 w-5 h-5 bg-green-500 text-white text-xs rounded-full">{noOfCartItems}</span>
            </span>
              Cart
            </NavLink>
          </li>
          <li className="text-center mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/allorders" className="block">All Orders</NavLink>
          </li>
          <li className="text-center mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/wishlist" className="block">Wish List</NavLink>
          </li>
          <li className="text-center mt-2 lg:mt-0  lg:ml-auto lg:mr-3">
          <Link target='_blank' to="https://www.instagram.com/" className="mx-3"><i className="fa-brands fa-instagram hover:text-green-400"></i></Link>
          <Link target='_blank' to="https://www.facebook.com/" className="mx-3"><i className="fa-brands fa-facebook hover:[color:#0aad0a] transition-colors"></i></Link>
          <Link target='_blank' to="https://x.com/" className="mx-3"><i className="fa-brands fa-twitter hover:[color:#0aad0a] transition-colors"></i></Link>
          </li>
          <li className=" text-center mx-auto lg:mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
              <button onClick={signout}  className="block cursor-pointer">Log out</button>
          </li> 
        </>:
        <>
          <li className="text-center mt-2 lg:mt-0  lg:ml-auto lg:mr-3">
          <Link target='_blank' to="https://www.instagram.com/" className="mx-3"><i className="fa-brands fa-instagram hover:text-green-400"></i></Link>
          <Link target='_blank' to="https://www.facebook.com/" className="mx-3"><i className="fa-brands fa-facebook hover:[color:#0aad0a] transition-colors"></i></Link>
          <Link target='_blank' to="https://x.com/" className="mx-3"><i className="fa-brands fa-twitter hover:[color:#0aad0a] transition-colors"></i></Link>
          </li>
            <li className="text-center mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/register" className="block">Register</NavLink>
            </li>
            <li className=" text-center mx-2 mt-2 lg:mt-0 hover:[color:#0aad0a] transition-colors">
            <NavLink to="/signin" className="block">Log in</NavLink>
            </li>
        </>}
        
      </ul>

    </div>
  </div>
</nav> */
}
