import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Add from './Pages/Add'
import List from './Pages/List'
import Orders from './Pages/Orders'
import Login from './components/Login'

export const BACKEND_URL = import.meta.env.BACKEND_URL

const App = () => {

  const [Token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
    

  useEffect(()=>{
    localStorage.setItem('token', Token);
  }, [Token])

  return (
    <div className='px-10 md:px-20 bg-gray-50 min-h-screen'>
      <ToastContainer />
      {
        !Token
          ?
          <Login setToken={setToken}/>
          :
          <>
            <Navbar settoken={setToken}/>
            <hr />
            <div className='flex w-full'>
              <SideBar />
              <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
                <Routes>
                  <Route path='/add' element={<Add token={Token} />} />
                  <Route path='/list' element={<List token={Token} />} />
                  <Route path='/order' element={<Orders token={Token} />} />
                </Routes>
              </div>
            </div>
          </>
      }

    </div>
  )
}

export default App
