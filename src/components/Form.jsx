import axios from 'axios';
import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { ToastContainer, toast } from 'react-toastify';

export const Form = () => {

const[income,setIncome] = useState([]);
const[expense,setExpense] = useState([]);
const[investment,setInvestment] = useState([]);
const[date,setDate] = useState([]);

const handleSubmit = async(e)=>{
    e.preventDefault();
    const alldata = {income,expense,investment,date}
    try {
        await axios.post('https://myy-s.onrender.com/display',alldata)
        confetti({
          particleCount:200,
          spread:150,
        })
        toast.success("Added Successfully")
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit} className="container mx-auto p-5  md:mx-8">
            <ToastContainer position="top-right" />
            <div className="grid grid-cols-2  mt-28   md:my-20 gap-5 md:grid-cols-4 ">
               <div className="div1">
                 <input type="text" placeholder="Income" required onChange={(e)=>setIncome(e.target.value)} class="block  mt-2 w-full placeholder-black rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
               </div>
               <div className="div2">
                 <input type="text" placeholder="Expense" required onChange={(e)=>setExpense(e.target.value)} class="block  mt-2 w-full placeholder-black  rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
               </div>
               <div className="div3">
                 <input type="text" placeholder="Investment" required onChange={(e)=>setInvestment(e.target.value)} class="block  mt-2 w-full placeholder-black rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
               </div>
               <div className="div4">
                <div>
    

    <input type="date" placeholder="Date" required onChange={(e)=>setDate(e.target.value)} class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
</div>
               </div>
            </div>
            <div className="button flex justify-center items-center">
                <input type="submit"  value="Submit" className='bg-blue-500 border mt-5 md:mt-0 text-white p-2 px-5 rounded-lg hover:cursor-pointer hover:bg-blue-600 hover:scale-110 transition-all ease-in-out '  />
            </div>
        </form>
    </div>
  )
}
