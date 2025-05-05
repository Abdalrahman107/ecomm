import React from 'react'
import errImg from '../../assets/images/error.svg'

const NotFound = ({ error }) => {
  return (
    <div className='container flex flex-col justify-center items-center min-h-screen'>
      {error?<h1 className='text-2xl mb-4 text-red-500'>{error} !!</h1>:""}
      <img src={errImg} alt="" />
    </div>
  )
}

export default NotFound
