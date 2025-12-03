import axios from 'axios'
import React, { useState } from 'react'
import { BACKEND_URL } from '../App';
import { toast } from 'react-toastify';

const Login = ({settoken}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleOnsubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post('http://localhost:3000/api/user/admin', {email, password});
      if(response.data.success){
        settoken(response.data.token)
        toast.success("Succesfully Login")
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
  <div className='w-full max-w-xl p-8 md:p-16 flex flex-col justify-between rounded-2xl shadow-2xl bg-gray-200'>
    <h1 className='text-3xl md:text-5xl font-bold mb-5 text-center md:text-left'>
      Admin Panel
    </h1>
    <form onSubmit={handleOnsubmit} className="w-full">
      <div className='my-4 flex flex-col justify-between gap-2 w-full'>
        <p className='text-lg md:text-xl font-bold text-gray-700'>Email Address</p>
        <input 
          type="text" 
          placeholder='name@email.com' 
          required
          onChange={(e)=>setemail(e.target.value)}
          value={email}
          className='text-lg md:text-2xl p-3 md:p-4 w-full border-2 border-gray-100 rounded-2xl shadow-lg focus:outline-none focus:border-gray-400 transition-colors'
        />
      </div>
      <div className='my-4 flex flex-col justify-between gap-2 w-full'>
        <p className='text-lg md:text-xl font-bold text-gray-700'>Password</p>
        <input 
          type="password" 
          placeholder='password' 
          required
          onChange={(e)=>setpassword(e.target.value)}
          value={password}
          className='text-lg md:text-2xl p-3 md:p-4 w-full border-2 border-gray-100 rounded-2xl shadow-lg focus:outline-none focus:border-gray-400 transition-colors'
        />
      </div>
      <button 
        type='submit'
        className='mt-4 w-full py-3 md:py-5 px-2 rounded-xl bg-gray-950 text-white cursor-pointer hover:bg-gray-800 text-xl md:text-2xl font-semibold transition-all active:scale-95'
      >
        Login
      </button>
    </form>
  </div>
</div>
    </>
  )
}

export default Login
