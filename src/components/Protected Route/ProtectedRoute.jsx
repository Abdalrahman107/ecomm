import React from 'react'

import NotFound from '../NotFound/NotFound'



const ProtectedRoute = ({children}) => {

    const token = localStorage.getItem('tkn')
    
  return (
    <>
      {token?children:<NotFound/>}
    </>
  )
}

export default ProtectedRoute
