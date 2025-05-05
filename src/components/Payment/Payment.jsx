import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { cartContext } from '../../context/Cart/CartContext';

const Payment = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('tkn');
    const { setNoOfCartItems, setProductsTotalPrice, setCartProducts } = useContext(cartContext);
    const { id } = useParams();
    
    const [checkInput, setCheckInput] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);

    function checkPhoneInput(tel){
        const regex = /^01[0,1,2,5][0-9]{8}$/;
        return regex.test(tel);
    }

    async function payCash(input){
        try{
            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${id}`,{
                shippingAddress: input
            },{
                headers:{
                token,
            }
            })
            return data.user;
        }catch(err){
            console.log(err);
        }
    }

    async function payOnline(input) {
        try{
            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:5173/`,{
                shippingAddress: input
            },{
                headers:{
                token,
            }
            })
            window.open(data.session.url);
        }catch(err){
            console.log(err);
        }
    }

    async function handleSubmit(e){
        e.preventDefault();

        const form = e.target;
        const input = {
            details: form.details.value,
            phone: form.phone.value,
            city: form.city.value,
        };

        const isValid = checkPhoneInput(input.phone);
        setCheckInput(!isValid);

        if (!isValid || !paymentMethod) {
            return;
        }

        if (paymentMethod === 'cash') {
            await payCash(input);
            navigate("/allorders");
        } else if (paymentMethod === 'online') {
            await payOnline(input);
        }
        
        setNoOfCartItems(0);
        setProductsTotalPrice(0);
        setCartProducts([]);
            
    }



  return (
    <div className='container mt-20'>
        <div className='w-full md:w-1/2 mx-auto'>
        <h2 className='text-2xl'>Payment Order:</h2>

        <form onSubmit={handleSubmit} className="pay-form mt-4">

            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="details" id="floating_details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="floating_details" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details:</label>
            </div>

            
            <div className="relative z-0 w-full mb-5 group">
                <input  type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone:</label>
            </div>

            {checkInput
            ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">Danger alert!</span> Please Enter a valid Phone Number
            </div>
            :null}
                
           
            <div className="relative z-0 w-full mb-10 group">
                <input type="text" name="city" id="floating_city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="floating_city" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City:</label>
            </div>
                        

            <button type="submit" onClick={() => setPaymentMethod('cash')} className="text-white bg-green-500 hover:bg-green-400 cursor-pointer font-medium rounded-lg text-sm px-8 py-2.5 text-center">Send Cash Order</button>

            <button type="submit" onClick={() => setPaymentMethod('online')} className="text-white bg-green-500 hover:bg-green-400 cursor-pointer font-medium rounded-lg text-sm ml-4 px-8 py-2.5 text-center">Pay Online</button>
        </form>

        </div>
    </div>
  )
}

export default Payment
