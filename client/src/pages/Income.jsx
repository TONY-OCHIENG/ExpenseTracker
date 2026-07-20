import { Download, XIcon } from 'lucide-react'
import React from 'react'

function Income() {
  return (
    <div className='relative w-full h-full'>
      <div className='max-w-7xl md:w-[90%] mx-auto px-2 w-full'>
        <div className='p-4 bg-white rounded-md mt-4 flex flex-col h-[400px] mb-2'>
          <div className='flex justify-between mb-2'>
            <div>
                <h1 className='text-md text-gray-800 font-extrabold'>Income Overview</h1>
                <p className='text-xs text-gray-600'>Track your earnings over time and analyse your income trends</p>
            </div>
            <button className='py-2 px-4 text-blue-600 font-extrabold cursor-pointer border rounded-md border-blue-600'>+ Add Income</button>
          </div>
        </div>
           <div className='p-4 bg-white rounded-md mt-4 flex flex-col h-[400px] overflow-y-auto'>
          <div className='flex justify-between mb-2'>
            <div>
                <h1 className='text-md text-gray-800 font-extrabold'>Income Sources</h1>
            </div>
            <button className='py-2 px-4 text-blue-600 font-extrabold cursor-pointer border rounded-md border-blue-600 flex items-center gap-2'><Download className='h-5 w-5'/> Download</button>
          </div>
        </div>

      </div>
      <div className='absolute bg-white z-50 w-[300px] md:w-[600px] flex flex-col rounded-md shadow-ms p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='flex justify-between border-b'>
       <h1 className='text-md text-gray-700 mb-4'>Add Income</h1>
       <XIcon className='h-5 w-5'/>
      </div>
      <form action="" className='mt-4'>
        <label htmlFor="incomesource">Income Source</label>
        <input type="text" className='w-full p-2 border rounded-md mb-2' required id='incomesource' name='incomeDetails'/>
        <label htmlFor="incomeprice">Amount</label>
        <input type="number" className='w-full p-2 border rounded-md mb-2' required id='incomeprice' name='incomePrice'/>    
        <label htmlFor="incomedate">Date</label>
        <input type="date" className='w-full p-2 border rounded-md mb-2' required id='incomedate' name='incomeDate'/>    
        <button className='w-full py-2 bg-blue-600 text-white font-extrabold cursor-pointer rounded-md mt-4'>Add Income</button>
      </form>
      </div>
      <div className='absolute bg-black/40 backdrop-blur-sm z-40 w-full h-screen flex flex-col shadow-ms p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
    </div>
  )
}

export default Income