import {Routes,Route} from "react-router-dom"
import HomePage from "../Components/HomePage.jsx/HomePage"
import MensPage from "../Components/MensPage/MensPage"
import BoysPage from "../Components/BoysPage/BoysPage"
import GirlsPage from "../Components/GirlsPage/GirlsPage"
import WomensPage from "../Components/WomensPage/WomensPage"
import React from 'react'
import Admin from "../Pages/Admin"

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