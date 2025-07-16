import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/Auth/AuthContext';

const ProductCard = ({ products, addtocart, wishListProducts, addToWishList }) => {
  const { token } = useContext(authContext);
  const [clickedProductId, setClickedProductId] = useState(null);
  const [wishProductId, setwishProductId] = useState(null);
  const navigate = useNavigate();

  let favourites = new Array(wishListProducts.data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-8">
      {products?.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-xl hover:shadow-4xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105"
        >
          <Link to={`/productdetails/${product._id}`} className="block">
            <img
              src={product.imageCover}
              alt={product.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category.name}</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-1 truncate">
                {product.title.split(' ', 2).join(' ')}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-700 mt-2">
                <span className="font-semibold">{product.price} EGP</span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  {product.ratingsAverage}
                </span>
              </div>
            </div>
          </Link>

          <div className="justify-end flex items-center gap-2 px-4 pb-4 mt-1">
            <button
              onClick={async () => {
                if (token) {
                  setClickedProductId(product.id);
                  await addtocart(product.id);
                  setClickedProductId(null);
                } else {
                  navigate('/requiredlogin');
                }
              }}
              className="cursor-pointer py-2 px-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition"
            >
              {clickedProductId === product.id ? (
                <i className="fa-solid fa-spinner fa-spin text-lg"></i>
              ) : (
                <i class="fa-solid fa-cart-shopping text-lg"></i>
              )}
            </button>

            <button
              onClick={async () => {
                if (token) {
                  setwishProductId(product.id);
                  await addToWishList(product.id);
                  setwishProductId(null);
                } else {
                  navigate('/requiredlogin');
                }
              }}
              className="cursor-pointer py-2 px-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
            >
              {wishProductId === product.id ? (
                <i className="fa-solid fa-spinner fa-spin text-lg"></i>
              ) : (
              favourites[0]?.some((item) => item.id.includes(product.id)) && (
              <i className="fa-solid fa-heart text-red-600 text-lg"></i>
              ) || <i class="fa-solid fa-heart text-lg"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
