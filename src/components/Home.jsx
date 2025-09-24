import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GiTakeMyMoney } from "react-icons/gi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Pie } from './Pie';
export const Home = () => {

 const[expenses,setExpenses] = useState([]);

 const fetchdata = () => {
  try {
   axios.get('https://myy-s.onrender.com/display/newone').then((res)=>setExpenses(res.data))
 } catch (error) {
  console.log(error)
 }
 }

 useEffect(()=>{
  fetchdata()
 },[])

  return (
    <div className='container mx-auto md:p-5' >
      <div className="grid grid-cols-1 gap-5 mx-5 mt-15  md:grid-cols-3 ">
        <div className='p-5 py-11  border bg-green-600 text-white rounded-xl ' >
           <div className="flex justify-between">
              <div className='flex gap-3  '>
              <h1 className='font-bold md:text-xl '>INCOME</h1>
              <GiTakeMyMoney  className=' md:text-2xl text-xl font-bold md:mt-1' />
            </div>
            <div>
              <h1 className='font-bold md:text-xl '>{expenses.income}</h1>
            </div>
           </div>
        </div>
        <div className='p-5 py-11 border  bg-red-600 text-white rounded-xl ' >
             <div className="flex justify-between">
              <div className='flex gap-3  '>
              <h1 className='font-bold md:text-xl '>EXPENSE</h1>
              <FaArrowTrendDown  className='  md:text-2xl text-xl font-bold mt-1' />
            </div>
            <div>
              <h1 className='font-bold md:text-xl '>{expenses.expense}</h1>
            </div>
           </div>
        </div>
        <div className='p-5 py-11 border bg-blue-600 text-white rounded-xl ' >
            <div className="flex justify-between">
              <div className='flex gap-3  '>
              <h1 className='font-bold md:text-xl '>INVESTMENT</h1>
              <FaArrowTrendUp  className='  md:text-2xl text-xl font-bold mt-1' />
            </div>
            <div>
              <h1 className='font-bold md:text-xl '>{expenses.investment}</h1>
            </div>
           </div>
        </div>
      </div>
      <div className="flex justify-center my-20 items-center">
        <Pie a={expenses.income} b={expenses.expense} c={expenses.investment} />
      </div>
    </div>
  )
}
