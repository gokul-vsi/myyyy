import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
export const Home = () => {
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
              <h1 className='font-bold text-xl '>30000</h1>
            </div>
           </div>
        </div>
        <div className='p-5 py-11 border  bg-red-600 text-white rounded-xl ' >
             <div className="flex justify-between">
              <div className='flex gap-3  '>
              <h1 className='font-bold text-xl '>Expense</h1>
              <FaArrowTrendDown  className=' text-2xl font-bold mt-1' />
            </div>
            <div>
              <h1 className='font-bold text-xl '>30000</h1>
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
              <h1 className='font-bold text-xl '>30000</h1>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}
