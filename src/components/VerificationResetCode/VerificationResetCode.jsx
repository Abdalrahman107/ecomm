import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const VerificationResetCode = () => {

    const navigate = useNavigate();

    async function verifyPassword(resetCode){
        try{
           const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',{
            resetCode
           })
            navigate('/resetpassword')
            toast.success('Success!');
        }catch(err){
            const error = err.response.data.message;
            toast.error(error?error:"Error!"); 
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        verifyPassword(e.target.code.value)
    }

  return (
    <div className='container mt-20'>
        <div className='w-full md:w-1/2 mx-auto'>
        <h2 className='text-2xl'>Please Enter Your Vaerification Code:</h2>

        <form onSubmit={handleSubmit} className="mt-4">

            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="code" id="floating_code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="floating_code" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Code:</label>
            </div>         
   
            <button type="submit" className="text-white bg-green-500 hover:bg-green-400 cursor-pointer font-medium rounded-lg text-sm w-full sm:w-auto block ml-auto px-8 py-2.5 text-center">Verify</button>
        </form>

        </div>
    </div>
  )
}

export default VerificationResetCode
