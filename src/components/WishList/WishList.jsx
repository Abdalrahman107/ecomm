import { useContext } from 'react'
import { cartContext } from '../../context/Cart/CartContext'
import { WishListContext } from '../../context/WishList/WishList'



const WishList = () => {

    const { products, deleteFromWishList } = useContext(WishListContext)
    const { addProductToCart } = useContext(cartContext)

    return (
        <>
            <section className='container mt-20'>
            <h1 className='text-5xl font-semibold main-color text-center py-5'>Your Wish List</h1>
                <div className='mt-5 p-10 max-w-7xl mx-auto bg-slate-100'>
                    {products.data?.length > 0? products.data.map(function (product, idx) {
                        return <div key={idx}>
                            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mt-10'>
                                <div className='w-2/3 md:w-2/9'>
                                    <img src={product.imageCover} alt="Product Image" className='w-full' />
                                </div>
                                <div className='flex flex-col md:flex-row w-7/9 justify-center md:justify-between items-center px-5 gap-3 mt-3'>
                                        <div className='flex flex-col justify-center items-center gap-3 md:items-start'>
                                            <h1 className='text-wrap max-w-sm font-semibold text-lg'>{product.title}</h1>
                                            <h2 className='font-semibold text-gray-900'>{product.price} EGP</h2>
                                            <button onClick={function(){
                                                deleteFromWishList(product.id)
                                            }} className="px-4 py-1.5 text-sm font-medium !text-white rounded-lg bg-red-600 hover:bg-red-700 cursor-pointer w-fit">
                                                <i className="fa-solid fa-trash font-mono mr-1"></i>
                                                Remove
                                            </button>
                                        </div>
                                        <button onClick={function () { addProductToCart(product.id); }} className="mt-3 md:mt-auto px-4 py-1.5 text-sm font-medium !text-white rounded-lg bg-green-500 hover:bg-green-600 cursor-pointer ">Add to cart</button>
                                </div>
                            </div>
                            <hr className='border-0.1 border-gray-300 my-10'></hr>
                        </div>
                    }) : <h1 className='text-5xl text-center main-color my-6'>Your wish list is empty.</h1>}
                </div>
            </section>
        </>
    )
}

export default WishList




