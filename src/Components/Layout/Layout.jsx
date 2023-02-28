import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbars from '../Navbars/Navbars'

export default function Layout() {
  return (<>
    <Navbars/>
    <Outlet/>
    <Footer/>
  </>
  )
}
