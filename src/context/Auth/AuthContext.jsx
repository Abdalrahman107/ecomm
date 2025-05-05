import React, { createContext, useState } from 'react'


export const authContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('tkn'));

  return (
    <authContext.Provider value={{
        token,
        setToken
    }}> 
        {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider
