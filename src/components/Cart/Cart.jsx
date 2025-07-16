import { useContext, useState } from 'react';
import { cartContext } from '../../context/Cart/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    noOfCartItems,
    productsTotalPrice,
    cartProducts,
    removeCartItem,
    updateCartItemQty,
    clearCart,
  } = useContext(cartContext);

  const [clickedProductId, setClickedProductId] = useState({ id: null, type: null });

  return (
    <div className="container mx-auto px-4 py-10 bg-gray-50 mt-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <p className="text-lg font-medium bg-green-500 text-white px-3 py-1 rounded-lg">
          Total Price: <span className="">{productsTotalPrice} EGP</span>
        </p>
        <p className="text-lg font-medium bg-green-500 text-white px-3 py-1 rounded-lg">
          Items in Cart: <span className="">{noOfCartItems}</span>
        </p>
      </div>

      {cartProducts.products?.length > 0 ? (
        <>
          <div className="grid gap-6">
            {cartProducts.products.map((product) => (
              <div
                key={product.product.id}
                className="flex flex-col md:flex-row items-center rounded-2xl p-4 shadow bg-white"
              >
                <div className="w-full md:w-2/12 mb-4 md:mb-0">
                  <img
                    src={product.product.imageCover}
                    alt="product"
                    className="rounded-lg w-full h-70 md:h-24 object-cover"
                  />
                </div>

                <div className="flex-1 md:px-4 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.product.title}
                  </h3>
                  <p className="text-gray-600 mt-2">Price: {product.price} EGP</p>
                  <button
                    onClick={async () => {
                      setClickedProductId({ id: product.product._id, type: 'remove' });
                      await removeCartItem(product.product._id);
                      setClickedProductId({ id: null, type: null });
                    }}
                    className="cursor-pointer mt-4 inline-flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    {clickedProductId.id === product.product.id && clickedProductId.type === 'remove' ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      <>
                        <i className="fa-solid fa-trash-can"></i> Remove
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <button
                    onClick={async () => {
                      setClickedProductId({ id: product.product.id, type: 'dec' });
                      await updateCartItemQty(product.product.id, product.count - 1);
                      setClickedProductId({ id: null, type: null });
                    }}
                    className="cursor-pointer px-3 py-1 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-200"
                  >
                    {clickedProductId.id === product.product.id && clickedProductId.type === 'dec' ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      '-' )}
                  </button>
                  <span className="text-lg font-medium text-gray-800">{product.count}</span>
                  <button
                    onClick={async () => {
                      setClickedProductId({ id: product.product._id, type: 'inc' });
                      await updateCartItemQty(product.product.id, product.count + 1);
                      setClickedProductId({ id: null, type: null });
                    }}
                    className="cursor-pointer px-3 py-1 text-white bg-green-500 rounded-full hover:bg-green-300"
                  >
                    {clickedProductId.id === product.product.id && clickedProductId.type === 'inc' ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      '+' )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              onClick={async () => {
                setClickedProductId({ id: true, type: 'clear' });
                await clearCart();
                setClickedProductId({ id: null, type: null });
              }}
              className="cursor-pointer px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
            >
              {clickedProductId.id && clickedProductId.type === 'clear' ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                'Clear Cart'
              )}
            </button>

            <Link
              to={`/payment/${cartProducts._id}`}
              className="cursor-pointer px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white! rounded-lg text-sm"
            >
              Check Out
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-3xl text-gray-600">Your cart is empty!</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
