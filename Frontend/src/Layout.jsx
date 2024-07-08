import React from 'react'
import Navbar from "./Components/navbar"
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout