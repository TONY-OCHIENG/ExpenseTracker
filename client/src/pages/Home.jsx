import axios from 'axios'
import { ArrowBigRight, ArrowRight, BanknoteArrowDown, Coins, DollarSign, Wallet } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [income,setIncome] = useState(null)
  const [userId, setUserID] = useState(null)
  
  useEffect(() => {
    axios.get('http://localhost:3000/auth/user')
    .then((response) => {
      if (response.data.status) {
        setUserID(response.data.details.userID)
      } else {
        navigate('/login')
      }
    })
    .catch((error) => { console.log(error)})
  },[])

  useEffect(() => {
    axios.get(`http://localhost:3000/auth/totalIncome/${userId}`)
    .then((response) => {
      if (response.data.status) {
        setIncome(response.data.result)
      }
    })
    .catch((error) => { console.log(error)})
  },[userId])
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
                <h1 className='font-extrabold text-xl'>KSH {income > 0 ? income : 0}</h1>
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
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='p-4 rounded-md bg-white shadow-md h-[500px]'>
            <div className='flex justify-between items-center'>
              <p className='text-sm text-gray-600'>Recent Transactions</p>
              <Link to={'/dashboard/expense'} className='flex text-xs px-4 py-2 items-center gap-2 bg-gray-200 rounded-md text-gray-600'>See All <ArrowRight className='w-4 h-4 text-blue-600'/></Link>
            </div>
          </div>
          <div className='p-4 rounded-md bg-white shadow-md h-[500px]'>
              <div className='flex justify-between items-center'>
              <p className='text-sm text-gray-600 mt-2'>Financial Overview</p>
            </div>
          </div>
        </div>        
      </div>     
    </div>
  )
}

export default Home