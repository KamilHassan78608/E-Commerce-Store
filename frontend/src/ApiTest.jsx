import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ListProduct = () => {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:3000";
  const currency = "$";

  // Fetch Data
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
        setFilterList(response.data.products); // Initialize filter list
      } else {
        toast.error("Error fetching products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  // Handle Search
  useEffect(() => {
    if (search === "") {
      setFilterList(list);
    } else {
      const filtered = list.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()) || 
        item.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilterList(filtered);
    }
  }, [search, list]);

  useEffect(() => {
    fetchList();
  }, []);

  // Function to format date
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
        year: 'numeric', month: 'short', day: 'numeric'
    });
  };

  if (loading) {
    return <div className="w-full h-[60vh] flex items-center justify-center text-gray-500">Loading Products...</div>;
  }

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      
      {/* --- Header Section --- */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Product Inventory</h2>
            <p className="text-sm text-gray-500">Manage your store's catalog ({list.length} items)</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
            <input 
                type="text" 
                placeholder="Search by name or category..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors text-sm"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            {/* Search Icon SVG */}
            <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      {/* --- Table Header (Desktop) --- */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-4 items-center py-3 px-4 bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
        <div>Image</div>
        <div>Product Details</div>
        <div>Category</div>
        <div>Price</div>
        <div className="text-center">Stats</div>
        <div className="text-center">Action</div>
      </div>

      {/* --- Product List --- */}
      <div className="flex flex-col">
        {filterList.map((item, index) => (
          <div 
            key={item._id} 
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-4 items-center py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            
            {/* 1. Image */}
            <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-md overflow-hidden border border-gray-200 shadow-sm group relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={item.image[0]} alt={item.name} />
                </div>
            </div>

            {/* 2. Name & Description */}
            <div className="text-center md:text-left">
                <p className="font-semibold text-gray-800 text-base">{item.name}</p>
                <p className="text-xs text-gray-500 mt-1 truncate max-w-xs mx-auto md:mx-0">{item.description}</p>
                {/* Sizes Badges */}
                <div className="flex gap-1 mt-2 justify-center md:justify-start flex-wrap">
                    {item.sizes.map((size, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] bg-gray-100 text-gray-600 border border-gray-300 rounded">{size}</span>
                    ))}
                </div>
            </div>

            {/* 3. Category */}
            <div className="text-center md:text-left">
                <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                    {item.category}
                </span>
                <p className="text-[10px] text-gray-400 mt-1">{item.subCategory}</p>
            </div>

            {/* 4. Price */}
            <div className="text-center md:text-left font-medium text-gray-700">
                {currency}{item.price}
            </div>

            {/* 5. Stats (Best Seller & Date) */}
            <div className="flex flex-col items-center justify-center gap-1">
                {item.best_seller && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-full">
                        ★ Best Seller
                    </span>
                )}
                <p className="text-[10px] text-gray-400">{formatDate(item.date)}</p>
            </div>

            {/* 6. Action (Delete) */}
            <div className="text-center">
               <button 
                onClick={() => {
                    if(window.confirm("Are you sure you want to remove this product?")) {
                        console.log("Delete: ", item._id)
                        // Call removeProduct API here later
                    }
                }} 
                className="group p-2 rounded-full hover:bg-red-50 transition-all"
                title="Remove Product"
               >
                   <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
               </button>
            </div>

          </div>
        ))}

        {/* Empty State */}
        {filterList.length === 0 && !loading && (
            <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;