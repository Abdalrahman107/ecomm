import { useContext } from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import CategorySlider from '../CategorySlider/CategorySlider'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import NotFound from '../NotFound/NotFound'
import { cartContext } from '../../context/Cart/CartContext'
import { useProducts } from '../../Hooks/useProducts'
import { useCategories } from '../../Hooks/useCategories'
import ProductCard from '../ProductCard/ProductCard'
import { WishListContext } from '../../context/WishList/WishList'


const Home = () => {

  const { addProductToCart } = useContext(cartContext);

  const { products, addProductToWishList } = useContext(WishListContext)

 
  const { isLoading: productsIsLoading , isError: productsIsError, data: productsData } = useProducts()

  const allProducts = productsData?.data.data;



  const { data: categoriesData , isError: categoriesIsError, isLoading: categoriesIsLoading } = useCategories()

  const categories = categoriesData?.data.data;

  if(productsIsLoading | categoriesIsLoading){
    return (
      <div className='container row h-screen justify-center items-center text-3xl'>
        <ClimbingBoxLoader color="#0aad0a" />
      </div>
    )
  }
  if(productsIsError | categoriesIsError){
    return (
      <>
        <NotFound error='Can not Load Products'/>
      </>
    )
  }
  
  return (
    <>
    <div className='container mt-14'>
      <HomeSlider/>
      <CategorySlider data={categories} />
      <ProductCard products={allProducts} addtocart={addProductToCart} wishListProducts={products} addToWishList={addProductToWishList}/>
    </div>
    
    </>
  )
}

export default Home



