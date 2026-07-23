import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate()
  return (
    <div className='py-20 h-[100vh] w-full bg-white'>
        <div className='max-w-7xl md:w-[80%] w-full px-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col'>
                <h1 className='mt-20 font-light text-4xl md:text-7xl text-gray-700'>Take Control Of Your Finances</h1>
                <p className='text-sm mt-10 text-gray-600 '>Take control of your money, with Expense Tracker, track your spending, save your money all in one</p>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                    <button className='px-8 py-3 rounded-md border cursor-pointer bg-blue-600 text-white font-bold' onClick={() => {
                        navigate('/login')
                    }}>Login</button>
                    <button  className='px-8 py-3 rounded-md border cursor-pointer border-blue-600 text-blue-600 font-bold'>Contact us</button>
                </div>
            </div>
            <div className='h-[600px]'>
                <img src="/src/assets/images.jpeg" alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Hero