import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { authContext } from '../../context/Auth/AuthContext'

const ResetPassword = () => {

    const {setToken} = useContext(authContext);

    const navigate = useNavigate();
    async function resetPassword(values){
        try{
            await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',values)
            navigate('/signin')
            toast.success('Success!')
        }catch(err){
            const error = err.response.data.message;
            toast.error(error?error:"Error!"); 
        }
    }

    const formik = useFormik({
        initialValues:{
            email:"",
            newPassword:"",
        },
        validationSchema:Yup.object({
            email: Yup.string().email('Please enter a Valid Mail').required("Input is Required"),
            newPassword: Yup.string().matches(/^[A-Z].{6,}$/,"password must starts with capital letter and at least 6 characters").required("Input is Required"),
        }),
        onSubmit:(values)=>resetPassword(values),
        
    });
  return (
    <div className='container mt-20'>
        <div className='w-full md:w-1/2 mx-auto'>
        <h2 className='text-2xl'>Reset Password:</h2>

        <form onSubmit={formik.handleSubmit} className="mt-4">

            <div className="relative z-0 w-full mb-5 group">
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email:</label>
            </div>

                    
            {(formik.touched.email&&formik.errors.email)
            ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">Danger alert!</span> {formik.errors.email}
            </div>
            :null}

            <div className="relative z-0 w-full mb-5 group">
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="newPassword" id="floating_newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
                <label htmlFor="floating_newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password</label>
            </div>
                
            {(formik.touched.newPassword&&formik.errors.newPassword)
            ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">Danger alert!</span> {formik.errors.newPassword}
            </div>
            :null}                

            <button type="submit" className="text-white bg-green-500 hover:bg-green-400 cursor-pointer font-medium rounded-lg text-sm w-full sm:w-auto block ml-auto px-8 py-2.5 text-center">Reset</button>

        </form>

        </div>
    </div>
  )
}

export default ResetPassword
