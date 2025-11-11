import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Product from './Pages/Products'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Order from './Pages/Orders'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-10 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/orders' element={<Order />} />
      </Routes>
      
    </div>
  )
}

export default App
