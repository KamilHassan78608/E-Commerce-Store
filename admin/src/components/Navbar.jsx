import React from 'react'
import logo from '/Users/mac/Documents/Web/E-Commerce-Store/admin/src/assets/logo.png'
import { toast } from 'react-toastify'

const Navbar = ({settoken}) => {

  const handleLogOut = () => {    
    settoken('')
    toast.info("Log Out Successfully")
  }


  return (
    <div className="flex items-center justify-between w-full">
        <img src={logo} alt="Logo" className="h-30 w-30" />
      <button
        className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md cursor-pointer hover:bg-red-600 transition"
        onClick={handleLogOut}
      >
        Log out
      </button>
    </div>

  )
}

export default Navbar
