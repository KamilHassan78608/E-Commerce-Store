import React from 'react'
import { NavLink } from 'react-router-dom'
import { Plus, List, ShoppingCart } from 'lucide-react'

const SideBar = () => {
  const linkBase =
    "flex items-center rounded-lg border shadow-xl transition font-medium";

  return (
    <div className="h-screen flex flex-col p-4" >
      <div className="flex flex-col gap-3 mt-4">

        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive
              ? `${linkBase} bg-gray-900 text-white`
              : `${linkBase} text-gray-700 hover:bg-gray-100 hover:text-black`
          }
        >
          {/* Small screens = center | md screens = normal layout */}
          <div className="flex items-center justify-center w-full md:w-auto md:justify-start gap-3 px-2 py-3 md:px-4">
            <Plus size={20} />
            <p className="hidden md:block">Add</p>
          </div>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive
              ? `${linkBase} bg-gray-900 text-white`
              : `${linkBase} text-gray-700 hover:bg-gray-100 hover:text-black`
          }
        >
          <div className="flex items-center justify-center w-full md:w-auto md:justify-start gap-3 px-2 py-3 md:px-4">
            <List size={20} />
            <p className="hidden md:block">List</p>
          </div>
        </NavLink>

        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive
              ? `${linkBase} bg-gray-900 text-white`
              : `${linkBase} text-gray-700 hover:bg-gray-100 hover:text-black`
          }
        >
          <div className="flex items-center justify-center w-full md:w-auto md:justify-start gap-3 px-2 py-3 md:px-4">
            <ShoppingCart size={20} />
            <p className="hidden md:block">Order</p>
          </div>
        </NavLink>

      </div>
    </div>
  )
}

export default SideBar
