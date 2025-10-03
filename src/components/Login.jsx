import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export const Login = () => {

const navigate = useNavigate()

const[loading,setLoading] = useState(false);

const[email,setEmail] = useState([]);
const[password,setPassword] = useState([]);


const handleSignin = async (e) => {

  e.preventDefault();
  setLoading(true)
  const alldata = {email,password}

  
  try {
    await axios.post("https://mern-auth-coyx.onrender.com/api/login",alldata)
    setLoading(false)
    navigate('/home')
    toast.success("Login Successfully")
  } catch (error) {
    
   if (error.response?.status === 404) {
    toast.error("Your Email is not Registered")
  } 
  else if(error.response?.status === 401){
     toast.error("Invalid Password")
  }
  else {
    toast.error("Something went wrong, try again later")
  }
}


}



  return (
    <div >
      <ToastContainer position="top-right" />
      <form onSubmit={handleSignin} className='min-h-screen flex justify-center items-center p-4'>
        <div className="w-full max-w-sm mx-auto  overflow-hidden bg-white rounded-lg box-shadow dark:bg-gray-800">
    <div className="px-6 py-4">
        

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login</p>

        
            <div className="w-full mt-4">
                <input onChange={(e)=>setEmail(e.target.value)} required className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="input" placeholder="Email Address" aria-label="Email Address" />
            </div>

            <div className="w-full mt-4">
                <input onChange={(e)=>setPassword(e.target.value)} required className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div className="flex items-center justify-center mt-4">
                

                <button type="submit"  className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">  {loading ? "Logging in..." : "Sign In" }   </button>

            </div>
        
    </div>

    
</div>
      </form>
    </div>
  )
}
