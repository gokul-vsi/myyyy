import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Table = () => {

 
const[alldata,setAlldata] = useState([]);

const fetchalldata = () => {
    try {
   axios.get('https://myyys.onrender.com/display/alldata').then((res)=>setAlldata(res.data))
 } catch (error) {
  console.log(error)
 }
 }

useEffect(()=>{
  fetchalldata()
})





  return (
    <div> <div className="overflow-x-auto my-20 mx-30 ">
  <table className="min-w-full divide-y-2 divide-gray-200">
    <thead className="ltr:text-left rtl:text-right">
      <tr className="*:font-medium *:text-gray-900">
        <th className="px-3 py-2 whitespace-nowrap">INCOME</th>
        <th className="px-3 py-2 whitespace-nowrap">DATE</th>
        <th className="px-3 py-2 whitespace-nowrap">EXPENSE</th>
        <th className="px-3 py-2 whitespace-nowrap">INVESTMENT</th>
        <th className="px-3 py-2 whitespace-nowrap">Action</th>
      </tr>
    </thead>

 <tbody className="divide-y divide-gray-200">
      {alldata.map((dd, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">
                  {dd.income}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  1/1/1999
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {dd.expense}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {dd.investment}
                </td>
                <td className='flex my-1 gap-5 '>
                  <button className='bg-blue-600 text-white py-2 px-4 rounded-xl '>EDIT</button>
                  <button className='bg-red-600 text-white py-2 px-4 rounded-xl '>DELETE</button>
                  </td>
              </tr>
            ))}
    </tbody>
  </table>
</div> </div>
  )
}
