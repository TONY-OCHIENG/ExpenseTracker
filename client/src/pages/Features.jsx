import React from 'react'

function Features() {
  return (
    <div id='features' className='h-[100vh] w-full bg-gray-100 py-16'>
        <div className='max-w-7xl md:w-[80%] mx-auto'>
            <h1 className='text-center text-4xl text-gray-800 font-extrabold'>Explore our Features</h1>
            <p className='text-center  text-gray-600'>Premium dashboard that helps you track your spendings</p>
            <div className='h-[600px] w-full'>
                <img src="src/assets/Screenshot From 2026-07-23 09-50-24.png" alt=""  className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Features