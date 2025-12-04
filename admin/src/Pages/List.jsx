import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Trash2, Loader2, Search } from 'lucide-react'

const List = ({token}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [isError, setIsError] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [deletingId, setDeletingId] = useState(null)

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true)
    setError("")
    try {
      const response = await axios.get("http://localhost:3000/api/product/list")
      
      if (response.data.success) {
        setProducts(response.data.products || [])
      } else {
        setError(response.data.message || "Failed to fetch products")
      }
    } catch (err) {
      console.log("Error fetching products:", err)
      setError(err.message || "Failed to fetch products")
    } finally {
      setLoading(false)
    }
  }

  // Delete product
  const deleteProduct = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return

    setDeletingId(productId)
    setMessage("")
    
    try {
      const response = await axios.post(
        "http://localhost:3000/api/product/remove",
        { id: productId },
        { headers: { token } }
      )

      if (response.data.success) {
        setMessage("✓ Product deleted successfully!")
        setIsError(false)
        setProducts(products.filter(p => p._id !== productId))
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Error: " + (response.data.message || "Failed to delete"))
        setIsError(true)
      }
    } catch (err) {
      console.log("Error deleting product:", err)
      setMessage("Error: " + (err.response?.data?.message || err.message))
      setIsError(true)
    } finally {
      setDeletingId(null)
    }
  }

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product._id?.includes(searchTerm)
  )

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Products List</h2>

      {/* Message Alert */}
      {message && (
        <div className={`p-4 rounded-lg text-sm font-medium mb-4 ${
          isError 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {message}
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-6 flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by product name, category, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <button
          onClick={fetchProducts}
          className="px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
        >
          Refresh
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-12 h-12 animate-spin text-gray-400 mb-4" />
          <p className="text-gray-600 font-medium">Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-700 font-medium mb-4">{error}</p>
          <button
            onClick={fetchProducts}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredProducts.length === 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-600 font-medium">
            {searchTerm ? "No products found matching your search" : "No products available"}
          </p>
        </div>
      )}

      {/* Products Table */}
      {!loading && !error && filteredProducts.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Image</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Sub Category</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Price</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Sizes</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Bestseller</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  {/* Product Image */}
                  <td className="px-4 py-3">
                    {product.image && product.image[0] ? (
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-xs">
                        No Image
                      </div>
                    )}
                  </td>

                  {/* Product Name */}
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-500">{product._id}</p>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{product.sub_category}</p>
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {product.subCategory}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{product.subCategory}</p>
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-800">${product.price}</p>
                  </td>

                  {/* Sizes */}
                  <td className="px-4 py-3">
                    <div className="flex gap-1 flex-wrap">
                      {product.sizes && product.sizes.length > 0 ? (
                        product.sizes.map((size, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                            {size}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-sm">-</span>
                      )}
                    </div>
                  </td>

                  {/* Bestseller */}
                  <td className="px-4 py-3 text-center">
                    {product.best_seller ? (
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        Yes
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                        No
                      </span>
                    )}
                  </td>

                    {/* Date */}
                  <td className="px-4 py-3 text-center">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">{product.date}</span>
                  </td>
                  

                  {/* Delete Button */}
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      disabled={deletingId === product._id}
                      className={`p-2 rounded-md transition inline-flex items-center justify-center ${
                        deletingId === product._id
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-red-100 text-red-600 hover:bg-red-600 hover:text-white'
                      }`}
                      title="Delete product"
                    >
                      {deletingId === product._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Summary */}
      {!loading && !error && products.length > 0 && (
        <div className="mt-6 text-sm text-gray-600 text-center">
          Showing {filteredProducts.length} of {products.length} products
        </div>
      )}
    </div>
  )
}

export default List
