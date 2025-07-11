import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { authContext } from '../../context/Auth/AuthContext'

const Register = () => {
    const navigate = useNavigate();
    async function signup(values){
        try{
           await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
            toast.success('Success!')
            setTimeout(() => {
                navigate('/signin')
            }, 1000);
        }catch(err){
            const error =  err.response.data.message;
            // const error = err.response.data.errors.msg || err.response.data.message;
            toast.error(error?error:"Error!"); 
        }
    }

    const formik = useFormik({
        initialValues:{
            name: "",
            email:"",
            password:"",
            rePassword:"",
            phone:""
        },
        validationSchema:Yup.object({
            name: Yup.string().min(6,"Min. Chars is 6").max(15," Max. chars is 15").required("Input is Required"),
            email: Yup.string().email('Please enter a Valid Mail').required("Input is Required"),
            password: Yup.string()
            .matches(/^[A-Za-z0-9]{6,}$/, "Password must be at least 6 characters")
            .required("Input is Required"),
            rePassword: Yup.string().oneOf([Yup.ref('password')], "Passwords Must Match").required("Input is Required"),
            phone: Yup.string().matches(/^01[0,1,2,5][0-9]{8}$/,"Must be a valid Phone Number").required("Input is Required"),
        }),
        onSubmit:(values)=>signup(values),
        
    });
  
    return (
    <div className='container relative mt-20'>
        <div className='w-full md:w-1/2 mx-auto'>
        <h2 className='text-2xl'>Register Now:</h2>

    <form className="mt-4" onSubmit={formik.handleSubmit}>

        <div className="relative z-0 w-full mb-5 group">
            <input  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name:</label>
        </div>

        {(formik.touched.name&&formik.errors.name)
        ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span className="font-medium">Danger alert!</span> {formik.errors.name}
        </div>
        :null}



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
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
                
        {(formik.touched.password&&formik.errors.password)
        ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span className="font-medium">Danger alert!</span> {formik.errors.password}
        </div>
        :null}




        <div className="relative z-0 w-full mb-5 group">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="Password" name="rePassword" id="floating_rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none  focus:border-green-600 peer" placeholder=" " />
            <label htmlFor="floating_rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">rePassword</label>
        </div>

                
        {(formik.touched.rePassword&&formik.errors.rePassword)
        ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span className="font-medium">Danger alert!</span> {formik.errors.rePassword}
        </div>
        :null}




        <div className="relative z-0 w-full mb-5 group">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  focus:border-green-600 peer" placeholder=" " />
            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
        </div>
                
        {(formik.touched.phone&&formik.errors.phone)
        ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span className="font-medium">Danger alert!</span> {formik.errors.phone}
        </div>
        :null}




        <button type="submit" className="text-white bg-green-500 hover:bg-green-400 cursor-pointer font-medium rounded-lg text-sm w-full sm:w-auto block ml-auto px-8 py-2.5 text-center">Register</button>
    </form>

        </div>
    </div>
  )
}

export default Register
