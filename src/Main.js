import React from 'react'
import Navbar from './Navbar'
import Maindiv from './Maindiv'
import DesignWeek from './DesignWeek'
import Parallax from './Parallax'
import FeaturedProduct from './FeaturedProduct'
import LovedProduct from './LovedProduct'
import Client from './Client'
import Company from './Comapny'
import Footer from './Footer'

const Main = () => {
  return (
    <>
       <Navbar/>
      <Maindiv/>
      <DesignWeek/>
      <FeaturedProduct/>
      <LovedProduct/>
      <Client/>
      <Company/>
      <Footer/>  
    </>
  )
}

export default Main
