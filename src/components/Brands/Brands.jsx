import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Brands = () => {
  
  async function getAllBrands() {
    return await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  const { isError , error, isLoading , data }= useQuery({
    queryKey:['Brands'],
    queryFn: getAllBrands,
  })

  if(isLoading){
    return(
      <>
    <div className='container row h-screen justify-center items-center text-3xl'>
    <ClimbingBoxLoader color="#0aad0a" />
    </div>
      </>
    )
  }
  
  if(isError){
    return(
      <>
       <div className='h-screen flex items-center justify-center -mt-14'>
          <h3>{error.message}</h3>
        </div>  
      </>
    )
  }

  return (
    <>
      <div className="container mt-20">
        <h1 className='text-5xl font-bold main-color text-center py-5'>Brands</h1>
        <div className='py-7 flex flex-wrap justify-center px-7 md:px-0'>
          {data?.data?.data?.map(function (category, idx) {
            return (
                <div key={idx} className='oveflow-hidden w-full md:w-1/5 p-4'>
                    <div className="bg-white rounded-lg border border-gray-300 hover:shadow-[0px_1px_10px_rgb(10,173,10)] transition duration-500" >
                    <img src={category.image} alt="Category Image" className='rounded-t-lg w-full h-[200px]' />
                    <h1 className='my-5 text-2xl text-center main-color font-medium'>{category.name}</h1>
                    </div>
                </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Brands
