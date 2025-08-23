import React, { useState } from 'react'
import axios from 'axios'
import { GiTakeMyMoney } from "react-icons/gi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Pie } from './Pie';
export const Home = () => {

 const[expense,setExpense] = useState([]);

 try {
   axios.get('https://myyys.onrender.com/display/new').then((res)=>setExpense(res.data))
 } catch (error) {
  console.log(error)
 }


  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mx-5 mt-15  md:grid-cols-3 ">
        <div className='p-5 py-11 border bg-green-600 text-white rounded-xl ' >
           <div className="flex justify-between">
              <div className='flex gap-3  '>
              <h1 className='font-bold text-xl '>INCOME</h1>
              <GiTakeMyMoney  className=' text-2xl font-bold mt-1' />
            </div>
            <div>
              <h1 className='font-bold text-xl '>{expense.income}</h1>
            </div>
           </div>
        </div>
        <div className='p-5 py-11 border  bg-red-600 text-white rounded-xl ' >
             <div className="flex justify-between">
              <div className='flex gap-3  '>
              <h1 className='font-bold text-xl '>EXPENSE</h1>
              <FaArrowTrendDown  className=' text-2xl font-bold mt-1' />
            </div>
            <div>
              <h1 className='font-bold text-xl '>{expense.expense}</h1>
            </div>
           </div>
        </div>
        <div className='p-5 py-11 border bg-blue-600 text-white rounded-xl ' >
            <div className="flex justify-between">
              <div className='flex gap-3  '>
              <h1 className='font-bold text-xl '>INVESTMENT</h1>
              <FaArrowTrendUp  className=' text-2xl font-bold mt-1' />
            </div>
            <div>
              <h1 className='font-bold text-xl '>{expense.investment}</h1>
            </div>
           </div>
        </div>
      </div>
      <div className="flex justify-center my-20 items-center">
        <Pie a={expense.income} b={expense.expense} c={expense.investment} />
      </div>
    </div>
  )
}
