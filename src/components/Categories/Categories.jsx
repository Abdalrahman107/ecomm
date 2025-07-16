import React from 'react'
import { Link } from 'react-router-dom'
import { useCategories } from '../../Hooks/useCategories'
import NotFound from '../NotFound/NotFound'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'




const Categories = () => {

  const { data: categoriesData , isError: categoriesIsError, isLoading: categoriesIsLoading } = useCategories();
  const categories = categoriesData?.data.data;

  if(categoriesIsLoading){
    return (
      <div className='container row h-screen justify-center items-center text-3xl'>
        <ClimbingBoxLoader color="#0aad0a" />
      </div>
    )
  }
  if(categoriesIsError){
    return (
      <>
        <NotFound error='Can not Load Categories'/>
      </>
    )
  }
  return (
    <div className='container row items-center mt-18'>
      {categories?.map((category)=>{
        return (
        <Link key={category._id} to={`/categoryproducts/${category._id}`} className='w-full md:w-1/3 p-4 '>
          <div className='border border-gray-300 rounded-lg hover:shadow-[0px_1px_10px_rgb(10,173,10)] transition duration-500'>
            <img src={category.image} alt="" className='rounded-t-lg object-cover w-full h-70' />
            <h4 className='p-4 text-center main-color text-2xl'>{category.name}</h4>
          </div>
        </Link>
        )
      })}
    </div>
  )
}

export default Categories
