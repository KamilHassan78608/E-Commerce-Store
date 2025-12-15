import React from 'react'
import { NavLink } from 'react-router-dom'
import { Plus, List, ShoppingCart } from 'lucide-react'

const SideBar = () => {
  return (
    <div className="w-18 md:w-64 bg-white border-r border-gray-200 px-4 py-6">
      
      <div className="flex flex-row md:flex-col gap-4">

        <NavLink 
          to="/add" 
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? "bg-black text-white shadow-md" : "text-gray-600 hover:bg-gray-100 hover:text-black"}`}
        >
          <Plus size={20} />
          <p className="hidden md:block font-medium">Add Items</p>
        </NavLink>

        <NavLink 
          to="/list" 
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? "bg-black text-white shadow-md" : "text-gray-600 hover:bg-gray-100 hover:text-black"}`}
        >
          <List size={20} />
          <p className="hidden md:block font-medium">List Items</p>
        </NavLink>

        <NavLink 
          to="/order" 
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? "bg-black text-white shadow-md" : "text-gray-600 hover:bg-gray-100 hover:text-black"}`}
        >
          <ShoppingCart size={20} />
          <p className="hidden md:block font-medium">Orders</p>
        </NavLink>

      </div>

    </div>
  )
}

export default SideBar