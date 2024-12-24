import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const Bar = () => {
  return (
    <>
    <div className="pt-28 w-full bg-gray-100 bg-opacity-90 shadow-md py-3">
      <div className="mx-auto px-4 flex space-x-3 text-gray-600 items-center">
        <a href="/" className="text-gray-600 hover:underline">
          Home
        </a>
        <span className='text-xl'><FaChevronRight size={15}/></span>
        <a href="/products" className="text-gray-600 hover:underline">
          Products
        </a>
        <span><FaChevronRight size={15}/></span>
        <span className="text-blue-700">Product</span>
      </div>
    </div>
    </>
  )
}

export default Bar;