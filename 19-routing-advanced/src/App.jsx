import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import NavbarNavigate from './Components/NavbarNavigate'
import Footer from './Components/Footer'
import PageNotFound from './Pages/PageNotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Project from './Pages/Project'
import ProjectDetail from './Pages/ProjectDetail'


const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Navbar />
      <NavbarNavigate />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} >
          <Route path='Men' element={<Men />} />
          <Route path='Women' element={<Women />} />
          <Route path='Kids' element={<Kids />} />
        </Route>
        {/* <Route path='/About/Men' element={<Men />} />
        <Route path='/About/Women' element={<Women />}/> */}
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Project/:id' element={<ProjectDetail />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App