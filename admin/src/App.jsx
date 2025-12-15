import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Add from './Pages/Add'
import List from './Pages/List'
import Orders from './Pages/Orders'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer />
    <div className='px-4 md:px-20'>
     <Navbar />
     <SideBar />
      <Routes>
        <Route path='/add' element={<Add />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
    </>
  )
}

export default App
