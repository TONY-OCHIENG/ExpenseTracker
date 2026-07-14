import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Register() {
    const [details,setDetails] = useState({
        firstName: '',
        lastName:'',
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const handleDetails = (event) => {
        const {name, value} = event.target
        setDetails((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/register',details)
        .then((response) => {
            if (response.data.status) {
                toast.success(response.data.message)
                navigate('/login')
            } else {
                toast.error(response.data.message)
            }
        })
        .catch((error) => console.log(error))
    }
  return (
    <div className='py-16 bg-gray-100 h-[100vh] w-full flex justify-center px-2 items-center'>
        <div className='p-4 bg-white rounded-md shadow-md md:w-[35%] w-full'>
            <form action="" className='w-full' onSubmit={handleSubmit}>
                <label htmlFor="firsrName" className='text-gray-800'>First name</label>
                <input type="text" onChange={handleDetails} name="firstName" id="firstName" required className='p-2 border rounded-md w-full mb-2'/>
                <label htmlFor="lastName" className='text-gray-800'>Last name</label>
                <input type="text"  onChange={handleDetails}  name="lastName" id="lastName" required className='p-2 border rounded-md w-full mb-2'/>
                <label htmlFor="email" className='text-gray-800'>Email</label>
                <input type="email"  onChange={handleDetails}  name="email" id="email" required className='p-2 border rounded-md w-full mb-2'/>
                <label htmlFor="password" className='text-gray-800'>Password</label>
                <input type="password"  onChange={handleDetails}  name="password" id="password" required className='p-2 border rounded-md w-full mb-2'/>
                <button className='w-full py-2 mt-2 text-white bg-blue-600 rounded-md cursor-pointer'>Register</button>
                <p className='text-xs text-gray-600 mt-2'>Already have an Account? <Link to={'/login'} className='font-extrabold'>Click to login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Register