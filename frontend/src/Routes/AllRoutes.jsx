import {Routes,Route} from "react-router-dom"

import MensPage from "../Pages/MensPage"
import BoysPage from "../Pages/BoysPage"
import GirlsPage from "../Pages/GirlsPage"
import WomensPage from "../Pages/WomensPage"
import React from 'react'
import Admin from "../Pages/Admin"
import HomePage from "../Pages/HomePage"

const AllRoutes = () => {
  return (
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/boys" element={<BoysPage />} />
        <Route path="/girls" element={<GirlsPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/admin/*" element={<Admin/>} />
     </Routes>
  )
}

export default AllRoutes