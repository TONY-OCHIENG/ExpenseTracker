import { Download } from 'lucide-react'
import React from 'react'

function Expense() {
  return (
    <div className='w-full h-full'>
      <div className='max-w-7xl md:w-[90%] mx-auto px-2 w-full'>
        <div className='p-4 bg-white rounded-md mt-4 flex flex-col h-[400px] mb-2'>
          <div className='flex justify-between mb-2'>
            <div>
                <h1 className='text-md text-gray-800 font-extrabold'>Expense Overview</h1>
                <p className='text-xs text-gray-600'>Track your spendings over time and gain insights into where your money goes</p>
            </div>
            <button className='py-2 px-4 text-blue-600 font-extrabold cursor-pointer border rounded-md border-blue-600'>+ Add Expense</button>
          </div>
        </div>
           <div className='p-4 bg-white rounded-md mt-4 flex flex-col h-[400px] overflow-y-auto'>
          <div className='flex justify-between mb-2'>
            <div>
                <h1 className='text-md text-gray-800 font-extrabold'>Expenses </h1>
            </div>
            <button className='py-2 px-4 text-blue-600 font-extrabold cursor-pointer border rounded-md border-blue-600 flex items-center gap-2'><Download className='h-5 w-5'/> Download</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Expense