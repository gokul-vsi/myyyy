import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export const Table = () => {

const [isOpen, setIsOpen] = useState(false);
const [itemToDelete, setItemToDelete] = useState(null);

  const openModal = (id) => {
  setItemToDelete(id);
  setIsOpen(true);
}
  const closeModal = () => setIsOpen(false);
 
const[alldata,setAlldata] = useState([]);

const fetchalldata = () => {
    try {
   axios.get('https://myy-s.onrender.com/display/alldatas').then((res)=>setAlldata(res.data))
 } catch (error) {
  console.log(error)
 }
 }

useEffect(()=>{
  fetchalldata()
},[])


const handleDelete = async () => {
  if (itemToDelete) {
    await axios.delete(`https://myy-s.onrender.com/display/alldatas/${itemToDelete}`);
    setIsOpen(false);
    setItemToDelete(null); // Reset after deletion
    fetchalldata();
    toast.error("Deleted Successfully")
  }
}



  return (
    <div> <div className="overflow-x-auto my-20 mx-30 ">
      <ToastContainer position="top-right" />
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
                 {dd.date}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {dd.expense}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                  {dd.investment}
                </td>
                <td className='  my-1  '>
                  <button 
        onClick={()=>openModal(dd._id)} 
        className='bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition-colors'
        type="button"
      >
        DELETE
      </button>
      {/* Modal backdrop */}
       {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center p-4">
          {/* Modal container */}
          <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full max-h-full overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={closeModal}
              type="button" 
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            
            {/* Modal content */}
            <div className="p-4 md:p-5 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500">"Gokulnath" Are you sure you want to delete this Expense?</h3>
              <button 
                onClick={handleDelete}
                type="button" 
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-3"
              >
                Yes, I'm sure
              </button>
              <button 
                onClick={closeModal}
                type="button" 
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
                  </td>
              </tr>
            ))}
    </tbody>
  </table>
      
  
</div>

  
 </div>
  )
}
