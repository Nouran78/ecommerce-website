import React, { Fragment } from 'react'
import Nav from '../Components/Navbar/Nav'
import Footer from '../Components/Footer/Footer'
import Error from '../Components/ErrorPage/Error'
import Loading from '../Components/LoadingScreen/Loading'
const ErrorComponent = () => {
  return (
    <Fragment>
      <Loading/>
      <Nav/>
      <Error/>
      <Footer/>
    </Fragment>
  )
}

export default ErrorComponent
