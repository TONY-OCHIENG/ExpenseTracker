import React from 'react'

function Contact() {
  return (
    <div id='contact' className='py-16 bg-gray-100 h-[100vh]'>
        <h1 className='md:text-5xl text-3xl text-gray-800 font-extrabold text-center mb-4'>Contact Us</h1>
        <div className='max-w-7xl md:w-[80%] mx-auto w-full px-4 mt-10 flex justify-center items-center'>
        <div className='bg-white p-4  rounded-md md:w-[60%] md:h-[500px]'>
         <form action="" className='w-full h-full'>
          <label htmlFor="firstName" className='text-md text-gray-600'>First name</label>
          <input type="text"  className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='firstName'/>
           <label htmlFor="firstName" className='text-md text-gray-600'>Last name</label>
          <input type="text" className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='lastName'/>
           <label htmlFor="email" className='text-md text-gray-600'>Email</label>
          <input type="email"  className='text-gray-400 text-md border w-full p-1 rounded-md mb-1' name='email'/>
          <label htmlFor="text" className='text-md text-gray-600'>Message</label>
          <textarea name="text" id="text" className='p-2 text-gray-400 text-md w-full border md:h-[40%] rounded-md'></textarea>
          <button className='w-full p-2 mt-1 bg-blue-600 rounded-md font-bold cursor-pointer text-white'>Submit message</button>
        </form>
        </div>
      
        </div>
    </div>
  )
}

export default Contact