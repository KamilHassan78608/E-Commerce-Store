import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { ShopContext } from '../contents/ShopContext'
import { Search, X } from 'lucide-react';

const Searchbar = () => {

    const { search, setsearch, showsearch, setshowsearch } = useContext(ShopContext);
    const [visible, setvisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!location.pathname.includes('collection')) {
            setshowsearch(false)
        }
    }, [location])
    
  return showsearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
      <input
        type="text" 
        placeholder='Search...' 
        className='flex-1 outline-none bg-inherit text-sm' 
        value={search}
        onChange={(e) => setsearch(e.target.value)}
       />
       <Search className='cursor-pointer'/>
      </div>
      <X className='inline cursor-pointer' onClick={(e) => setshowsearch(!showsearch)}/>
    </div>
  ) : null
}

export default Searchbar
