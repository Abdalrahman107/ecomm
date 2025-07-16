// 


import { useContext } from 'react';
import { cartContext } from '../../context/Cart/CartContext';
import { WishListContext } from '../../context/WishList/WishList';

const WishList = () => {
  const { products, deleteFromWishList } = useContext(WishListContext);
  const { addProductToCart } = useContext(cartContext);

  if (products?.data?.length < 1) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl text-green-500">There is no items yet!</h2>
      </div>
    );
  }

  return (
    <section className="container mt-20">
      <h1 className="text-4xl sm:text-4xl font-bold text-[#0aad0a] py-5">Your Wish List</h1>

      <div className="mt-6 p-5 sm:p-10 max-w-7xl mx-auto bg-white shadow-md rounded-xl">
        {products.data?.map((product, idx) => (
          <div key={idx} className="mb-10 border-b border-gray-200 pb-6 last:border-none">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Image */}
              <div className="w-full md:w-1/4">
                <img src={product.imageCover} alt="Product" className="w-full h-70 md:h-48 object-cover rounded-lg shadow-sm" />
              </div>

              {/* Details + Actions */}
              <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                {/* Product Info */}
                <div className="text-center md:text-left">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-gray-600 mt-2">{product.price} EGP</p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 md:items-end w-full md:w-auto">
                  <button
                    onClick={() => deleteFromWishList(product.id)}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition"
                  >
                    <i className="fa-solid fa-trash"></i> Remove
                  </button>
                  <button
                    onClick={() => addProductToCart(product.id)}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition"
                  >
                    <i className="fa-solid fa-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WishList;
