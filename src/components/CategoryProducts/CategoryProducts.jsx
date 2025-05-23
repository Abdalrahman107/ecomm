import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../../Hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import NotFound from '../NotFound/NotFound';
import { cartContext } from '../../context/Cart/CartContext';
import { WishListContext } from '../../context/WishList/WishList';

const CategoryProducts = () => {

  const { products, addProductToWishList } = useContext(WishListContext)
  const { id } = useParams();

    const { addProductToCart } = useContext(cartContext);
  

  const { isLoading: productsIsLoading , isError: productsIsError, data: productsData } = useProducts();

  const newProducts = productsData?.data.data;

  let categoryProducts = newProducts?.filter((product)=>product.category._id === id);

  if(categoryProducts?.length === 0){
    categoryProducts =  newProducts.splice(0,10);
  }

  if(productsIsLoading){
    return (
      <div className='container row h-screen justify-center items-center text-3xl'>
        <ClimbingBoxLoader color="#0aad0a" />
      </div>
    )
  }
  if(productsIsError ){
    return (
      <>
        <NotFound error='Can not Load Products'/>
      </>
    )
  }

  return (
    <div className='container mt-18'>
        <ProductCard products={categoryProducts} addtocart={addProductToCart} wishListProducts={products} addToWishList={addProductToWishList}/>
    </div>
  )
}

export default CategoryProducts
