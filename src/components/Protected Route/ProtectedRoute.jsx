import RequiredLogin from '../../components/RequiredLogin/RequiredLogin'


const ProtectedRoute = ({children}) => {

    const token = localStorage.getItem('tkn')
    
  return (
    <>
      {token?children:<RequiredLogin/>}
    </>
  )
}

export default ProtectedRoute
