import React, { useState } from 'react'
import { motion } from "framer-motion";

const Login = () => {

  const [currentState, setcurrentState] = useState("Login");

  const handleSubmission = async (event) => {
    event.preventDefault();
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}// animate when visible
      viewport={{ once: true, amount: 0.2 }}  // animate once only
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <form onSubmit={handleSubmission} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-8 mb-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2'>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      <input type="name" className='w-full px-3 py-2 border border-gray-800 rounded-2xl' placeholder='Name' required />
      {currentState === "Login" ? '' :<input type="email" className='w-full px-3 py-2 border border-gray-800 rounded-2xl' placeholder='Email' required />}
      <input type="password" className='w-full px-3 py-2 border border-gray-800 rounded-2xl' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm -mt-2 text-gray-500'>
        <p className='cursor-pointer'>Forget Password?</p>
        {
          currentState === "Login" 
          ? <p onClick={()=>setcurrentState("Sign Up")} className='cursor-pointer'>Create an Account</p> 
          : <p onClick={()=>setcurrentState("Login")} className='cursor-pointer'>Login Here?</p>
        }
      </div>
      <button 
        className='bg-gray-700 px-8 py-3 mt-4 text-white cursor-pointer font-bold active:bg-black rounded-xl shadow-2xl transition-all duration-300 hover:-translate-y-1'>
          {currentState === 'Login' ? "Sign In" : "Sign Up"}
      </button>
    </form>
    </motion.div>
  )
}

export default Login
