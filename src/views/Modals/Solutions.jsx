import React from 'react'
import Navbar from "../../components/Navbar";

const Solutions = () => {
  return (
    <div 
      className="w-full h-full opacity-35 shadow-[0px_10px_10px_rgba(0,0,0,0.2)] fixed z-50"
        style={{
          background: "rgba(0,34,62,0.85)",
        }}
      >
        <Navbar/>
        <div className='text-center text-3xl text-white'>
          Solution
        </div>
      </div>    
  )
}

export default Solutions