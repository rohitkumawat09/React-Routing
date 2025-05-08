import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './header'
import Footer from './footer'
function home() {
  return (
    <>
    <Headers />
    <Outlet/>
    <Footer />
    </>
  )
}

export default home