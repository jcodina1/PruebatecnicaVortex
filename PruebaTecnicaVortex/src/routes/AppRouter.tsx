
import { Route, Routes } from 'react-router-dom'

import Landing from '../pages/Landing'
import HomeNewbies from '../pages/newbies/HomeNewbies'
import HomeExperts from '../pages/experts/HomeExperts'
import Login from '../pages/Login'

function AppRouter() {
  

  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/newbies" element={<HomeNewbies/>} />
      <Route path="/experts" element={<HomeExperts/>} /> 
    </Routes>
  )
}

export default AppRouter
