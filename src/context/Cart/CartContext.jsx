import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const cartContext = createContext();



const CartContextProvider = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('tkn');

    const [noOfCartItems, setNoOfCartItems] = useState(0);
    const [productsTotalPrice, setProductsTotalPrice] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    async function addProductToCart(id){
        try{
            setIsLoading(true);
            await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
                    productId: id,
                },
            {
                headers:{
                    token
                }
            });
            await getCartProducts();
            setIsLoading(false);
        }catch(err){
            console.log(err);
            setIsLoading(false)
        }
    }
    async function getCartProducts(){
        try{
            const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',
                {
                headers:{
                    token
                }
            });
            setNoOfCartItems(data.numOfCartItems);
            setProductsTotalPrice(data.data.totalCartPrice);
            setCartProducts(data.data);
        }catch(err){
            navigate('/notfound');
        }
    }
    async function removeCartItem(id){
        try{
            const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
                {
                headers:{
                    token
                }
            });           
            setNoOfCartItems(data.numOfCartItems);
            setProductsTotalPrice(data.data.totalCartPrice);
            setCartProducts(data.data);
        }catch(err){
            navigate('/notfound');
        }
    }
    async function updateCartItemQty(id, count){
        try{
            const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
                    count
                },
                {
                headers:{
                    token
                }
            });   
            setNoOfCartItems(data.numOfCartItems);
            setProductsTotalPrice(data.data.totalCartPrice);
            setCartProducts(data.data);
        }catch(err){
            navigate('/notfound');
        }
    }
    async function clearCart(){
        try{
            const { data } = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',
                {
                headers:{
                    token
                }
            });   
            setNoOfCartItems(0);
            setProductsTotalPrice(0);
            setCartProducts([]);
        }catch(err){
            navigate('/notfound');
        }
    }


    useEffect(()=>{
        if(token){
            getCartProducts();
        }
    },[])

  return (
    <cartContext.Provider value={{addProductToCart, noOfCartItems, productsTotalPrice, cartProducts, removeCartItem, updateCartItemQty, clearCart, isLoading, setNoOfCartItems, setProductsTotalPrice, setCartProducts}}>
      {children}
    </cartContext.Provider>
  )
}




export default CartContextProvider
