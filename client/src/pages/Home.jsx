import { BanknoteArrowDown, Coins, DollarSign, Wallet } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div className='w-full h-[100vh]'>
      <div className='max-w-7xl mx-auto md:w-[90%] w-full px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-4 mb-2 gap-2'>
          <div className='bg-white p-4 rounded-md shadow-md flex  gap-2'>
            <div className='h-15 w-15 text-white ml-5 flex justify-center items-center  rounded-full bg-purple-900'>
              <Coins/>             
            </div>
             <div className='flex flex-col ml-5'>
                <h1 className='text-gray-700'>Total Balance</h1>
                <h1 className='font-extrabold text-xl'>KSH 90,000</h1>
             </div>
          </div>
          <div className='bg-white p-4 rounded-md shadow-md flex  gap-2'>
            <div className='h-15 w-15 text-white ml-5 flex justify-center items-center  rounded-full bg-blue-600'>
              <Wallet/>             
            </div>
             <div className='flex flex-col ml-5'>
                <h1 className='text-gray-700'>Total Income</h1>
                <h1 className='font-extrabold text-xl'>KSH 190,000</h1>
             </div>
          </div>
          <div className='bg-white p-4 rounded-md shadow-md flex  gap-2'>
            <div className='h-15 w-15 text-white ml-5 flex justify-center items-center  rounded-full bg-red-600'>
              <BanknoteArrowDown/>             
            </div>
             <div className='flex flex-col ml-5'>
                <h1 className='text-gray-700'>Total Expense</h1>
                <h1 className='font-extrabold text-xl'>KSH 100,000</h1>
             </div>
          </div>
         
        </div>
      </div>     
    </div>
  )
}

export default Home