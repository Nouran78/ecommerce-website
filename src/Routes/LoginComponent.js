import React, { Fragment } from 'react'
import LogIn from '../Components/Login/LogIn'
import Nav from '../Components/Navbar/Nav'
import Footer from '../Components/Footer/Footer'

const LoginComponent = () => {
  return (
    <Fragment>
<Nav/>
      <LogIn/>
<Footer/>
    </Fragment>
  )
}

export default LoginComponent
