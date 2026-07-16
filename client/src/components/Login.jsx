import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
     const [details,setDetails] = useState({
        email:'',
        password:''
    })
    const [loading, setLoading] = useState(false)
    const [visible,setVisible] = useState(false)
    const navigate = useNavigate()
    const handleDetails = (event) => {
        const {name, value} = event.target
        setDetails((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    axios.defaults.withCredentials = true

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        axios.post('http://localhost:3000/auth/login',details)
        .then((response) => {
            if (response.data.status) {
                toast.success(response.data.message)
                navigate('/dashboard')
                setLoading(false)

            } else {
                toast.error(response.data.message)
                setLoading(false)
            }
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/auth/user')
        .then((response) => {
        if (response.data.status) {
            navigate('/dashboard')
        } else {
            navigate('/login')
        }
        })
        .catch((error) => {console.log(error)})
     },[])
  return (
    <div className='py-16 bg-gray-100 h-[100vh] w-full flex justify-center px-2 items-center'>
        <div className='p-4 bg-white rounded-md shadow-md md:w-[35%] w-full'>
            <form action="" className='w-full' onSubmit={handleSubmit}>
              
                <label htmlFor="email" className='text-gray-800'>Email</label>
                <input type="email"  onChange={handleDetails}  name="email" id="email" required className='p-2 border rounded-md w-full mb-2'/>
                <label htmlFor="password" className='text-gray-800'>Password</label>
                <div className='mb-4 flex items-center justify-center border  rounded-md h-10 p-2'>
                    <input type={visible ? 'text' : 'password'}  onChange={handleDetails}  name="password" id="password" required className='mt-2 outline-none rounded-md w-full mb-2'/>
                    <div className='h-full flex justify-center items-center cursor-pointer' onClick={() => setVisible(!visible)}>
                        {
                            visible ? <FaEye/> : <FaEyeSlash/>
                        } 
                    </div>
                </div>  
                <button className='w-full py-2 mt-2 text-white bg-blue-600 rounded-md cursor-pointer flex justify-center items-center'>
                {
                    loading ? <div className='h-6 w-6 border-2 rounded-full border-t-blue-400 animate-spin'></div> : <h1>Login</h1>   
                }</button>
                <p className='text-xs text-gray-600 mt-2'>Don't have an Account? <Link to={'/register'} className='font-extrabold'>Click to Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login