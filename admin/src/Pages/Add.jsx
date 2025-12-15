import React, { useState } from 'react';
import { Loader2, Upload } from 'lucide-react';
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {

  const [loading, setLoading] = useState(false);

  const [image1, setimage1] = useState(false);
  const [image2, setimage2] = useState(false);
  const [image3, setimage3] = useState(false);
  const [image4, setimage4] = useState(false);

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("Men");
  const [SubCategory, setSubCategory] = useState("Topwear");
  const [Bestseller, setBestseller] = useState(false);
  const [Sizes, setSizes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData()

      // const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

      formData.append('name', Name)
      formData.append('description', Description)
      formData.append('price', Price)
      formData.append('category', Category)
      formData.append('subCategory', SubCategory)
      formData.append('bestSeller', Bestseller)
      formData.append('sizes', JSON.stringify(Sizes))

      image1 && formData.append('image1', image1)
      image2 && formData.append('image2', image2)
      image3 && formData.append('image3', image3)
      image4 && formData.append('image4', image4)

      const response = await axios.post("http://localhost:3000/api/product/add", formData);

      if (response.data.success) {
        toast.success(response.data.message)
        alert("Done")
        setName('')
        setDescription('')
        setPrice('')
        setimage1(false)
        setimage2(false)
        setimage3(false)
        setimage4(false)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error)
    } finally {
      setLoading(false);
    }

  }

  return (
    <>
    {
      loading ? <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-12 h-12 animate-spin text-gray-400 mb-4" />
          <p className="text-gray-600 font-medium">Adding products...</p>
        </div> : 
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 border border-gray-200 rounded-xl shadow-sm space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>

      {/* Upload Section */}
      <p className="text-sm font-medium text-gray-700 mb-2">Upload Image</p>
      <div className="flex gap-4">
        <label htmlFor="image1">
          <div className="w-20 h-20 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex justify-center items-center cursor-pointer overflow-hidden">
            {!image1 ? <Upload className="w-6 opacity-40" /> : <img className="w-full h-full object-cover" src={URL.createObjectURL(image1)} alt="" />}
            <input onChange={(e) => setimage1(e.target.files[0])} type="file" id="image1" hidden />
          </div>
        </label>
        <label htmlFor="image2">
          <div className="w-20 h-20 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex justify-center items-center cursor-pointer overflow-hidden">
            {!image2 ? <Upload className="w-6 opacity-40" /> : <img className="w-full h-full object-cover" src={URL.createObjectURL(image2)} alt="" />}
            <input onChange={(e) => setimage2(e.target.files[0])} type="file" id="image2" hidden />
          </div>
        </label>
        <label htmlFor="image3">
          <div className="w-20 h-20 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex justify-center items-center cursor-pointer overflow-hidden">
            {!image3 ? <Upload className="w-6 opacity-40" /> : <img className="w-full h-full object-cover" src={URL.createObjectURL(image3)} alt="" />}
            <input onChange={(e) => setimage3(e.target.files[0])} type="file" id="image3" hidden />
          </div>
        </label>
        <label htmlFor="image4">
          <div className="w-20 h-20 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex justify-center items-center cursor-pointer overflow-hidden">
            {!image4 ? <Upload className="w-6 opacity-40" /> : <img className="w-full h-full object-cover" src={URL.createObjectURL(image4)} alt="" />}
            <input onChange={(e) => setimage4(e.target.files[0])} type="file" id="image4" hidden />
          </div>
        </label>
      </div>

      {/* Product Names */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Product Name</p>
        <input
          type="text"
          placeholder='Product Name...'
          onChange={(e) => setName(e.target.value)}
          value={Name}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>

      {/* Product Description */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Product Description</p>
        <input
          type="text"
          placeholder='Description...'
          onChange={(e) => setDescription(e.target.value)}
          value={Description}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>

      {/* Price */}
      <div className='w-full'>
        <p className="text-sm font-medium text-gray-700 mb-2">Product Price</p>
        <input
          type="number"
          placeholder='Price...'
          onChange={(e) => setPrice(e.target.value)}
          value={Price}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>

      {/* Category */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">Product Size</p>
        <div className="flex gap-3">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div key={size} className="cursor-pointer">
              <p
                onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}
                className={`px-4 py-2 cursor-pointer border ${Sizes.includes(size) ? "bg-gray-800 text-white" : "bg-gray-100"}`}>
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Seller */}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          id='Bestseller'
          onChange={() => setBestseller(prev => !prev)}
          checked={Bestseller}
          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
        />
        <label htmlFor="Bestseller" className="text-sm font-medium text-gray-700 cursor-pointer">
          Add to Bestseller
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button type="submit" disabled={loading} className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-colors">
          {loading ? "ADDING..." : "ADD PRODUCT"}
        </button>
      </div>

    </form> }
    </>
  )
}

export default Add
