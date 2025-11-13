import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contents/ShopContext'
import { SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sorttype, setSortType] = useState('relavent');

  const toggleCategory = (event) => {
    if(category.includes(event.target.value)){
      setCategory(prev=> prev.filter(item => item !== event.target.value));
    }else{
      setCategory(prev => [...prev, event.target.value]);
    }
  }

  const toggleSubcategory = (event) => {
    if(subcategory.includes(event.target.value)){
      setSubcategory(prev => prev.filter(item => item !== event.target.value))
    }else{
      setSubcategory(prev => [...prev, event.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)
  }

  const applySort = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sorttype) {
      case 'low-high':
        setFilterProducts(filterProductsCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(filterProductsCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subcategory]);

  useEffect(() => {
    applySort();
  }, [sorttype])
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filters */}
      <div className='min-w-60 mt-4'>
        <button
          onClick={() => setShowFilter(!showFilter)}   // ✅ Toggles the filter
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="font-medium">Filters</span>
          {showFilter ? (
            <ChevronUp className="w-4 h-4 text-gray-500 block md:hidden" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500 block md:hidden" />
          )}
        </button>

        {/* Category Box */}
        <div className={`border border-gray-300 rounded-lg py-3 pl-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 font-medium text-xs'>CATEGORY</p>
          <div className='flex flex-col gap-2 font-medium text-sm text-gray-600'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Unisex'} onChange={toggleCategory}/> Both
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>

        {/* Sub-Category */}
        <div className={`border border-gray-300 rounded-lg py-3 pl-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 font-medium text-xs'>TYPE</p>
          <div className='flex flex-col gap-2 font-medium text-sm text-gray-600'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Outerwear'} onChange={toggleSubcategory}/> Outerwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubcategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubcategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Dresses'} onChange={toggleSubcategory}/> Dresses
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4 flex-wrap'>
          <Title text1="All" text2="Collection" />
          <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-300 rounded-lg h-12 outline-0 text-sm px-2'>
            <option value="relavent">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Products */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6'>
          {
            filterProducts.map((item) => (
              <ProductItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
