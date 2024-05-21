import React, { Fragment } from 'react'
import Nav from '../Components/Navbar/Nav'
import Footer from '../Components/Footer/Footer'
import Background from '../Components/Home/background/Background'
import SmallSection from '../Components/Home/smallSection/SmallSection'
import SectionTwo from '../Components/Home/sectionTwo/SectionTwo'
import Loading from '../Components/LoadingScreen/Loading'


const HomeComponents = () => {

  return (
    <Fragment>
      <Loading/>
      <Nav/>
      <Background/>
      <SmallSection/>
      <SectionTwo/>
      <Footer/>
    
    </Fragment>
  )
}

export default HomeComponents
